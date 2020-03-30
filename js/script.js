// JavaScript Element by Shinoa

// Test Event Scroll
	$('.nav-link').on('click', function(e) {

	 var tujuan = $(this).attr('href');

	 var elemenTujuan = $(tujuan);

	 $('html , body').animate({
	  scrollTop: elemenTujuan.offset().top - 50
	 }, 1250, 'easeInOutExpo');

	 e.preventDefault();
	});﻿

// Parallax Effect
     // About Text
     $(window).on('load', function() {
     	$('.pleft').addClass('pshow');
     	$('.pright').addClass('pshow');
     });

	$(window).scroll(function(){
		var iScroll = $(this).scrollTop();

	// Jumbotron Cover
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ iScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ iScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ iScroll/1.2 +'%)'
	});

	// Gallery Post Effect
	if( iScroll > $('.gallery').offset().top -200 ) {
		$('.gallery .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.gallery .thumbnail').eq(i).addClass('foto');
			}, 300 * (i+1));
		});
}

});
