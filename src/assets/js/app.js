console.log('file 1');
$(document).ready(function($){

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    responsive: [{
       breakpoint: 1919,
       settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
       }
    }, {
       breakpoint: 1540,
       settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
       }
    }, {
      breakpoint: 1140,
      settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
      }
    }, {
      breakpoint: 800,
      settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
      }
    },
   ]
 });
 $('.single-slide').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev-slide-2">Next</button>',
      nextArrow: '<button type="button" class="slick-next-slide-2">Next</button>'
});




 $('.spoiler_links').click(function(){
  $(this).parents().children('.spoiler_body').toggle('slow');
  $(this).toggleClass('close')
  return false;
 });

})