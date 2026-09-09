<?php

/**
 * Salient functions and definitions.
 *
 * @package Salient
 * @since 1.0
 */


 /**
  * Define Constants.
  */
define( 'NECTAR_THEME_DIRECTORY', get_template_directory() );
define( 'NECTAR_FRAMEWORK_DIRECTORY', get_template_directory_uri() . '/nectar/' );
define( 'NECTAR_THEME_NAME', 'salient' );


if ( ! function_exists( 'get_nectar_theme_version' ) ) {
	function nectar_get_theme_version() {
		return '17.0.3';
	}
}


/**
 * Load text domain.
 */
add_action( 'after_setup_theme', 'nectar_lang_setup' );

if ( ! function_exists( 'nectar_lang_setup' ) ) {
	function nectar_lang_setup() {
		load_theme_textdomain( 'salient', get_template_directory() . '/lang' );
	}
}


/**
 * General WordPress.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/wp-general.php';


/**
 * Get Salient theme options.
 */
function get_nectar_theme_options() {

	$legacy_options  = get_option( 'salient' );
	$current_options = get_option( 'salient_redux' );
	
	if ( ! empty( $current_options ) && is_array($current_options) ) {
		return $current_options;
	} elseif ( ! empty( $legacy_options ) && is_array($legacy_options) ) {
		return $legacy_options;
	} else {
		return array();
	}
}

$nectar_options                    = get_nectar_theme_options();
$nectar_get_template_directory_uri = get_template_directory_uri();


require_once NECTAR_THEME_DIRECTORY . '/includes/class-nectar-theme-manager.php';


/**
 * Register/Enqueue theme assets.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/icon-collections.php';
require_once NECTAR_THEME_DIRECTORY . '/includes/class-nectar-element-assets.php';
require_once NECTAR_THEME_DIRECTORY . '/includes/class-nectar-element-styles.php';
require_once NECTAR_THEME_DIRECTORY . '/includes/class-nectar-lazy.php';
require_once NECTAR_THEME_DIRECTORY . '/includes/class-nectar-delay-js.php';
require_once NECTAR_THEME_DIRECTORY . '/includes/class-nectar-login.php';
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/enqueue-scripts.php';
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/enqueue-styles.php';
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/dynamic-styles.php';


/**
 * Salient Plugin notices.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/plugin-notices/salient-plugin-notices.php';


/**
 * Salient welcome page.
 */
 require_once NECTAR_THEME_DIRECTORY . '/nectar/welcome/welcome-page.php';


/**
 * Theme hooks & actions.
 */
function nectar_hooks_init() {

	require_once NECTAR_THEME_DIRECTORY . '/nectar/hooks/hooks.php';
	require_once NECTAR_THEME_DIRECTORY . '/nectar/hooks/actions.php';

}

add_action( 'after_setup_theme', 'nectar_hooks_init', 10 );


/**
 * Post category meta.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/meta/category-meta.php';


/**
 * Media and theme image sizes.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/media.php';


/**
 * Navigation menus
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/assets/functions/wp-menu-custom-items/menu-item-custom-fields.php';
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/nav-menus.php';


/**
 * TGM Plugin inclusion.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/tgm-plugin-activation/class-tgm-plugin-activation.php';
require_once NECTAR_THEME_DIRECTORY . '/nectar/tgm-plugin-activation/required_plugins.php';


/**
 * WPBakery functionality.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/wpbakery-init.php';


/**
 * Theme skin specific class and assets.
 */
$nectar_theme_skin    = NectarThemeManager::$skin;
$nectar_header_format = ( ! empty( $nectar_options['header_format'] ) ) ? $nectar_options['header_format'] : 'default';

add_filter( 'body_class', 'nectar_theme_skin_class' );

function nectar_theme_skin_class( $classes ) {
	global $nectar_theme_skin;
	$classes[] = $nectar_theme_skin;
	return $classes;
}


function nectar_theme_skin_css() {
	global $nectar_theme_skin;
	wp_enqueue_style( 'skin-' . $nectar_theme_skin );
}

add_action( 'wp_enqueue_scripts', 'nectar_theme_skin_css' );



/**
 * Search related.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/search.php';


/**
 * Register Widget areas.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/widget-related.php';


/**
 * Header navigation helpers.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/header.php';


/**
 * Blog helpers.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/blog.php';


/**
 * Page helpers.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/page.php';
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/footer.php';

/**
 * Theme options panel (Redux).
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/redux-salient.php';


/**
 * WordPress block editor helpers (Gutenberg).
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/gutenberg.php';


/**
 * Admin assets.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/admin-enqueue.php';


/**
 * Pagination Helpers.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/pagination.php';


/**
 * Page header.
 */
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/page-header.php';


/**
 * Third party.
 */
require_once NECTAR_THEME_DIRECTORY . '/includes/third-party-integrations/seo.php';
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/wpml.php';
require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/woocommerce.php';


/**
 * v10.5 update assist.
 */
 require_once NECTAR_THEME_DIRECTORY . '/nectar/helpers/update-assist.php';

// ---- Carousel logo sizes ----
add_action('after_setup_theme', function () {
  // Width-only crops keep aspect ratio
  add_image_size('logo-sm', 160);  // mobile
  add_image_size('logo-md', 320);  // tablet
  add_image_size('logo-lg', 480);  // desktop
});

// Always add lazy/decoding attributes to images we output
add_filter('wp_get_attachment_image_attributes', function ($attr, $attachment, $size) {
  if (!isset($attr['loading']))  $attr['loading']  = 'lazy';
  if (!isset($attr['decoding'])) $attr['decoding'] = 'async';
  return $attr;
}, 10, 3);

/**
 * Build a responsive, optimized URL for a remote image via wsrv.nl (WebP, quality 75).
 * @param string $url  Original remote image URL (KonfHub)
 * @param int    $w    Target width
 * @return string
 */
function kh_img_resized_url( $url, $w ){
  // inside fit, keep aspect, webp, q=75, strip metadata
  $params = http_build_query([
    'url'    => $url,
    'w'      => (int) $w,
    'fit'    => 'inside',
    'output' => 'webp',
    'q'      => 75,
    'we'     => 1,      // strip metadata
  ]);
  return 'https://wsrv.nl/?' . $params;
}

/**
 * Quick aspect guesser (only used to set width/height to stabilize layout/CLS).
 * If you know typical aspect ratio, hard-code it (e.g. 3:1) for even better results.
 */
function kh_logo_box_size_for_width( $w ){
  $ratio = 2.8; // width:height guess for most sponsor logos in your UI
  $h = max( 40, round( $w / $ratio ) );
  return [ (int)$w, (int)$h ];
}
