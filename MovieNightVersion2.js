function main() {
    $('.intro').hide();
    $('.intro').fadeIn(900);
    $('.skillset').hide();
    $('.skillset').fadeIn(2000);
    
    $('.projects').hide();
    
    $('.projects-button').on('click', function() {
          $(this).next().slideToggle(400);
      $(this).toggleClass('active');
      $(this).text('Did you write that down?');
      });
  }
  
  $(document).ready(main);
