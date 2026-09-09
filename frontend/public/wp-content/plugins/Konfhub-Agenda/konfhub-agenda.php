<?php
/**
 * Plugin Name: KonfHub Agenda, Speaker & Exhibitor Plugin
 * Description: Adds agenda and speaker shortcodes from KonfHub with JS rendering and Elementor support.
 * Version: 1.2
 * Author: Devesh
 */

if (!defined('ABSPATH')) exit;

// Enqueue JavaScript
function konfhub_enqueue_scripts() {
    wp_enqueue_script(
        'konfhub-agenda-script',
        plugin_dir_url(__FILE__) . 'assets/agenda.js',
        ['jquery'],
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'konfhub_enqueue_scripts');

// Load shortcodes
require_once plugin_dir_path(__FILE__) . 'includes/shortcode-agenda.php';
require_once plugin_dir_path(__FILE__) . 'includes/shortcode-speakers.php';
require_once plugin_dir_path(__FILE__) . 'includes/shortcode-exhibitors.php';
?>
