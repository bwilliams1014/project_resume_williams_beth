$(document).ready(function() {

	$('[data-fancybox="imgList"]').fancybox({
	// Options will go here
	});

	$('figure').mouseover(function() {
		$(this).css({'cursor':'pointer'});
	});

	$('.smoothscroll').smoothScroll();

//	$('.flexcontainer p').hover(function() {
//		$(this).css({'background-color':'red'});
//	});



});