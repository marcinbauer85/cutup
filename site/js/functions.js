// jquery

$(document).ready(function () {
  $('.menu-icon').on('click', function(event) {
    event.preventDefault();
    if ($('#nav').hasClass('hidden')) {
      $('#nav').removeClass('hidden');
    } else {
      $('#nav').addClass('hidden');
    }
  });
});
