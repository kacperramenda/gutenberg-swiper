<?php
/**
 * Plugin Name: Gutenberg Swiper
 * Description: Slider oparty o gutenberg i Swiper.js
 * Version: 1.0.0
 * Author: Kacper Ramenda
 * Text Domain: gutenberg-swiper
 */

if (!defined('ABSPATH')) {
    exit;
}

function gutenberg_swiper_block_init(): void
{
    register_block_type(__DIR__ . '/src/container');
    register_block_type(__DIR__ . '/src/slide');
}

add_action('init', 'gutenberg_swiper_block_init');