<?php 
if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

//Add your custom functions here.
add_filter('wpseo_pre_analysis_post_content', 'mysite_opengraph_content');
function mysite_opengraph_content($val) {
return preg_replace("/<img[^>]+>/i", "", $val);
}

add_theme_support( 'wp-block-styles' );

function site_scripts()
{
	$ajaxurl = admin_url('admin-ajax.php');
	wp_enqueue_script('main', get_template_directory_uri() . '/js/main.js', array('jquery'), filemtime(get_template_directory() . '/js/main.js'), true);

	wp_localize_script('main', 'localize', array(
		'ajaxurl' => $ajaxurl
	));
	wp_enqueue_style('main', get_template_directory_uri() . '/css/main.css', array(), filemtime(get_template_directory() . '/css/main.css'), 'all');


}
add_action('wp_enqueue_scripts', 'site_scripts', 99999999);
