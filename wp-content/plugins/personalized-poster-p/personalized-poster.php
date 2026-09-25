<?php
/**
 * Plugin Name: Personalized Poster (Exact UX + Camera + Zip)
 * Description: Fixed BG poster with name + cropped avatar. Camera capture + crop modal + Ready screen + ZIP download.
 * Shortcode: [poster_builder bg="https://…/poster-bg.jpg" subtitle="I WILL VISIT …"]
 * Version: 1.5.0
 * Author: Devesh
 */

if (!defined('ABSPATH')) exit;

class PP_PosterFixed {
  const ACTION = 'pp_pf_generate';
  const NONCE  = 'pp_pf_nonce';
  const DEFAULT_BG = '';

  public function __construct() {
    add_shortcode('poster_builder', [$this, 'shortcode']);
    add_action('wp_enqueue_scripts', [$this, 'enqueue']);
    add_action('wp_ajax_' . self::ACTION, [$this, 'handle']);
    add_action('wp_ajax_nopriv_' . self::ACTION, [$this, 'handle']);

    add_action('admin_menu',  [$this, 'add_settings_page']);
    add_action('admin_init',  [$this, 'register_settings']);
  }

  public function enqueue() {
    if (!is_singular()) return;
    global $post;
    if (!$post || strpos($post->post_content, '[poster_builder') === false) return;

    wp_enqueue_style('cropper-css', 'https://cdn.jsdelivr.net/npm/cropperjs@1.6.2/dist/cropper.min.css', [], '1.6.2');
    wp_enqueue_script('cropper-js', 'https://cdn.jsdelivr.net/npm/cropperjs@1.6.2/dist/cropper.min.js', [], '1.6.2', true);
  }

