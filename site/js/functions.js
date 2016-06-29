// jquery

'use strict'

$(document).ready(function () {
  // Menu toggle
  // $('.menu-icon').on('click', function(event) {
  //   event.preventDefault();
  //   if ($('#nav').hasClass('hidden')) {
  //     $('#nav').removeClass('hidden');
  //   } else {
  //     $('#nav').addClass('hidden');
  //   }
  // });
  //
  // // Search toggle
  // $('#search-button').on('click', function(event) {
  //   event.preventDefault();
  //   if ($('#box').hasClass('hidden')) {
  //     $('#box').removeClass('hidden');
  //   } else {
  //     $('#box').addClass('hidden');
  //   }
  // });

  // Run flexslider
  $('.flexslider').flexslider({
    pausePlay: true,
    controlsContainer: $(".slider-controls"),
    customDirectionNav: $(".slider-arrows a")
  });
});
