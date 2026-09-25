<?php
// ==============================
// Shortcode: [konfhub_entities]
// ==============================
if (!function_exists('konfhub_entities_shortcode')) {
function konfhub_entities_shortcode($atts) {
    $atts = shortcode_atts(array(
        'event_slug'    => '',
        'entity'        => '3',
        'layout'        => 'auto',
        'show_headings' => '',
        'cache_mins'    => 5,
        'show_name'     => '0',          // 0 | 1
        'click'         => 'modal',      // modal | website | none
        'popup'         => '',           // legacy toggle; '1' == modal
        'show_country'  => '0',   // 0 | 1
        'cat_opts' => '',
        'scale'         => '',
        'direction'     => 'left',
    ), $atts, 'konfhub_entities');

    $event_slug = sanitize_text_field($atts['event_slug']);
    if (empty($event_slug)) {
        return '<p><strong>Error:</strong> Please provide <code>event_slug</code>.</p>';
    }

    $raw_entities = array_filter(array_map('trim', explode(',', strtolower((string)$atts['entity']))));
    if (empty($raw_entities)) { $raw_entities = array('3'); }

    $map_token_to_id = function($token) {
        if (is_numeric($token)) {
            $n = (int)$token;
            return in_array($n, array(1,2,3), true) ? $n : null;
        }
        if (in_array($token, array('sponsor','sponsors'), true)) return 1;
        if (in_array($token, array('partner','partners'), true)) return 2;
        if (in_array($token, array('exhibitor','exhibitors'), true)) return 3;
        return null;
    };

    $entity_ids = array_values(array_unique(array_filter(array_map($map_token_to_id, $raw_entities))));
    if (empty($entity_ids)) {
        return '<p><strong>Error:</strong> Invalid <code>entity</code>. Use 1/2/3 or sponsors/partners/exhibitors (CSV allowed).</p>';
    }

$layout = strtolower(trim($atts['layout']));
if (!in_array($layout, array('auto','merged','grouped','carousel'), true)) $layout = 'auto';
    $is_merged = ($layout === 'merged') || ($layout === 'auto' && count($entity_ids) > 1);
    $show_headings = $atts['show_headings'] === '' ? null : (bool)intval($atts['show_headings']); // null => auto

// --- mode normalization: support click="popup" as alias of "modal"
$mode_in = (trim($atts['popup']) === '1') ? 'modal' : strtolower(trim((string)$atts['click']));
if ($mode_in === 'popup') { $mode_in = 'modal'; }

$opts = array(
    'show_name'    => (bool)intval($atts['show_name']),
    'mode'         => $mode_in,
    'show_country' => (bool)intval($atts['show_country']),
);


    // --- Category options parsing ---
    $cat_opts_map = array();
    if (!empty($atts['cat_opts'])) {
        foreach (array_map('trim', explode(',', $atts['cat_opts'])) as $kv) {
            if (strpos($kv, ':') !== false) {
                list($k,$v) = array_map('trim', explode(':', $kv, 2));
                $cat_opts_map[strtolower($k)] = strtolower($v);
            }
        }
    }

// --- Global scale (carousel). Supports 80, 150, +20, -30 ---
$global_scale = null;
if ($atts['scale'] !== '') {
    $raw = trim((string)$atts['scale']);
    if (preg_match('/^[+-]?\d{1,3}$/', $raw)) {
        if ($raw[0] === '+' || $raw[0] === '-') {
            // relative: +20 => 120, -30 => 70
            $global_scale = 100 + (int)$raw;
        } else {
            // absolute: 80, 150, etc.
            $global_scale = (int)$raw;
        }
        // clamp so things don’t explode
        $global_scale = max(10, min(200, $global_scale));
    }
}


    if (!in_array($opts['mode'], array('modal','website','none'), true)) {
        $opts['mode'] = 'modal';
    }

    $fetch_payload = function($event_slug, $entity_id, $cache_mins) {
        $cache_key = 'kh_entities_' . md5($event_slug.'|'.$entity_id);
        $payload = get_transient($cache_key);
        if ($payload === false) {
            $url = "https://api.konfhub.com/event/public/{$event_slug}/entity/{$entity_id}";
            $resp = wp_remote_get($url, array(
                'timeout' => 12,
                'headers' => array('Accept' => 'application/json'),
            ));
            if (is_wp_error($resp)) return new WP_Error('kh_http', 'Unable to fetch data.');
            $code = (int) wp_remote_retrieve_response_code($resp);
            if ($code !== 200) return new WP_Error('kh_api', 'API error.');
            $payload = json_decode(wp_remote_retrieve_body($resp), true);
            set_transient($cache_key, $payload, (int)$cache_mins * MINUTE_IN_SECONDS);
        }
        return $payload;
    };

    $flatten_payload = function($payload) {
        if (empty($payload)) return array();
        $out = array();

        if (!empty($payload['categorized']) && is_array($payload['categorized'])) {
            foreach ($payload['categorized'] as $cat) {
                if (!empty($cat['entity']) && is_array($cat['entity'])) {
                    foreach ($cat['entity'] as $e) { $out[] = $e; }
                }
            }
        }
        if (!empty($payload['uncategorized']) && is_array($payload['uncategorized'])) {
            foreach ($payload['uncategorized'] as $e) { $out[] = $e; }
        }

        if (empty($out) && is_array($payload) && isset($payload[0]['entity_name'])) {
            $out = $payload;
        }
        return $out;
    };

    $dedupe_entities = function(array $list) {
        $seen = array();
        $unique = array();
        foreach ($list as $e) {
            $id = isset($e['id']) ? (string)intval($e['id']) : null;
            $key = $id ? ('id:'.$id) : md5( ($e['image_url'] ?? '').'|'.($e['entity_name'] ?? '') );
            if (!isset($seen[$key])) {
                $seen[$key] = true;
                $unique[] = $e;
            }
        }
        return $unique;
    };

ob_start(); ?>
<div class="exhibitors-section">
<?php if ($layout === 'carousel'): ?>
    <?php
    // -------- CAROUSEL BRANCH --------

    // Build slides across all requested entity_ids, honoring cat_opts (hide/scale)
    $slides = array(); // items: ['entity' => $e, 'scale' => int]
    foreach ($entity_ids as $eid) {
        $payload = $fetch_payload($event_slug, $eid, (int)$atts['cache_mins']);
        if (is_wp_error($payload)) {
            echo '<p>Unable to fetch data for entity '.esc_html($eid).'.</p>';
            continue;
        }

        // Categorized: use positional keys cat1, cat2, ...
        if (!empty($payload['categorized']) && is_array($payload['categorized'])) {
            foreach ($payload['categorized'] as $i => $cat) {
                $cat_key = 'cat'.($i+1);

                // hide?
                if (isset($cat_opts_map[$cat_key]) && $cat_opts_map[$cat_key] === 'hide') {
                    continue;
                }

                // compute scale (supports +N grow, N or N% absolute/shrink back-compat)
                $scale = 100;
                if (isset($cat_opts_map[$cat_key])) {
                    $raw = trim($cat_opts_map[$cat_key]);
                    if ($raw !== 'hide') {
                        if (preg_match('/^\+(\d{1,3})$/', $raw, $m)) {
                            $scale = 100 + (int)$m[1];
                        } elseif (preg_match('/^(\d{1,3})\%?$/', $raw, $m)) {
                            $n = (int)$m[1];
                            $scale = ($n > 100) ? $n : (100 - $n); // back-compat
                        }
                        $scale = max(10, min(200, $scale));
                    }
                }

                if ($global_scale !== null) {
                    $scale = $global_scale;
                }

                foreach (($cat['entity'] ?? array()) as $e) {
                    $slides[] = array('entity' => $e, 'scale' => $scale);
                }
            }
        }

        // Uncategorized → treat as next category index
        if (!empty($payload['uncategorized']) && is_array($payload['uncategorized'])) {
            $ucIdx = (!empty($payload['categorized']) && is_array($payload['categorized']))
                        ? (count($payload['categorized']) + 1) : 1;
            $ucKey = 'cat'.$ucIdx;

            if (!(isset($cat_opts_map[$ucKey]) && $cat_opts_map[$ucKey] === 'hide')) {
                $scale = 100;
                if (isset($cat_opts_map[$ucKey])) {
                    $raw = trim($cat_opts_map[$ucKey]);
                    if ($raw !== 'hide') {
                        if (preg_match('/^\+(\d{1,3})$/', $raw, $m)) {
                            $scale = 100 + (int)$m[1];
                        } elseif (preg_match('/^(\d{1,3})\%?$/', $raw, $m)) {
                            $n = (int)$m[1];
                            $scale = ($n > 100) ? $n : (100 - $n);
                        }
                        $scale = max(10, min(200, $scale));
                    }
                }

                if ($global_scale !== null) {
                    $scale = $global_scale;
                }

                foreach ($payload['uncategorized'] as $e) {
                    $slides[] = array('entity' => $e, 'scale' => $scale);
                }
            }
        }

        // Flat fallback
        if (empty($payload['categorized']) && empty($payload['uncategorized'])
            && is_array($payload) && isset($payload[0]['entity_name'])) {
            foreach ($payload as $e) {
                $slides[] = array('entity' => $e, 'scale' => ($global_scale ?? 100));
            }

        }
    }

    // Dedupe slides by id or image_url+name
    $seen = array(); $slides_unique = array();
    foreach ($slides as $s) {
        $e = $s['entity'];
        $id = isset($e['id']) ? (string)intval($e['id']) : null;
        $key = $id ? ('id:'.$id) : md5( ($e['image_url'] ?? '').'|'.($e['entity_name'] ?? '') );
        if (!isset($seen[$key])) { $seen[$key] = true; $slides_unique[] = $s; }
    }
    $slides = $slides_unique;

    // Enqueue Swiper (CDN) and init
    if (function_exists('wp_enqueue_style')) {
        wp_enqueue_style('swiper', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css', array(), null);
    }
    if (function_exists('wp_enqueue_script')) {
        wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js', array(), null, true);
    }

    $carousel_id = 'khc_'.wp_rand(10000,99999);
    ?>
<div class="kh-carousel swiper" id="<?php echo esc_attr($carousel_id); ?>">
  <div class="swiper-wrapper kh-autoscroll">
    <?php foreach ($slides as $s) { echo konfhub_render_entity_slide($s['entity'], $opts, (int)$s['scale']); } ?>
  </div>
</div>

<style>
  /* Make the motion perfectly linear and uninterrupted for THIS instance */
  #<?php echo esc_attr($carousel_id); ?> .swiper-wrapper {
    transition-timing-function: linear !important;
  }
  /* Let Swiper pack as many logos as fit and glide them smoothly */
  #<?php echo esc_attr($carousel_id); ?> .swiper-slide {
    width: auto !important; /* slidesPerView:'auto' needs natural widths */
  }
</style>


    <?php
    $dir = isset($atts['direction']) ? strtolower(trim($atts['direction'])) : 'left';
    $reverse = ($dir === 'right') ? 'true' : 'false'; // right => reverseDirection true
    ?>

<?php
$init_js = "(function(){ if(!window.Swiper) return;
  var el = document.getElementById('".$carousel_id."');
  if (!el) return;

  // ==== TUNABLES ====
  // Smaller speed = faster motion; larger = slower.
  // Try 6000 (fast), 8000 (medium-fast), 12000 (medium), 20000 (slow).
  var SPEED_MS = 3000;

  // Horizontal gap between logos (px)
  var GAP_PX = 24;

  // ==== CONTINUOUS MARQUEE SWIPER ====
  var swiper = new Swiper(el, {
    slidesPerView: 'auto',
    spaceBetween: GAP_PX,

    loop: true,
    loopAdditionalSlides: 32,   // plenty of clones = no gaps
    allowTouchMove: false,
    simulateTouch: false,
    grabCursor: false,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      stopOnLastSlide: false,
      waitForTransition: false,
      reverseDirection: ".$reverse."
    },

    // Linear, constant velocity
    speed: SPEED_MS,

    // Defensive restarts
    on: {
      init: function(s){
        try { s.autoplay.start(); } catch(e){}
        ensureWrappedWidth(s);
      },
      resize: function(s){
        try { s.update(); s.autoplay.start(); } catch(e){}
        ensureWrappedWidth(s);
      },
      // If Swiper ever thinks it reached an end, immediately jump and continue.
      reachEnd: function(s){
        try { s.slideToLoop(0, 0, true); s.autoplay.start(); } catch(e){}
      }
    }
  });

  // If the page regains focus, keep it moving.
  document.addEventListener('visibilitychange', function(){
    if (!document.hidden) {
      try { swiper.autoplay.start(); } catch(e){}
    }
  });

  // --- Ensure we have enough slides so motion never stalls.
  function ensureWrappedWidth(s){
    try {
      var wrapper = s.wrapperEl;            // .swiper-wrapper
      var container = s.el;                 // .swiper
      if (!wrapper || !container) return;

      // If total slide width < 2x container, clone slides until we exceed that.
      var maxLoops = 10; // safety to avoid runaway
      var wrapperW = wrapper.scrollWidth;
      var needed = container.clientWidth * 2;

      while (wrapperW < needed && maxLoops-- > 0) {
        var slides = Array.from(wrapper.children);
        slides.forEach(function(node){
          var clone = node.cloneNode(true);
          // Mark clones to avoid nested observers doing silly things
          clone.setAttribute('data-kh-clone','1');
          wrapper.appendChild(clone);
        });
        // Recompute
        wrapperW = wrapper.scrollWidth;
      }

      // Update swiper internals after DOM changes
      s.updateSlides();
      s.update();
      s.autoplay.start();
    } catch(e){}
  }

})();";
if (function_exists('wp_add_inline_script')) {
  wp_add_inline_script('swiper', $init_js, 'after');
} else {
  echo '<script>'.$init_js.'</script>';
}
?>


