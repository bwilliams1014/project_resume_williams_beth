$(document).ready(function() {

// fancybox jquery plugin
$('[data-fancybox="imgList"]').fancybox();

// change cursor when mousing over images in gallery
$('figure').mouseover(function() {
	$(this).css({'cursor':'pointer'});
});

// change nav tabs when moused over
$('.smoothscroll').mouseover(function() {
	$(this).css({'background':'linear-gradient(#dd390d, #912608)'});
});

// change nav tabs back when moused away
$('.smoothscroll').mouseleave(function() {
	$(this).css({'background':'#303030'});
});

// set smoothscroll offset so that it appears correctly
$('.smoothscroll').smoothScroll({'offset':'55'});

// sticky nav jquery plugin
$('nav').sticky({topSpacing:0});

// add animation to header
var headerWidth = $('header').width();
console.log(headerWidth);
var stop = headerWidth - 160;
console.log(stop);

$('header').mouseover(function() {
	$('#myLogo').animate({left : stop}, 3000);
});

});