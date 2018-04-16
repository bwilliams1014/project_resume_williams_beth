$(document).ready(function() {

$('[data-fancybox="imgList"]').fancybox();

$('figure').mouseover(function() {
	$(this).css({'cursor':'pointer'});
});

$('a').mouseover(function() {
	$(this).css({'background':'linear-gradient(#dd390d, #912608)'});
});

$('a').mouseleave(function() {
	$(this).css({'background':'#303030'});
});


$('.smoothscroll').smoothScroll({'offset':'40'});

$('nav').sticky({topSpacing:0});


});