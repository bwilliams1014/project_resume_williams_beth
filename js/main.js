$(document).ready(function() {

	$('[data-fancybox="imgList"]').fancybox({
	// Options will go here
	});

	$('figure').mouseover(function() {
		$(this).css({'cursor':'pointer'});
	});

	$('.smoothscroll').smoothScroll();

	 $('nav').sticky({topSpacing:0})


});