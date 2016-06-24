// jquery

$(document).ready(function () {
  $('.menu-icon').on('click', function(event) {
    event.preventDefault();
    // $('#nav').toggle();

    if ($('#nav').hasClass('hidden')) {
      $('#nav').removeClass('hidden');
    } else {
      $('#nav').addClass('hidden');
    }
    /* Act on the event */
    // if ($('#nav').is(':hidden')) {
    //   $('#nav').css('display', 'flex')
    // } else {
    //   $('#nav').css('display', 'none');
    // }
  });
});
