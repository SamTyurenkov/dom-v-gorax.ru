<?php
$yoast_title = get_post_meta($post_id, '_yoast_wpseo_title', true);
$yoast_meta = get_post_meta($post->ID, '_yoast_wpseo_metadesc', true);
?>

<!doctype html>

  <html <?php language_attributes(); ?> >

	<head>
		<meta charset="utf-8">
		
		<!-- Force IE to use the latest rendering engine available -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<!-- Mobile Meta -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php if(is_home() || is_frontpage()) : ?>
		<title><?php if ($yoast_meta) echo esc_html($yoast_title); ?></title>
		<meta name="description" content="<?php if ($yoast_meta) echo esc_attr($yoast_meta); ?>" />
		<?php endif; ?>

		<?php wp_head(); ?>

	</head>