<?php elseif ($is_merged): ?>
    <?php
    // -------- MERGED BRANCH (unchanged) --------
    $merged = array();
    foreach ($entity_ids as $eid) {
        $payload = $fetch_payload($event_slug, $eid, (int)$atts['cache_mins']);
        if (is_wp_error($payload)) {
            echo '<p>Unable to fetch data for entity '.esc_html($eid).'.</p>';
            continue;
        }
        $merged = array_merge($merged, $flatten_payload($payload));
    }
    $merged = $dedupe_entities($merged);
    usort($merged, function($a, $b) {
        return strcasecmp($a['entity_name'] ?? '', $b['entity_name'] ?? '');
    });
    ?>
    <div class="exhibitor-grid">
        <?php foreach ($merged as $entity) { echo konfhub_render_entity_card_flex($entity, $opts); } ?>
    </div>

<?php else: ?>
    <?php
    // -------- GROUPED BRANCH (keep your existing code BELOW here unchanged) --------
    $eid = $entity_ids[0];
    $payload = $fetch_payload($event_slug, $eid, (int)$atts['cache_mins']);
    if (is_wp_error($payload)) {
        echo '<p>Unable to fetch data.</p>';
    } else {
        $with_headings = ($show_headings === null) ? true : (bool)$show_headings;

        if ($with_headings && !empty($payload['categorized']) && is_array($payload['categorized'])) {
            foreach ($payload['categorized'] as $i => $cat) {
                $cat_name = !empty($cat['category_name']) ? $cat['category_name'] : '';
                $cat_key  = 'cat'.($i+1);

                if (isset($cat_opts_map[$cat_key]) && $cat_opts_map[$cat_key] === 'hide') {
                    continue;
                }

                $scale = 100;
                if (isset($cat_opts_map[$cat_key])) {
                    $raw = trim($cat_opts_map[$cat_key]);
                    if ($raw !== 'hide') {
                        if (preg_match('/^\+(\d{1,3})$/', $raw, $m)) {
                            $scale = 100 + (int)$m[1];
                        } elseif (preg_match('/^(\d{1,3})\%?$/', $raw, $m)) {
                            $n = (int)$m[1];
                            $scale = ($n > 100) ? $n : (100 - $n);
                        }
                        $scale = max(10, min(200, $scale));
                    }
                }

                $entities = $cat['entity'] ?? array();

                if ($cat_name) echo '<h3 class="exhibitor-category">'.esc_html($cat_name).'</h3>';
                echo '<div class="exhibitor-grid" data-scale="'.$scale.'">';
                $chunks = array_chunk($entities, 3);
                foreach ($chunks as $row) {
                    konfhub_print_row($row, $opts, $scale);
                }
                echo '</div>';
            }
        } else {
            $flat = $flatten_payload($payload);
            echo '<div class="exhibitor-grid">';
            foreach ($flat as $entity) { echo konfhub_render_entity_card_flex($entity, $opts); }
            echo '</div>';
        }

        if ($with_headings && !empty($payload['uncategorized']) && is_array($payload['uncategorized'])) {
            $ucIdx = (isset($i) ? $i + 1 : 1);
            $ucKey = 'cat'.$ucIdx;

            if (!(isset($cat_opts_map[$ucKey]) && $cat_opts_map[$ucKey] === 'hide')) {
                $scale = 100;
                if (isset($cat_opts_map[$ucKey])) {
                    $raw = trim($cat_opts_map[$ucKey]);
                    if ($raw !== 'hide') {
                        if (preg_match('/^\+(\d{1,3})$/', $raw, $m)) {
                            $scale = 100 + (int)$m[1];
                        } elseif (preg_match('/^(\d{1,3})\%?$/', $raw, $m)) {
                            $n = (int)$m[1];
                            $scale = ($n > 100) ? $n : (100 - $n);
                        }
                        $scale = max(10, min(200, $scale));
                    }
                }

                $entities = $payload['uncategorized'];

                echo '<h3 class="exhibitor-category">Others</h3>';
                echo '<div class="exhibitor-grid" data-scale="'.$scale.'">';
                $chunks = array_chunk($entities, 3);
                foreach ($chunks as $row) {
                    konfhub_print_row($row, $opts, $scale);
                }
                echo '</div>';
            }
        }

        if (empty($payload['categorized']) && empty($payload['uncategorized'])
            && is_array($payload) && isset($payload[0]['entity_name'])) {
            echo '<div class="exhibitor-grid">';
            foreach ($payload as $entity) { echo konfhub_render_entity_card_flex($entity, $opts); }
            echo '</div>';
        }
    }
    ?>
