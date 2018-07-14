
function main() {
    var $intro = $('.intro');
    $('.intro').hide();
    $('.intro').fadeIn(500);
    var $details = $('.details');
    $('.details').hide();
  
  $('.w3-btn').on('click', function() {
    $(this).next().slidetoggle(4000);
    $(this).toggleClass('active');
    $(this).text('Did you write that down?');
	});
}
  
  
  $(document).ready(main);