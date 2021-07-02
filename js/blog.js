jQuery(function($) {
    /*Dekstop version Slide*/
    

	var slideHeight = $(window).height();
	$('.scroll-height').css('height',slideHeight);

	$(window).resize(function(){
        'use strict';
		$('.scroll-height').css('height',slideHeight);
	});
	
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>slideHeight ){
			$('.main-nav').addClass('navbar-fixed-top');
		} else {
			$('.main-nav').removeClass('navbar-fixed-top');
		}
	});
    
    /*Mobile version Slide*/
    
    /*slide height for mobile*/
	var slideHeight = $(window).height();
	$('.scroll-height').css('height',slideHeight);

	$(window).resize(function(){
        'use strict';
		$('.scroll-height').css('height',slideHeight);
	});
	
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>slideHeight ){
			$('.mini-nav').addClass('navbar-fixed-top');
		} else {
			$('.mini-nav').removeClass('navbar-fixed-top');
		}
	});
	
});