<?php endif; ?>
</div>

<?php
// Append once per page:
static $kh_modal_js_printed = false;
if (!$kh_modal_js_printed) {
  $kh_modal_js_printed = true;
  ?>
  <script>
  (function(){
    if (window.__KH_MODAL_BOUND__) return;
    window.__KH_MODAL_BOUND__ = true;

    function openModal(modal){
      if (!modal) return;
      modal.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
      // focus the dialog for a11y
      var dlg = modal.querySelector('.kh-modal__dialog');
      if (dlg) { dlg.setAttribute('tabindex','-1'); dlg.focus({preventScroll:true}); }
      document.addEventListener('keydown', onKeydown, true);
    }
    function closeModal(modal){
      if (!modal) return;
      modal.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeydown, true);
    }
    function onKeydown(e){
      if (e.key === 'Escape'){
        var open = document.querySelector('.kh-modal[aria-hidden="false"]');
        if (open) closeModal(open);
      }
    }

    // click to open
    document.addEventListener('click', function(e){
      var card = e.target.closest('.exhibitor-card[data-modal-target]');
      if (card){
        // only intercept when this grid is configured for modal/popup
        var grid = card.closest('.exhibitor-grid, .exhibitors-section, .swiper');
        var isModalMode = true; // cards are only rendered this way in modal mode
        if (isModalMode){
          e.preventDefault();
          var sel = card.getAttribute('data-modal-target');
          var modal = sel ? document.querySelector(sel) : null;
          openModal(modal);
        }
      }
      // close actions
      if (e.target.matches('[data-modal-close], .kh-modal__backdrop')){
        var m = e.target.closest('.kh-modal');
        if (m) closeModal(m);
      }
    }, true);
  })();
  </script>
  <?php
}
?>


