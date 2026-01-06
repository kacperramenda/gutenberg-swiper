<?php
/**
 * Plugin Name: Gutenberg Swiper
 * Description: Slider oparty o gutenberg i Swiper.js
 * Version: 1.0.0
 * Author: Kacper Ramenda
 * Text Domain: gutenberg-swiper
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class Gutenberg_Swiper_Plugin {

    private static $instance = null;

    public static function get_instance(): Gutenberg_Swiper_Plugin {
        if ( null === self::$instance ) {
            self::$instance = new self();
        }

        return self::$instance;
    }
    private function __construct() {
        add_action( 'init', array( $this, 'register_assets_and_blocks' ) );
        add_filter( 'script_loader_tag', array( $this, 'set_view_script_module_type' ), 10, 3 );
    }

    public function register_assets_and_blocks(): void {
        wp_register_script(
            'gutenberg-slider-editor-script',
            plugins_url( 'build/index.js', __FILE__ ),
            array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-data' ),
            filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
        );

        wp_register_style(
            'gutenberg-slider-style',
            plugins_url( 'build/style.css', __FILE__ )
        );

        register_block_type( __DIR__ . '/src/container' );
        register_block_type( __DIR__ . '/src/slide' );
    }

    public function set_view_script_module_type( $tag, $handle, $src ) {
        if ( strpos( $src, '/build/view.js' ) !== false ) {
            return '<script type="module" src="' . esc_url( $src ) . '"></script>';
        }

        return $tag;
    }
}

Gutenberg_Swiper_Plugin::get_instance();