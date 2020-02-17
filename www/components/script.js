// This is a JavaScript file
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });
   var instance = M.Carousel.init({
    fullWidth: true
  });

  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
function funcao()
{
   alert("eu sou um alert!");
}
  
