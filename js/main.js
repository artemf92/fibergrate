$('.hamburger').click(function() {
  toggleMenu();
})

function toggleMenu() {
  $('.hamburger').toggleClass('is-open');
  $('.hamburger-menu').toggleClass('is-open');
  $('.hero').toggleClass('is-open');
}

$(document).ready(function(){
  $('.hero-slider').on('init', function() {
    $('.hero__dots').append($('.hero-item').length);
  });
  $('.hero-slider').slick({
    arrows: false,
    infinite: false,
  })
  $('.hero-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.hero__dots .big').text(slick.currentSlide + 1);
  });

  $('.main-slider__container').on('init', function() {
    $('.main-slider__dots').append($('.main-slider__item').length);
  });
  $('.main-slider__container').slick({
    arrows: false,
    infinite: false,
  })
  $('.main-slider__container').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.main-slider__dots .big').text(slick.currentSlide + 1);
  });

  $('.reviews__slider').on('init', function() {
    $('.reviews__dots').append($('.reviews__item').length);
  });
  $('.reviews__slider').slick({
    arrows: false,
    infinite: false,
  })
  $('.reviews__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.reviews__dots .big').text(slick.currentSlide + 1);
  });
});
