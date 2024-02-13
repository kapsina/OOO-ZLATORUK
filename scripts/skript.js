$(document).ready(function() {
   $(window).on('scroll', function() {
    if($(window).scrollTop() < 1000) {
      $('.hero').css('background-size', 100 + parseInt($(window).scrollTop() / 10) + '%');
      $('.hero h1').css('top', 20 + ($(window).scrollTop() * .1) + '%');
      $('.hero h1').css('opacity', 2 - ($(window).scrollTop() * .003));
    }
     if($(window).scrollTop() >= $('.content-wrapper').offset().top - 280) {
       $('.nav-bg').removeClass('bg-hidden');
       $('.nav-bg').addClass('bg-visible');
     } else {
       $('.nav-bg').removeClass('bg-visible');
       $('.nav-bg').addClass('bg-hidden');
     }
  });
});