  public function shortcode($atts) {
    $atts = shortcode_atts([
      'bg'       => self::DEFAULT_BG,
      'subtitle' => '',
    ], $atts, 'poster_builder');

    $opts = $this->get_layout_options();
    if (empty($atts['bg']))       $atts['bg']       = $opts['bg'];
    if (empty($atts['subtitle'])) $atts['subtitle'] = $opts['subtitle'];

    $bg = esc_url_raw($atts['bg']);
    if (!$bg) return '<p style="color:#b91c1c">Poster background is not configured.</p>';

    $nonce   = wp_create_nonce(self::NONCE);
    $current = is_user_logged_in() ? wp_get_current_user()->display_name : '';
    $fixedSubtitle = sanitize_text_field($atts['subtitle']);

    // running total
    $total = intval(get_option('ppb_total_created', 0));

    ob_start(); ?>
<style>
/* ---------- Layout to mimic reference ---------- */
.ppb-shell{max-width:1100px;margin:24px auto;padding:4px}
.ppb-head{display:flex;justify-content:space-between;align-items:center;margin:6px 0 14px}
.ppb-title{font-size:42px;font-weight:800;letter-spacing:-.02em}
.ppb-subcount{opacity:.7}

.ppb-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
@media (max-width:960px){.ppb-grid{grid-template-columns:1fr}}

.ppb-left .ppb-example{border:1px solid #e5e7eb;border-radius:12px;background:#0b1020;}
.ppb-example .ratio{position:relative;width:100%;padding-top:56.25%}
.ppb-example img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}

.ppb-btn{appearance:none;border:0;background:#2563eb;color:#fff;border-radius:10px;padding:12px 18px;font-weight:700;cursor:pointer}
.ppb-btn.secondary{background:#f3f4f6;color:#111827}
.ppb-btn.block{display:block;width:100%}
.ppb-muted{font-size:12px;color:#6b7280}

/* Right panel like the reference */
.ppb-card{border:2px dashed #cbd5e1;border-radius:12px;padding:12px}
.ppb-tabbar{display:flex;gap:8px;margin-bottom:8px}
.ppb-tab{padding:8px 12px;border:1px solid #cbd5e1;background:#fff;border-radius:8px;cursor:pointer}
.ppb-tab.active{background:#e8efff;border-color:#2563eb}
.ppb-label{font-weight:800;margin:8px 0 6px}
.ppb-dashed{border:1px solid #e5e7eb;background:#fafafa;border-radius:12px;height:340px;display:flex;align-items:center;justify-content:center;overflow:hidden}
.ppb-dashed-inner{width:100%;height:100%;display:flex;align-items:center;justify-content:center}
.ppb-dashed img{max-width:100%;max-height:100%;display:block}

/* Crop modal (reference-style overlay) */
.ppb-modal{position:fixed;inset:0;background:rgba(15,23,42,.7);display:none;align-items:center;justify-content:center;z-index:9999}
.ppb-modal-card{background:#fff;border-radius:14px;padding:18px;max-width:640px;width:96%;box-shadow:0 10px 30px rgba(0,0,0,.3)}
.ppb-modal h3{margin:0 0 8px}
.ppb-modal .crop-area{height:420px;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:10px;background:#000}
.ppb-modal .crop-area img{max-width:100%}

/* Loading step */
.ppb-loading{display:none;align-items:center;justify-content:center;min-height:260px;gap:22px}
.ppb-ring{width:84px;height:84px;border-radius:50%;border:8px solid #e5e7eb;border-top-color:#2563eb;animation:ppb-spin 1s linear infinite}
@keyframes ppb-spin{to{transform:rotate(360deg)}}
.ppb-percent{font-size:28px;font-weight:800}

/* Ready step */
.ppb-ready{display:none;gap:24px;align-items:flex-start}
.ppb-ready .bigprev{flex:1;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden}
.ppb-ready .bigprev img{display:block;width:100%;height:auto}
.ppb-ready .links{width:360px}
.ppb-ready .links a{display:flex;align-items:center;gap:10px;margin:8px 0;text-decoration:none}
.ppb-ready .thumb{width:84px;height:60px;object-fit:cover;border-radius:6px;border:1px solid #e5e7eb}
.ppb-ready .cta-row{display:flex;gap:12px;margin-top:10px;flex-wrap:wrap}

/* Minor inputs */
.ppb-field{display:flex;flex-direction:column;gap:6px;margin-bottom:10px}
.ppb-input{padding:12px;border:1px solid #d1d5db;border-radius:10px}
.ppb-err{font-size:12px;color:#dc2626;margin-top:4px}

.ppb-ready .bigprev {display:none;}
</style>

<div class="ppb-shell" data-fixed-bg="<?php echo esc_attr($bg); ?>">
  <div class="ppb-head">
    <div class="ppb-title">Your own poster</div>
    <div class="ppb-subcount">Total created: <span id="ppb-total"><?php echo intval($total); ?></span></div>
  </div>

  <div class="ppb-grid">
    <div class="ppb-left">
      <div class="ppb-field">
        <label class="ppb-label">Your name</label>
        <input class="ppb-input" type="text" id="ppb-name" placeholder="Name and surname" maxlength="40" value="<?php echo esc_attr($current ?: ''); ?>" />
        <div class="ppb-err" id="ppb-name-err" style="display:none">This field is required.</div>
      </div>

      <div class="ppb-example" aria-label="Poster background preview">
        <div class="ratio">
          <img src="<?php echo esc_attr($bg); ?>" alt="Poster background example">
        </div>
      </div>

      <div style="display:flex;gap:12px;margin-top:250px">
        <button class="ppb-btn" id="ppb-generate">Create my banner</button>
        <button class="ppb-btn secondary" id="ppb-reset" type="button">Reset</button>
      </div>

      <div class="ppb-loading" id="ppb-loading" style="margin-top:18px">
        <div class="ppb-ring"></div>
        <div>
          <div class="ppb-percent" id="ppb-pct">0%</div>
          <div class="ppb-muted">Loading</div>
        </div>
      </div>

      <div class="ppb-ready" id="ppb-ready" style="margin-top:18px">
        <div class="bigprev"><img id="ppb-final-preview" alt="Final poster preview"></div>
        <div class="links">
          <h2 style="margin:0 0 8px;">Ready!</h2>
          <div id="ppb-dl-list"></div>
          <div class="cta-row">
            <a class="ppb-btn" id="ppb-dl-zip" href="#" download>Download all as .zip</a>
            <button class="ppb-btn secondary" id="ppb-create-another" type="button">Create another one</button>
          </div>
        </div>
      </div>
    </div>

    <div class="ppb-right">
      <div class="ppb-card">
        <div class="ppb-tabbar" role="tablist">
          <button class="ppb-tab active" id="tab-upload" role="tab" aria-selected="true">Upload</button>
          <button class="ppb-tab" id="tab-camera" role="tab" aria-selected="false">Camera</button>
        </div>

        <!-- Upload panel -->
        <div id="ppb-upload-pane" role="tabpanel" aria-labelledby="tab-upload">
          <div class="ppb-label">Upload &amp; crop your photo (square)</div>
          <input type="file" id="ppb-photo" accept="image/*;capture=camera">
          <div class="ppb-muted" style="margin:6px 0 10px">Tip: On mobile you can choose Camera from the picker.</div>

          <div class="ppb-dashed">
            <div class="ppb-dashed-inner" id="ppb-upload-empty">
              <div>
                <div style="text-align:center;color:#6b7280;margin-bottom:8px">No image yet</div>
                <div class="ppb-muted" style="text-align:center">Choose a photo above or switch to the Camera tab</div>
              </div>
            </div>
            <img id="ppb-upload-preview" alt="Selected photo preview" style="display:none">
          </div>

          <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
            <button class="ppb-btn secondary" id="ppb-recrop" type="button" disabled>Re-crop</button>
            <button class="ppb-btn secondary" id="ppb-clear-photo" type="button" disabled>Remove</button>
          </div>
        </div>

        <!-- Camera panel -->
        <div id="ppb-camera-pane" role="tabpanel" aria-labelledby="tab-camera" style="display:none">
          <div class="ppb-label">Use your camera</div>
          <div class="ppb-dashed" style="background:#000">
            <video id="ppb-cam" autoplay playsinline muted style="width:100%;height:100%;object-fit:cover"></video>
          </div>
          <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
            <button class="ppb-btn secondary" id="ppb-cam-start" type="button">Start</button>
            <button class="ppb-btn secondary" id="ppb-cam-flip" type="button" disabled>Flip</button>
            <button class="ppb-btn secondary" id="ppb-cam-capture" type="button" disabled>Capture</button>
            <button class="ppb-btn secondary" id="ppb-cam-stop" type="button" disabled>Stop</button>
          </div>
          <div class="ppb-muted" style="margin-top:6px">After capture you’ll crop in a popup and see the preview here.</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Crop Modal -->
<div class="ppb-modal" id="ppb-modal" aria-hidden="true">
  <div class="ppb-modal-card">
    <h3>Chosen area will appear on the banner</h3>
    <div class="crop-area">
      <img id="ppb-modal-img" alt="Crop your photo" />
    </div>
    <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:10px">
      <button class="ppb-btn secondary" id="ppb-modal-cancel" type="button">Come back</button>
      <button class="ppb-btn" id="ppb-modal-save" type="button">Save and continue</button>
    </div>
  </div>
</div>

<form id="ppb-hidden" style="display:none" enctype="multipart/form-data">
  <input type="hidden" name="action" value="<?php echo esc_attr(self::ACTION); ?>" />
  <input type="hidden" name="nonce" value="<?php echo esc_attr($nonce); ?>" />
  <input type="hidden" name="name" />
  <input type="hidden" name="subtitle" />
  <input type="hidden" name="bg" value="<?php echo esc_attr($bg); ?>" />
</form>

<script>
(function(){
  const $ = (s)=>document.querySelector(s);

  // ----- DOM
  const nameEl = $('#ppb-name');
  const nameErr = $('#ppb-name-err');
  const subEl  = $('#ppb-subtitle'); // may not exist if fixed
  const resReady = $('#ppb-ready');
  const loadingBox = $('#ppb-loading');
  const pctEl = $('#ppb-pct');
  const finalPrev = $('#ppb-final-preview');
  const dlList = $('#ppb-dl-list');
  const dlZip = $('#ppb-dl-zip');
  const totalEl = $('#ppb-total');

  const btnGen = $('#ppb-generate');
  const btnReset = $('#ppb-reset');
  const btnCreateAnother = $('#ppb-create-another');

  // Upload + preview
  const photo  = $('#ppb-photo');
  const preview = $('#ppb-upload-preview');
  const emptyBox = $('#ppb-upload-empty');
  const btnRecrop = $('#ppb-recrop');
  const btnClear = $('#ppb-clear-photo');

  // Tabs
  const tabUpload = $('#tab-upload'), tabCamera = $('#tab-camera');
  const paneUpload = $('#ppb-upload-pane'), paneCamera = $('#ppb-camera-pane');

  // Camera
  const cam = $('#ppb-cam');
  const camStart = $('#ppb-cam-start'), camFlip = $('#ppb-cam-flip'), camCap = $('#ppb-cam-capture'), camStop = $('#ppb-cam-stop');
  let stream=null, facing='user';

  // Modal / Cropper
  const modal = $('#ppb-modal'), modalImg = $('#ppb-modal-img');
  const modalSave = $('#ppb-modal-save'), modalCancel = $('#ppb-modal-cancel');
  let modalCropper=null;

  // Blob of the cropped avatar that we’ll send on Generate
  let avatarBlob=null;

  // ---------- Helpers
  function showModal(src){
    modalImg.src = src;
    modal.style.display='flex';
    modal.setAttribute('aria-hidden','false');
    if (modalCropper) { modalCropper.destroy(); modalCropper=null; }
    modalCropper = new Cropper(modalImg, {
      aspectRatio: 1, viewMode: 1, dragMode: 'move',
      background:false, autoCropArea: 0.95, responsive:true,
      minCropBoxWidth: 120, minCropBoxHeight: 120
    });
  }
  function hideModal(){
    modal.style.display='none';
    modal.setAttribute('aria-hidden','true');
    if (modalCropper) { modalCropper.destroy(); modalCropper=null; }
  }

  function setPreviewFromBlob(blob){
    avatarBlob = blob;
    const url = URL.createObjectURL(blob);
    preview.src = url;
    preview.style.display='';
    emptyBox.style.display='none';
    btnRecrop.disabled=false; btnClear.disabled=false;
  }
  function clearPreview(){
    avatarBlob = null;
    preview.removeAttribute('src');
    preview.style.display='none';
    emptyBox.style.display='';
    btnRecrop.disabled=true; btnClear.disabled=true;
  }

  function selectTab(which){
    const isUpload = (which==='upload');
    tabUpload.classList.toggle('active', isUpload);
    tabCamera.classList.toggle('active', !isUpload);
    tabUpload.setAttribute('aria-selected', isUpload?'true':'false');
    tabCamera.setAttribute('aria-selected', !isUpload?'true':'false');
    paneUpload.style.display = isUpload ? '' : 'none';
    paneCamera.style.display = !isUpload ? '' : 'none';
  }

  // ---------- Upload → open crop modal
  photo.addEventListener('change', (e)=>{
    const f = e.target.files[0]; if (!f) return;
    showModal(URL.createObjectURL(f));
    selectTab('upload');
  });

  modalSave.addEventListener('click', ()=>{
    if (!modalCropper) return;
    const canvas = modalCropper.getCroppedCanvas({width:800,height:800,fillColor:'#000'});
    canvas.toBlob(b=>{
      if (!b) return;
      setPreviewFromBlob(b);
      hideModal();
    }, 'image/jpeg', 0.95);
  });
  modalCancel.addEventListener('click', hideModal);

  btnRecrop.addEventListener('click', ()=> {
    if (!preview.src) return;
    showModal(preview.src);
  });
  btnClear.addEventListener('click', clearPreview);

  // ---------- Camera
  async function camStartFn(){
    try{
      stream = await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:facing}}, audio:false});
      cam.srcObject = stream;
      camFlip.disabled=false; camCap.disabled=false; camStop.disabled=false; camStart.disabled=true;
    }catch(err){ alert('Camera error: ' + (err.message || err)); }
  }
  function camStopFn(){
    if (stream){ stream.getTracks().forEach(t=>t.stop()); stream=null; }
    cam.srcObject=null;
    camFlip.disabled=true; camCap.disabled=true; camStop.disabled=true; camStart.disabled=false;
  }
  async function camFlipFn(){ facing = (facing==='user')?'environment':'user'; camStopFn(); await camStartFn(); }
  function camCaptureFn(){
    if (!stream) return;
    const v = cam, w=v.videoWidth||1024, h=v.videoHeight||768, s=Math.min(w,h);
    const sx=(w-s)/2, sy=(h-s)/2;
    const can=document.createElement('canvas'); can.width=s; can.height=s;
    can.getContext('2d').drawImage(v, sx, sy, s, s, 0, 0, s, s);
    can.toBlob(b=>{
      if (!b) return;
      // open crop modal on captured frame to match reference
      showModal(URL.createObjectURL(b));
      // stop preview to free device
      camStopFn();
      selectTab('upload');
    }, 'image/jpeg', 0.95);
  }
  camStart.addEventListener('click', camStartFn);
  camFlip.addEventListener('click', camFlipFn);
  camCap.addEventListener('click', camCaptureFn);
  camStop.addEventListener('click', camStopFn);
  window.addEventListener('beforeunload', camStopFn);

  // ---------- Tabs
  tabUpload.addEventListener('click', ()=>selectTab('upload'));
  tabCamera.addEventListener('click', ()=>selectTab('camera'));

  // ---------- Generate
  function fakeProgressStart(){
    loadingBox.style.display='flex';
    pctEl.textContent='0%';
    let p=0;
    const id=setInterval(()=>{
      // ease up to 85% while waiting
      if (p<85){ p += Math.max(1, Math.round((85-p)*0.08)); pctEl.textContent=p+'%'; }
    }, 120);
    return ()=>{ clearInterval(id); pctEl.textContent='100%'; };
  }

  btnGen.addEventListener('click', async (e)=>{
    e.preventDefault();
    // minimal validation like reference
    if (!nameEl.value.trim()){
      nameErr.style.display='block';
      nameEl.focus();
      return;
    }
    nameErr.style.display='none';

    // Loading
    resReady.style.display='none';
    const stop = fakeProgressStart();

    const hidden = $('#ppb-hidden');
    const name = nameEl.value.trim() || 'YOUR NAME';
    const subtitle = (<?php echo $fixedSubtitle !== '' ? 'true' : 'false'; ?>)
      ? <?php echo json_encode($fixedSubtitle); ?>
      : (subEl && subEl.value ? subEl.value.trim() : '');

    hidden.querySelector('input[name="name"]').value = name;
    hidden.querySelector('input[name="subtitle"]').value = subtitle;
    const fd = new FormData(hidden);

    if (avatarBlob) fd.append('avatar', avatarBlob, 'avatar.jpg');

    try{
      const resp = await fetch('<?php echo esc_url(admin_url('admin-ajax.php')); ?>', {method:'POST', body:fd});
      const data = await resp.json();
      stop();
      loadingBox.style.display='none';
      if (!resp.ok || data.error) throw new Error(data.error || ('HTTP '+resp.status));

      // Ready screen like reference: big preview + list + zip
      const files = data.files || [];
      const first = files[0];
      if (first) finalPrev.src = first.url;

      dlList.innerHTML = files.map(f=>(
        `<a href="${f.url}" download>
           <img class="thumb" src="${f.url}" alt="">
           <span>${f.label}</span>
         </a>`
      )).join('');

      if (data.zip && data.zip.url){
        dlZip.href = data.zip.url;
        dlZip.style.pointerEvents='auto';
        dlZip.classList.remove('secondary');
      } else {
        dlZip.href = '#';
        dlZip.style.pointerEvents='none';
        dlZip.classList.add('secondary');
      }

      // Update total created, if sent
      if (typeof data.total_created !== 'undefined') totalEl.textContent = data.total_created;

      resReady.style.display='flex';
      window.scrollTo({top:0, behavior:'smooth'});
    }catch(err){
      stop(); loadingBox.style.display='none';
      alert('Error: ' + (err.message || err));
    }
  });

  btnReset.addEventListener('click', ()=>{
    nameEl.value=''; nameErr.style.display='none';
    clearPreview();
    resReady.style.display='none';
  });
  btnCreateAnother && btnCreateAnother.addEventListener('click', ()=>{
    resReady.style.display='none';
    clearPreview();
    nameEl.focus();
  });
})();
</script>
<?php
    return ob_get_clean();
  }

  public function handle() {
    try {
      if (!wp_verify_nonce($_POST['nonce'] ?? '', self::NONCE)) throw new Exception('Bad nonce.');

      $name = strtoupper(trim(sanitize_text_field($_POST['name'] ?? 'YOUR NAME')));
      if ($name === '') $name = 'YOUR NAME';

      $subtitle = sanitize_text_field($_POST['subtitle'] ?? '');
      if ($subtitle === '') {
        $opts = $this->get_layout_options();
        if (!empty($opts['subtitle'])) $subtitle = $opts['subtitle'];
      }

      $bg_url = esc_url_raw($_POST['bg'] ?? '');
      if (!$bg_url) throw new Exception('Background not configured.');

      $bg_tmp = $this->fetch_to_tmp($bg_url);
      if (!$bg_tmp) throw new Exception('Could not fetch background image.');

      $avatar_path = null;
      if (!empty($_FILES['avatar']['name'])) {
        $uploaded = wp_handle_upload($_FILES['avatar'], ['test_form'=>false, 'mimes'=>[
          'jpg|jpeg'=>'image/jpeg','png'=>'image/png','webp'=>'image/webp'
        ]]);
        if (!empty($uploaded['error'])) throw new Exception($uploaded['error']);
        $avatar_path = $uploaded['file'];
      }

      $sizes = [
        ['w'=>1080,'h'=>1080,'label'=>'Download 1080x1080 image'],
        //['w'=>1080,'h'=>1920,'label'=>'Download 1080x1920 image'],
        //['w'=>1920,'h'=>1080,'label'=>'Download 1920x1080 image'],
      ];

      $files = [];
      foreach ($sizes as $s) $files[] = $this->compose_any($bg_tmp, $avatar_path, $name, $subtitle, $s['w'], $s['h'], $s['label']);

      @unlink($bg_tmp);
      if ($avatar_path && file_exists($avatar_path)) @unlink($avatar_path);

      // Build a ZIP like the reference "Download all as .zip"
      $zip_url = null;
      $zip_path = null;
      if (class_exists('ZipArchive')) {
        $upload_dir = wp_upload_dir();
        $slug = sanitize_title($name . '-' . md5(json_encode($files)));
        $zip_name = "poster-{$slug}-all.zip";
        $zip_path = trailingslashit($upload_dir['path']) . $zip_name;
        $zip_url  = trailingslashit($upload_dir['url'])  . $zip_name;

        $zip = new ZipArchive();
        if ($zip->open($zip_path, ZipArchive::CREATE | ZipArchive::OVERWRITE) === true) {
          foreach ($files as $f) {
            if (file_exists($f['path'])) $zip->addFile($f['path'], basename($f['path']));
          }
          $zip->close();
        } else {
          $zip_url = $zip_path = null;
        }
      }

      // bump total
      $total = intval(get_option('ppb_total_created', 0)) + 1;
      update_option('ppb_total_created', $total, false);

      wp_send_json([
        'files'=>$files,
        'zip'  => $zip_url ? ['url'=>$zip_url, 'path'=>$zip_path] : null,
        'total_created' => $total,
      ]);
    } catch (Exception $e) {
      wp_send_json(['error'=>$e->getMessage()], 400);
    }
  }

  /* ---------------- Settings ---------------- */

  private function default_layout_options() {
    return [
      'bg'       => self::DEFAULT_BG,
      'subtitle' => '',
      'layout'   => [
        'square'    => ['av'=>['x'=>0.105,'y'=>0.50,'size'=>0.18], 'name'=>['x'=>0.36,'y'=>0.55,'maxW'=>0.50,'font'=>0.045]],
        'portrait'  => ['av'=>['x'=>0.14,'y'=>0.58,'size'=>0.26],  'name'=>['x'=>0.40,'y'=>0.62,'maxW'=>0.52,'font'=>0.058]],
        'landscape' => ['av'=>['x'=>0.12,'y'=>0.61,'size'=>0.18],  'name'=>['x'=>0.38,'y'=>0.62,'maxW'=>0.48,'font'=>0.060]],
      ],
    ];
  }
  private function get_layout_options() {
    $opts = get_option('ppb_layout_options');
    if (!is_array($opts)) $opts = [];
    $def = $this->default_layout_options();
    $opts = array_merge($def, $opts);
    if (empty($opts['layout']) || !is_array($opts['layout'])) $opts['layout'] = $def['layout'];
    foreach (['square','portrait','landscape'] as $k) if (empty($opts['layout'][$k])) $opts['layout'][$k] = $def['layout'][$k];
    return $opts;
  }

  public function register_settings() {
    register_setting('ppb_settings', 'ppb_layout_options', [
      'type'=>'array',
      'sanitize_callback'=>function($val){
        $def = $this->default_layout_options();
        $out = $def;
        if (isset($val['bg']))       $out['bg']       = esc_url_raw(trim($val['bg']));
        if (isset($val['subtitle'])) $out['subtitle'] = sanitize_text_field($val['subtitle']);

        if (!empty($val['layout_json'])) {
          $json = json_decode(stripslashes($val['layout_json']), true);
          if (is_array($json)) {
            foreach (['square','portrait','landscape'] as $k) {
              if (!empty($json[$k]['av']) && !empty($json[$k]['name'])) {
                $out['layout'][$k] = [
                  'av'=>[
                    'x'=>floatval($json[$k]['av']['x'] ?? $def['layout'][$k]['av']['x']),
                    'y'=>floatval($json[$k]['av']['y'] ?? $def['layout'][$k]['av']['y']),
                    'size'=>floatval($json[$k]['av']['size'] ?? $def['layout'][$k]['av']['size']),
                  ],
                  'name'=>[
                    'x'=>floatval($json[$k]['name']['x'] ?? $def['layout'][$k]['name']['x']),
                    'y'=>floatval($json[$k]['name']['y'] ?? $def['layout'][$k]['name']['y']),
                    'maxW'=>floatval($json[$k]['name']['maxW'] ?? $def['layout'][$k]['name']['maxW']),
                    'font'=>floatval($json[$k]['name']['font'] ?? $def['layout'][$k]['name']['font']),
                  ],
                ];
              }
            }
          }
        }
        return $out;
      },
      'default'=>$this->default_layout_options(),
    ]);
  }
  public function add_settings_page() {
    add_options_page('Poster Builder','Poster Builder','manage_options','ppb-settings',[$this,'render_settings_page']);
  }
  public function render_settings_page() {
    if (!current_user_can('manage_options')) return;
    $opts = $this->get_layout_options();
    $layout_json = json_encode($opts['layout'], JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);
    ?>
    <div class="wrap">
      <h1>Poster Builder Settings</h1>
      <form method="post" action="options.php">
        <?php settings_fields('ppb_settings'); ?>
        <table class="form-table" role="presentation">
          <tr>
            <th><label for="ppb_bg">Default Background URL</label></th>
            <td><input id="ppb_bg" type="url" name="ppb_layout_options[bg]" value="<?php echo esc_attr($opts['bg']); ?>" class="regular-text code"></td>
          </tr>
          <tr>
            <th><label for="ppb_subtitle">Default Subtitle</label></th>
            <td><input id="ppb_subtitle" type="text" name="ppb_layout_options[subtitle]" value="<?php echo esc_attr($opts['subtitle']); ?>" class="regular-text"></td>
          </tr>
          <tr>
            <th><label for="ppb_layout_json">Layout JSON</label></th>
            <td>
              <textarea id="ppb_layout_json" name="ppb_layout_options[layout_json]" rows="16" class="large-text code"><?php echo esc_textarea($layout_json); ?></textarea>
            </td>
          </tr>
        </table>
        <?php submit_button(); ?>
      </form>
    </div>
    <?php
  }

  /* -------------- Core image compose -------------- */

  private function fetch_to_tmp($url) {
    $res = wp_remote_get($url, ['timeout'=>15]);
    if (is_wp_error($res)) return null;
    $body = wp_remote_retrieve_body($res);
    if (!$body) return null;
    $tmp = wp_tempnam($url);
    file_put_contents($tmp, $body);
    return $tmp;
  }

  private function layout_for($W,$H){
    $r = $W / $H;
    $opt = $this->get_layout_options(); $L=$opt['layout'];
    if (abs($r-1.0)<0.05) return $L['square'];
    if ($r<0.75)          return $L['portrait'];
    return $L['landscape'];
  }

  private function compose_any($bg_path,$avatar_path,$name,$subtitle,$W,$H,$label){
    $upload_dir = wp_upload_dir();
    if (!is_dir($upload_dir['path']) || !is_writable($upload_dir['path'])) {
      throw new Exception('Uploads not writable: ' . $upload_dir['path']);
    }
    if (class_exists('Imagick')) return $this->compose_imagick($bg_path,$avatar_path,$name,$subtitle,$W,$H,$label);
    return $this->compose_gd($bg_path,$avatar_path,$name,$subtitle,$W,$H,$label);
  }

  private function compose_imagick($bg_path,$avatar_path,$name,$subtitle,$W,$H,$label){
    $img = new Imagick($bg_path);
    $img->setImageColorspace(Imagick::COLORSPACE_SRGB);
    $img->resizeImage($W,$H,Imagick::FILTER_LANCZOS,1,true);
    $img->extentImage($W,$H,0,0);

    $gradient = new Imagick();
    $gradient->newPseudoImage($W,$H,'gradient:rgba(0,0,0,0)-rgba(0,0,0,0.60)');
    $img->compositeImage($gradient, Imagick::COMPOSITE_OVER, 0, 0);

    $L = $this->layout_for($W,$H);

    if ($avatar_path) {
      $av = new Imagick($avatar_path);
      $AV = (int)round($W * $L['av']['size']);
      $av->resizeImage($AV,$AV,Imagick::FILTER_LANCZOS,1,true);
      $mask = new Imagick(); $mask->newImage($AV,$AV,new ImagickPixel('transparent'),'png');
      $dr = new ImagickDraw(); $dr->setFillColor('white'); $dr->circle($AV/2,$AV/2,$AV/2,0); $mask->drawImage($dr);
      $av->setImageMatte(true); $av->compositeImage($mask, Imagick::COMPOSITE_DSTIN, 0, 0);
      $img->compositeImage($av, Imagick::COMPOSITE_OVER, (int)round($W*$L['av']['x']), (int)round($H*$L['av']['y']));
    }

    $white = new ImagickDraw(); $white->setFillColor('white'); $white->setTextAntialias(true);
    $maxWidth = (int)round($W*$L['name']['maxW']);
    $fontSize = max(18,(int)round($W*$L['name']['font'])); $white->setFontSize($fontSize);
    $m = $img->queryFontMetrics($white,$name);
    while ($m['textWidth']>$maxWidth && $fontSize>18){ $fontSize-=2; $white->setFontSize($fontSize); $m=$img->queryFontMetrics($white,$name); }
    $tx=(int)round($W*$L['name']['x']); $ty=(int)round($H*$L['name']['y']);
    $img->annotateImage($white,$tx,$ty,0,$name);

    if ($subtitle){
      $accent = new ImagickDraw(); $accent->setFillColor('rgb(255,200,40)');
      $subSize = max(20,(int)round($W*0.035)); $accent->setFontSize($subSize);
      $maxW2 = (int)round($W*0.55);
      $words=explode(' ',$subtitle); $line=''; $lines=[];
      foreach($words as $w){ $t=trim($line.' '.$w); $mm=$img->queryFontMetrics($accent,$t); if ($mm['textWidth']>$maxW2 && $line!==''){ $lines[]=$line; $line=$w; } else { $line=$t; } }
      if ($line!=='') $lines[]=$line;
      $lh = $subSize*1.2; $sy=(int)round($ty + $fontSize*1.0);
      foreach($lines as $i=>$l){ $img->annotateImage($accent,$tx,$sy+$i*$lh,0,$l); }
    }

    $upload_dir = wp_upload_dir();
    $slug = sanitize_title($name . '-' . md5(($avatar_path ?: 'noavatar') . $W.'x'.$H.$subtitle.basename($bg_path)));
    $filename = "poster-{$slug}-{$W}x{$H}.jpg";
    $path = trailingslashit($upload_dir['path']).$filename;
    $url  = trailingslashit($upload_dir['url']).$filename;
    $img->setImageFormat('jpeg'); $img->setImageCompression(Imagick::COMPRESSION_JPEG); $img->setImageCompressionQuality(90);
    $img->writeImage($path);
    return ['label'=>$label,'url'=>$url,'path'=>$path];
  }

  private function compose_gd($bg_path,$avatar_path,$name,$subtitle,$W,$H,$label){
    $bg = $this->gd_load($bg_path); if (!$bg) throw new Exception('Failed to load background (GD).');
    $srcW=imagesx($bg); $srcH=imagesy($bg);
    $canvas=imagecreatetruecolor($W,$H);
    imagecopyresampled($canvas,$bg,0,0,0,0,$W,$H,$srcW,$srcH);

    // overlay
    $overlay=imagecreatetruecolor($W,$H); imagesavealpha($overlay,true);
    $trans=imagecolorallocatealpha($overlay,0,0,0,127); imagefill($overlay,0,0,$trans);
    for($y=0;$y<$H;$y++){ $alpha=(int)(60*$y/$H); $col=imagecolorallocatealpha($overlay,0,0,0,$alpha); imageline($overlay,0,$y,$W,$y,$col); }
    imagecopy($canvas,$overlay,0,0,0,0,$W,$H);

    $L=$this->layout_for($W,$H);
    if ($avatar_path){
      $av=$this->gd_load($avatar_path);
      if ($av){
        $AV=(int)round($W*$L['av']['size']);
        $scaled=imagecreatetruecolor($AV,$AV); imagesavealpha($scaled,true);
        $tr=imagecolorallocatealpha($scaled,0,0,0,127); imagefill($scaled,0,0,$tr);
        imagecopyresampled($scaled,$av,0,0,0,0,$AV,$AV,imagesx($av),imagesy($av));
        $mask=imagecreatetruecolor($AV,$AV); imagesavealpha($mask,true);
        $clear=imagecolorallocatealpha($mask,0,0,0,127); imagefill($mask,0,0,$clear);
        $opaque=imagecolorallocatealpha($mask,0,0,0,0); imagefilledellipse($mask,$AV/2,$AV/2,$AV,$AV,$opaque);
        for($x=0;$x<$AV;$x++)for($y=0;$y<$AV;$y++){ $a=(imagecolorat($mask,$x,$y)&0x7F000000)>>24; if($a===127) imagesetpixel($scaled,$x,$y,imagecolorallocatealpha($scaled,0,0,0,127)); }
        imagecopy($canvas,$scaled,(int)round($W*$L['av']['x']),(int)round($H*$L['av']['y']),0,0,$AV,$AV);
      }
    }

    $fontBold=$this->guess_font(true); $fontReg=$this->guess_font(false);
    if(!$fontBold) throw new Exception('No TTF font found for GD fallback.');

    $white=imagecolorallocate($canvas,255,255,255);
    $tx=(int)round($W*$L['name']['x']); $ty=(int)round($H*$L['name']['y']);
    $maxW=(int)round($W*$L['name']['maxW']); $fs=max(18,(int)round($W*$L['name']['font']));
    while($fs>12){ $bb=imagettfbbox($fs,0,$fontBold,$name); $w=$bb[2]-$bb[0]; if($w<=$maxW) break; $fs-=2; }
    imagettftext($canvas,$fs,0,$tx,$ty,$white,$fontBold,$name);

    if($subtitle){
      $accent=imagecolorallocate($canvas,255,200,40);
      $ss=max(22,(int)round($W*0.035)); $maxW2=(int)round($W*0.55);
      $words=explode(' ',$subtitle); $line=''; $lines=[];
      foreach($words as $w){ $t=trim($line.' '.$w); $bb=imagettfbbox($ss,0,($fontReg?:$fontBold),$t); $wd=$bb[2]-$bb[0];
        if($wd>$maxW2 && $line!==''){ $lines[]=$line; $line=$w; } else { $line=$t; } }
      if($line!=='') $lines[]=$line;
      $lh=(int)($ss*1.2); $sy=(int)round($ty+$fs*1.0);
      foreach($lines as $i=>$l) imagettftext($canvas,$ss,0,$tx,$sy+$i*$lh,$accent,($fontReg?:$fontBold),$l);
    }

    $upload_dir=wp_upload_dir();
    $slug=sanitize_title($name.'-'.md5(($avatar_path?:'noavatar').$W.'x'.$H.$subtitle.basename($bg_path)));
    $filename="poster-{$slug}-{$W}x{$H}.jpg";
    $path=trailingslashit($upload_dir['path']).$filename;
    $url =trailingslashit($upload_dir['url']).$filename;
    imagejpeg($canvas,$path,90); imagedestroy($canvas);
    return ['label'=>$label,'url'=>$url,'path'=>$path];
  }

  private function gd_load($path){
    $info=@getimagesize($path); if(!$info) return null;
    switch($info['mime']){
      case 'image/jpeg': return imagecreatefromjpeg($path);
      case 'image/png':  return imagecreatefrompng($path);
      case 'image/webp': return function_exists('imagecreatefromwebp')?imagecreatefromwebp($path):null;
      default: return null;
    }
  }

  private function guess_font($bold=false){
    $c=[
      get_stylesheet_directory().'/assets/fonts/'.($bold?'Bold.ttf':'Regular.ttf'),
      '/usr/share/fonts/truetype/dejavu/'.($bold?'DejaVuSans-Bold.ttf':'DejaVuSans.ttf'),
      '/usr/share/fonts/truetype/liberation/'.($bold?'LiberationSans-Bold.ttf':'LiberationSans-Regular.ttf'),
    ];
    foreach($c as $f) if(file_exists($f)) return $f;
    return null;
  }
}

new PP_PosterFixed();
