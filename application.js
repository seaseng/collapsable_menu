$(document).ready(function(){

  $('#sesame').on('click', function(event) {

    if ($(this).data('open') === true) {
      $(this).text('<<< close sesame');
      $('nav').animate({'left': '0'}, 'fast');
      $(this).data('open', false);
    }
    else {
      $(this).data('open', true);
      $('nav').animate({'left': '-150px'}, 'fast');
      $(this).text('open sesame >>>');
    }

  });

});