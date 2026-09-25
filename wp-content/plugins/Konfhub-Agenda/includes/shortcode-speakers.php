<?php


function display_konfhub_speakers($atts = []) {
    $atts = shortcode_atts(array(
        'event_slug' => '',
        'event_id'   => '',
        'tz'         => 'UTC',
        'cache_mins' => 5,
    ), $atts, 'konfhub_speakers_dynamic');

    $event_slug = trim($atts['event_slug']);
    $event_id   = trim($atts['event_id']);
    $tz         = sanitize_text_field($atts['tz']);
    $cache_mins = intval($atts['cache_mins']);
    if ($cache_mins <= 0) $cache_mins = 5;

    if (!empty($event_slug)) {
        $api_url = "https://api.konfhub.com/event/public/{$event_slug}/speakers";
        $cache_key = 'konfhub_speakers_slug_' . md5($event_slug . '_' . $tz);
    } elseif (!empty($event_id)) {
        $api_url = "https://api.konfhub.com/event/public/id/{$event_id}/speakers";
        $cache_key = 'konfhub_speakers_id_' . md5($event_id . '_' . $tz);
    } else {
        return '<p><strong>Konfhub speakers:</strong> missing <code>event_slug</code> or <code>event_id</code>.</p>';
    }

    $cached = get_transient($cache_key);
    if ($cached !== false) {
        $cached .= '<script>console.log("Konfhub speakers: served from cache", {event_slug:"'. esc_js($event_slug) .'", cache_key:"'. esc_js($cache_key) .'"});</script>';
        return $cached;
    }

    $response = wp_remote_get($api_url, array('timeout' => 12));
    if (is_wp_error($response)) {
        $err = esc_html($response->get_error_message());
        return "<p>Error fetching Konfhub speakers: {$err}</p>";
    }

    $code = wp_remote_retrieve_response_code($response);
    if ($code !== 200) {
        return "<p>Konfhub API returned HTTP {$code} for URL: " . esc_url($api_url) . "</p>";
    }

    $body = wp_remote_retrieve_body($response);
    $speakers = json_decode($body, true);
    if (!is_array($speakers) || empty($speakers)) {
        return '<p>No speakers found (empty or invalid JSON from Konfhub).</p>';
    }

    ob_start();
    ?>
    <div class="konfhub-speakers-wrap" data-event-slug="<?php echo esc_attr($event_slug); ?>" data-event-id="<?php echo esc_attr($event_id); ?>">
        <style>
        .konfhub-speakers-grid {
            display:flex;
            flex-wrap:wrap;
            gap:24px;
            margin:30px 0;
        }
        .speaker-card-wrapper { flex: 1 1 calc(25% - 24px); max-width: calc(25% - 24px); box-sizing:border-box; }
        @media (max-width:1024px){ .speaker-card-wrapper{ flex:1 1 calc(33.333% - 24px); max-width: calc(33.333% - 24px);} }
        @media (max-width:768px){ .speaker-card-wrapper{ flex:1 1 calc(50% - 24px); max-width: calc(50% - 24px);} }
        @media (max-width:480px){ .speaker-card-wrapper{ flex:1 1 100%; max-width:100%; } }
        .speaker-card { background:#fff; text-align:center; padding:18px; border-radius:2px; box-shadow:0 2px 12px rgba(0,0,0,0.06); display:flex; flex-direction:column; gap:12px; height:100%; cursor:pointer; }
        .speaker-photo { width:100%; padding-bottom:100%; position:relative; overflow:hidden; border-radius:2px; background:#0e0e0e; }
        .speaker-photo img { position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; display:block; }
        .speaker-name { font-weight:800; font-size:18px; margin:6px 0 0; }
        .speaker-title, .speaker-org { font-size:13px; color:#666; line-height:1.3; }
        .speaker-modal { display:none; position:fixed; z-index:99999; left:0; top:0; right:0; bottom:0; background:rgba(0,0,0,0.7); align-items:center; justify-content:center; padding:24px; }
        .speaker-modal .modal-inner { max-width:900px; width:100%; background:#fff; border-radius:6px; overflow:hidden; position:relative; padding:24px; box-sizing:border-box; }
        .modal-body { display:flex; gap:20px; align-items:flex-start; }
        .modal-photo { flex:0 0 220px; }
        .modal-photo img { width:220px; height:220px; object-fit:cover; border-radius:4px; }
        .modal-content { flex:1 1 auto; }
        .close-modal { position:absolute; top:12px; right:12px; font-size:22px; cursor:pointer; color:#333; }
        body.popup-open { overflow:hidden; }
        </style>

        <div class="konfhub-speakers-grid">
            <?php
            foreach ($speakers as $idx => $s) {
                $raw_id = '';
                if (!empty($s['speaker_id'])) $raw_id = (string)$s['speaker_id'];
                elseif (!empty($s['id'])) $raw_id = (string)$s['id'];
                else $raw_id = uniqid('speaker_');

                $dom_id = preg_replace('/[^A-Za-z0-9_-]/', '_', $raw_id);
                $popup_dom_id = 'popup_' . $dom_id;

                $name = !empty($s['name']) ? $s['name'] : ( !empty($s['full_name']) ? $s['full_name'] : 'Unnamed Speaker' );
                $designation = !empty($s['designation']) ? $s['designation'] : ( !empty($s['title']) ? $s['title'] : '' );
                $org = !empty($s['organisation']) ? $s['organisation'] : ( !empty($s['company']) ? $s['company'] : '' );

                $img = '';
                if (!empty($s['image_url'])) $img = $s['image_url'];
                elseif (!empty($s['photo'])) $img = $s['photo'];
                elseif (!empty($s['profile_image'])) $img = $s['profile_image'];
                elseif (!empty($s['thumbnail'])) $img = $s['thumbnail'];

                if (!empty($img) && strpos($img, 'http') !== 0) {
                    $img = rtrim('https://media.konfhub.com', '/') . '/' . ltrim($img, '/');
                }

                $bio = !empty($s['about']) ? $s['about'] : ( !empty($s['description']) ? $s['description'] : '' );
                $bio = wp_kses_post($bio);

                ?>
                <div class="speaker-card-wrapper">
                    <div class="speaker-card" role="button" data-popup-id="<?php echo esc_attr($popup_dom_id); ?>" aria-label="<?php echo esc_attr($name); ?>">
                        <?php if (!empty($img)): ?>
                            <div class="speaker-photo"><img loading="lazy" src="<?php echo esc_url($img); ?>" alt="<?php echo esc_attr($name); ?>"></div>
                        <?php else: ?>
                            <div class="speaker-photo" style="display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">
                                <span><?php echo esc_html(strtoupper(substr($name,0,1))); ?></span>
                            </div>
                        <?php endif; ?>

                        <div class="speaker-meta">
                            <h3 class="speaker-name"><?php echo esc_html($name); ?></h3>
                            <?php if (!empty($designation)): ?><div class="speaker-title"><?php echo esc_html($designation); ?></div><?php endif; ?>
                            <?php if (!empty($org)): ?><div class="speaker-org"><?php echo esc_html($org); ?></div><?php endif; ?>
                        </div>
                    </div>
                </div>

                <div id="<?php echo esc_attr($popup_dom_id); ?>" class="speaker-modal" aria-hidden="true" data-speaker-rawid="<?php echo esc_attr($raw_id); ?>">
                    <div class="modal-inner" role="dialog" aria-labelledby="modal-title-<?php echo esc_attr($popup_dom_id); ?>">
                        <div class="close-modal" data-close>&times;</div>
                        <div class="modal-body">
                            <div class="modal-photo">
                                <?php if (!empty($img)): ?>
                                    <img src="<?php echo esc_url($img); ?>" alt="<?php echo esc_attr($name); ?>">
                                <?php else: ?>
                                    <div style="width:220px;height:220px;background:#eee;display:flex;align-items:center;justify-content:center;font-size:36px;"><?php echo esc_html(strtoupper(substr($name,0,1))); ?></div>
                                <?php endif; ?>
                            </div>
                            <div class="modal-content">
                                <h2 id="modal-title-<?php echo esc_attr($popup_dom_id); ?>"><?php echo esc_html($name); ?></h2>
                                <?php if (!empty($designation)): ?><div style="font-weight:700;margin-bottom:6px;"><?php echo esc_html($designation); ?></div><?php endif; ?>
                                <?php if (!empty($org)): ?><div style="color:#666;margin-bottom:12px;"><?php echo esc_html($org); ?></div><?php endif; ?>
                                <?php if (!empty($bio)): ?><div class="speaker-bio"><?php echo $bio; ?></div><?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
                <?php
            }
            ?>
        </div> 

        <script>
        (function(){
          function domReady(fn){
            if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
            else fn();
          }

          domReady(function(){
            console.log("Konfhub speakers loaded", { event_slug: "<?php echo esc_js($event_slug); ?>", event_id: "<?php echo esc_js($event_id); ?>", api_url: "<?php echo esc_js($api_url); ?>", cache_mins: <?php echo intval($cache_mins); ?> });

            document.querySelectorAll('.speaker-card').forEach(function(card){
              card.addEventListener('click', function(e){
                var popupId = card.getAttribute('data-popup-id');
                if(!popupId) return;
                var popup = document.getElementById(popupId);
                if(!popup) return;
                popup.style.display = 'flex';
                popup.setAttribute('aria-hidden','false');
                document.body.classList.add('popup-open');
              });
            });

            document.addEventListener('click', function(e){
              if(e.target && e.target.closest('[data-close]')){
                closeAllSpeakerPopups();
              }
            });

            document.addEventListener('click', function(e){
              var openPopups = document.querySelectorAll('.speaker-modal[aria-hidden="false"]');
              openPopups.forEach(function(p){
                var inner = p.querySelector('.modal-inner');
                if(inner && !inner.contains(e.target) && !e.target.closest('.speaker-card')){
                  closeAllSpeakerPopups();
                }
              });
            });

            document.addEventListener('keydown', function(e){
              if(e.key === 'Escape') closeAllSpeakerPopups();
            });

            function closeAllSpeakerPopups(){
              var list = document.querySelectorAll('.speaker-modal');
              list.forEach(function(p){
                p.style.display = 'none';
                p.setAttribute('aria-hidden','true');
              });
              document.body.classList.remove('popup-open');
            }

            window.openSpeakerPopupSafe = function(domId){
              var popup = document.getElementById(domId);
              if(popup){
                popup.style.display = 'flex';
                popup.setAttribute('aria-hidden','false');
                document.body.classList.add('popup-open');
                return true;
              }
              return false;
            };
          });
        })();
        </script>
    </div>
    <?php
    $output = ob_get_clean();
    set_transient($cache_key, $output, $cache_mins * MINUTE_IN_SECONDS);

    return $output;
}

if (!shortcode_exists('konfhub_speakers_dynamic')) {
    add_shortcode('konfhub_speakers_dynamic', 'display_konfhub_speakers');
} else {
    remove_shortcode('konfhub_speakers_dynamic');
    add_shortcode('konfhub_speakers_dynamic', 'display_konfhub_speakers');
}
