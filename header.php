<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<title><?php wp_title( '|', true, 'right' ); ?><?= bloginfo('name')?></title>
    <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.png" />
  	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>
</head>

<body <?php /*body_class();*/ ?>>
	<div id="page">
		<header role="banner">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
				<img id="logo" alt="Sektionslogga" src="<?php bloginfo('stylesheet_directory'); ?>/images/logo.svg">
			</a>
			<img id="phantom" alt="Fantomenlogga" src="<?php bloginfo('stylesheet_directory'); ?>/images/fantomen.svg">
			<div class="header-text">
    			<h1 id="site-title">
    				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
    					<?= bloginfo('name')?>
    				</a>
    			</h1>
    			<nav class="horizontal">
    				<?php wp_nav_menu( array( 'theme_location' => 'top', 'menu_class' => 'nav-menu' ) ); ?>
                    <?php 
                    $url = "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
                    if (qtrans_getLanguage() == 'sv') {
                        $new_lang = "English";
                        $new_url = qtrans_convertURL($url, 'en');
                    }  
                    else {
                        $new_lang = "Svenska";
                        $new_url = qtranxf_convertURL($url, 'sv', $forceadmin = false, $showDefaultLanguage=true);
                    }
                    if (is_ssl()) {
                        $new_url = preg_replace("/^http:/", "https:", $new_url);
                    }
                    ?>
                    <a id="language-link" href="<?= $new_url ?>"><?= $new_lang?></a>
    			</nav>
            </div>
		</header>
