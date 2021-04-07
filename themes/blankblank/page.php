<?php

global $post;
get_header();
$title = get_the_title();
$author_id = $post->post_author;
$curuser = get_current_user_id();

?>
<body>
<?php wp_body_open(); ?>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<div class="content" style="max-width:1440px;margin:40px auto">
    <?php the_content(); ?>
    </div>        
    <?php endwhile; else : ?>

           <div class="notfound" style="height:700px;text-align:center;padding-top:200px">
           <div style="font-size: 70px">404</div>
           <div style="font-size: 35px"> Страница не найдена </div>
           </div>

    <?php endif; ?>
    <?php wp_footer(); ?>
</body>
</html>