<?php
return ob_get_clean();

}


// Render one row of cards; center if fewer than 3 items
if (!function_exists('konfhub_print_row')) {
function konfhub_print_row(array $row_entities, array $opts, int $scale = 100) {
  $row_count = count($row_entities);

  // classes (unchanged)
  $row_class = 'exhibitor-grid__row';
  if ($row_count < 3) $row_class .= ' align-center count-' . $row_count;

  // NEW: row-level scale (absolute, not relative)
  $rowScale = max(0.6, min(1.3, $scale / 100)); // clamp so rows don't vanish/grow too much

  echo '<div class="'. $row_class .'" style="--row-scale: '. $rowScale .'">';
  foreach ($row_entities as $ent) {
    echo konfhub_render_entity_card_flex($ent, $opts, $scale);
  }
  echo '</div>';
}
}

if (!function_exists('konfhub_render_entity_slide')) {
function konfhub_render_entity_slide($entity, $opts = array(), $scale = 100) {
    // defaults
    $defaults = array('mode' => 'website', 'show_name' => false, 'show_country' => false);
    $o = array_merge($defaults, is_array($opts) ? $opts : array());

    $name    = !empty($entity['entity_name']) ? esc_html($entity['entity_name']) : 'Unnamed';
    $img     = (!empty($entity['image_url']) && filter_var($entity['image_url'], FILTER_VALIDATE_URL))
                ? esc_url($entity['image_url']) : 'https://via.placeholder.com/400x200?text=Logo';
    $website = !empty($entity['website_url']) ? esc_url($entity['website_url']) : '';

    // ---------- SCALE -> card height + padding ----------
    // base desktop values (match your CSS defaults)
    $baseH   = 110;   // base card height
    $basePad = 12;    // base inner padding
    // clamp scale (20–200%) so extreme values don't break layout
    $s = max(20, min(200, (int)$scale)) / 100;

    $cardH = max(60,  (int) round($baseH   * $s));        // scaled card height
    $pad   = max(6,   (int) round($basePad * $s));        // scaled padding
    $imgCap= max(36,  $cardH - (2 * $pad));               // inner space for the logo

    // expose as CSS variables so CSS can use them
    $wrapStyle = sprintf('--slide-h:%dpx; --pad:%dpx;', $cardH, $pad);
    // optional per-image fallback cap (CSS already uses the vars)
    $imgStyle  = sprintf('max-height:%dpx;', $imgCap);

    // ---------- responsive sources ----------
    $src_480 = kh_img_resized_url($img, 480);
    $src_320 = kh_img_resized_url($img, 320);
    $src_240 = kh_img_resized_url($img, 240);
    $src_160 = kh_img_resized_url($img, 160);

    $src_fallback = $src_320;
    [ $w_attr, $h_attr ] = kh_logo_box_size_for_width(320);

    $sizes  = '(max-width: 767px) 28vw, (max-width: 1024px) 18vw, 12vw';
    $srcset = "{$src_160} 160w, {$src_240} 240w, {$src_320} 320w, {$src_480} 480w";

    ob_start(); ?>
    <div class="swiper-slide">
      <div class="kh-slide" style="<?php echo esc_attr($wrapStyle); ?>">
        <?php if ($o['mode'] === 'website' && $website): ?>
          <a href="<?php echo esc_url($website); ?>" target="_blank" rel="noopener"
             class="kh-slide__link" aria-label="<?php echo esc_attr($name); ?>">
            <img
              class="kh-slide__logo"
              src="<?php echo esc_url($src_fallback); ?>"
              srcset="<?php echo esc_attr($srcset); ?>"
              sizes="<?php echo esc_attr($sizes); ?>"
              alt="<?php echo esc_attr($name); ?> logo"
              loading="lazy"
              decoding="async"
              width="<?php echo (int)$w_attr; ?>"
              height="<?php echo (int)$h_attr; ?>"
              fetchpriority="low"
              style="<?php echo esc_attr($imgStyle); ?>"
            >
          </a>
        <?php else: ?>
          <img
            class="kh-slide__logo"
            src="<?php echo esc_url($src_fallback); ?>"
            srcset="<?php echo esc_attr($srcset); ?>"
            sizes="<?php echo esc_attr($sizes); ?>"
            alt="<?php echo esc_attr($name); ?> logo"
            loading="lazy"
            decoding="async"
            width="<?php echo (int)$w_attr; ?>"
            height="<?php echo (int)$h_attr; ?>"
            fetchpriority="low"
            style="<?php echo esc_attr($imgStyle); ?>"
          >
        <?php endif; ?>
      </div>
    </div>
    <?php
    return ob_get_clean();
}}


