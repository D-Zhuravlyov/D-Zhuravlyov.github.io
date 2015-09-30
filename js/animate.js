$(document).ready(function() {
  $('.profile').on('mouseenter', function() {
    $(this).find('.more').addClass('visible');  
  });
    $('.profile').on('mouseleave', function() {
    $(this).find('.more').removeClass('visible');
  });
	// $(function () {
//   		$('[data-toggle="popover"]').popover()
// 	});
});
