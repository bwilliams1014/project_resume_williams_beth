$(document).ready(function() {

	$('[data-fancybox="imgList"]').fancybox();

	$('figure').mouseover(function() {
		$(this).css({'cursor':'pointer'});
	});

	$('.smoothscroll').smoothScroll({'offset':'40'});

	 $('nav').sticky({topSpacing:0});


});