add_shortcode('konfhub_entities', 'konfhub_entities_shortcode');
}


if (!function_exists('konfhub_render_entity_card_flex')) {
  function konfhub_render_entity_card_flex($entity, $opts = array(), $scale = 100) {
    $defaults = array('mode' => 'modal', 'show_name' => false, 'show_country' => false);
    $o = array_merge($defaults, is_array($opts) ? $opts : array());

if (($o['mode'] ?? '') === 'modal' && function_exists('konfhub_render_entity_card_modal')) {
  return konfhub_render_entity_card_modal($entity, $o, $scale);  // <-- pass $o
}
    $id      = !empty($entity['id']) ? intval($entity['id']) : mt_rand(10000,99999);
    $name    = !empty($entity['entity_name']) ? esc_html($entity['entity_name']) : 'Unnamed';
    $img     = (!empty($entity['image_url']) && filter_var($entity['image_url'], FILTER_VALIDATE_URL))
                ? esc_url($entity['image_url']) : 'https://via.placeholder.com/600x300?text=Logo';
    $website = !empty($entity['website_url']) ? esc_url($entity['website_url']) : '';

    $city     = !empty($entity['city']) ? esc_html($entity['city']) : '';
    $country  = !empty($entity['country']) ? esc_html($entity['country']) : '';
    $locField = !empty($entity['location']) ? esc_html($entity['location']) : '';
    $displayLocation = $locField ?: ($country ?: trim($city . ($city && $country ? ', ' : '')));

    // --- Uniform card + per-category logo box height ---
    $baseCardH = 180;                               // overall card feel
    $cardH     = max(160, (int) round($baseCardH * ($scale / 100)));

    $baseLogoH = 110;                               // logo box for 100%
    $logoH     = max(60,  (int) round($baseLogoH * ($scale / 100)));  // category scaling here

    // inline vars: card min-height, and CSS var for logo box height
    $innerStyle = "min-height:{$cardH}px; --logo-h:{$logoH}px;";

    ob_start(); ?>
<?php
  // convert scale (e.g., 70/100/130) to a reasonable grow factor
  // clamp so very small/large scales don’t break rows
  $grow = max(0.8, min(1.4, $scale / 100)); // tune 0.8–1.4 as you like
?>
<div class="exhibitor-card" style="--card-grow: <?php echo $grow; ?>;">
      <div class="exhibitor-card__inner" style="<?php echo esc_attr($innerStyle); ?>">
        <?php if ($o['mode'] === 'website' && $website): ?>
          <a class="exhibitor-card__link" href="<?php echo $website; ?>" target="_blank" rel="noopener">
            <div class="exhibitor-card__media">
              <img src="<?php echo $img; ?>" alt="<?php echo $name; ?> logo" class="exhibitor-card__logo" loading="lazy">
            </div>
          </a>
        <?php else: ?>
          <div class="exhibitor-card__media">
            <img src="<?php echo $img; ?>" alt="<?php echo $name; ?> logo" class="exhibitor-card__logo" loading="lazy">
          </div>
        <?php endif; ?>

        <?php if ($o['show_name'] || ($o['show_country'] && $displayLocation)): ?>
          <div class="exhibitor-card__meta">
            <?php if ($o['show_name']): ?>
              <div class="exhibitor-card__name"><?php echo $name; ?></div>
            <?php endif; ?>
            <?php if ($o['show_country'] && $displayLocation): ?>
              <div class="exhibitor-card__country"><?php echo $displayLocation; ?></div>
            <?php endif; ?>
          </div>
        <?php endif; ?>
      </div>
    </div>
    <?php
    return ob_get_clean();
  }
}



function konfhub_render_entity_card_modal($entity, $opts = array(), $scale = 100) {
  $defaults = array('mode' => 'modal', 'show_name' => false, 'show_country' => false);
  $o = array_merge($defaults, is_array($opts) ? $opts : array());

  $id      = !empty($entity['id']) ? intval($entity['id']) : mt_rand(10000,99999);
  $name    = !empty($entity['entity_name']) ? esc_html($entity['entity_name']) : 'Unnamed';
  $img     = (!empty($entity['image_url']) && filter_var($entity['image_url'], FILTER_VALIDATE_URL))
              ? esc_url($entity['image_url']) : 'https://via.placeholder.com/600x300?text=Logo';
  $website = !empty($entity['website_url']) ? esc_url($entity['website_url']) : '';
  $booth   = !empty($entity['booth_number']) ? esc_html($entity['booth_number']) : '';
  $city     = !empty($entity['city']) ? esc_html($entity['city']) : '';
  $country  = !empty($entity['country']) ? esc_html($entity['country']) : '';
  $location = !empty($entity['location']) ? esc_html($entity['location']) : '';
  if (!$location) { $location = trim($city . ($city && $country ? ', ' : '') . $country); }
  $displayLocation = $location ?: ($country ?: $city);

  // Card + logo-box sizing (match flex renderer)
  $baseCardH = 180;
  $cardH     = max(160, (int) round($baseCardH * ($scale / 100)));
  $baseLogoH = 110;
  $logoH     = max(60,  (int) round($baseLogoH * ($scale / 100)));
  $innerStyle = "min-height:{$cardH}px; --logo-h:{$logoH}px;";

  // About/categories for modal content
  $about = '';
  foreach (['about','description','short_description','long_description','company_overview','profile','desc','blurb','bio','summary','details'] as $k) {
    if (!empty($entity[$k]) && is_string($entity[$k])) { 
      $about = wp_kses_post( nl2br($entity[$k]) );
      break;
    }
  }
  $catsRaw = null;
  foreach (['solution_categories','solution_category','categories','category'] as $k) {
    if (!empty($entity[$k])) { $catsRaw = $entity[$k]; break; }
  }
  $catsArr = [];
  if (is_array($catsRaw)) { $catsArr = array_map('sanitize_text_field', $catsRaw); }
  elseif (is_string($catsRaw)) { $catsArr = array_map('trim', explode(',', $catsRaw)); }
  $categories = !empty($catsArr) ? implode(', ', array_filter($catsArr)) : '';

  ob_start(); ?>
<?php
  // convert scale (e.g., 70/100/130) to a flex grow factor
  $grow = max(0.8, min(1.4, $scale / 100));
?>
<div class="exhibitor-card"
     style="--card-grow: <?php echo $grow; ?>;"
     role="button"
     tabindex="0"
     aria-label="Open details for <?php echo $name; ?>"
     data-modal-target="#kh-modal-<?php echo $id; ?>">
    <div class="exhibitor-card__inner" style="<?php echo esc_attr($innerStyle); ?>">
      <div class="exhibitor-card__media">
        <img src="<?php echo $img; ?>" alt="<?php echo $name; ?> logo"
             class="exhibitor-card__logo" loading="lazy">
      </div>

      <?php if ($o['show_name'] || ($o['show_country'] && $displayLocation)): ?>
        <div class="exhibitor-card__meta">
          <?php if ($o['show_name']): ?>
            <div class="exhibitor-card__name"><?php echo $name; ?></div>
          <?php endif; ?>
          <?php if ($o['show_country'] && $displayLocation): ?>
            <div class="exhibitor-card__country"><?php echo $displayLocation; ?></div>
          <?php endif; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>

  <div class="kh-modal" id="kh-modal-<?php echo $id; ?>" aria-hidden="true" role="dialog" aria-modal="true">
    <div class="kh-modal__backdrop" data-modal-close></div>
    <div class="kh-modal__dialog" role="document">
      <button class="kh-modal__close" aria-label="Close" data-modal-close>&times;</button>

      <div class="kh-modal__header">
        <img src="<?php echo $img; ?>" alt="<?php echo $name; ?> logo" class="kh-modal__logo">
        <div class="kh-modal__title">
          <h3><?php echo $name; ?></h3>
          <?php if ($displayLocation): ?><div class="kh-modal__location"><?php echo $displayLocation; ?></div><?php endif; ?>
        </div>
      </div>

      <?php if ($about): ?>
        <p class="kh-modal__about"><?php echo $about; ?></p>
      <?php endif; ?>

      <?php if ($categories): ?>
        <p class="kh-modal__cats"><strong>Solution categories:</strong> <?php echo esc_html($categories); ?></p>
      <?php endif; ?>

      <div class="kh-modal__actions">
        <?php if ($booth): ?><span class="kh-btn kh-btn--ghost">STALL: <?php echo $booth; ?></span><?php endif; ?>
        <?php if ($website): ?><a class="kh-btn" href="<?php echo $website; ?>" target="_blank" rel="noopener">VISIT WEBSITE</a><?php endif; ?>
      </div>
    </div>
  </div>
  <?php
  return ob_get_clean();
}

