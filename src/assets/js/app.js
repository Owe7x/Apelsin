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

$("#phone").mask("+7(999) 999-9999")

 $('#form1').validate({
   rules: {
     fname: 'required',
     user_email: {
       required: true,
       email: true,
     },
     phone: {
      required: true,
      minlength: 10,
  },
   },
   messages: {
     fname: 'Это поле является обязательным',
     user_email: 'Это поле является обязательным',
     phone: 'Это поле является обязательным'
   },
   submitHandler: function(form) {
    $(".modal-wrapper").addClass('block')
    setTimeout(function() {
      $(".modal-wrapper").delay(3000).fadeOut(); 
      $(".modal-wrapper").removeClass('block')
    }, 5000);

      $("#form1").submit(function() { //Change
        var th = $(this);
        $.ajax({
          type: "POST",
          url: "mail.php", //Change
          data: th.serialize()
        }).done(function() {
          alert("Thank you!");
          setTimeout(function() {
            // Done Functions
            th.trigger("reset");
          }, 1000);
        });
        return false;
      });
   }
 });


 $('#form2').validate({
   rules: {
     fname: 'required',
     user_email: {
       required: true,
       email: true,
     },
     phone: {
      required: true,
      minlength: 10,
  },
   },
   messages: {
    fname: 'Это поле является обязательным',
    user_email: 'Это поле является обязательным',
    phone: 'Это поле является обязательным'
   },
   submitHandler: function(form) {
    $(".modal-wrapper").addClass('block')
    setTimeout(function() {
      $(".modal-wrapper").delay(3000).fadeOut(); 
      $(".modal-wrapper").removeClass('block')
    }, 5000);
    $("#form2").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
   }
 });
 $('#form3').validate({
   rules: {
     fname: 'required',
     user_email: {
       required: true,
       email: true,
     },
     phone: {
      required: true,
      minlength: 10,
  },
   },
   messages: {
    fname: 'Это поле является обязательным',
    user_email: 'Это поле является обязательным',
    phone: 'Это поле является обязательным'
   },
   submitHandler: function(form) {
     $('#modal').css('display', 'none')
    $(".modal-wrapper").addClass('block')
    setTimeout(function() {
      $(".modal-wrapper").delay(3000).fadeOut(); 
      $(".modal-wrapper").removeClass('block')
    }, 5000);
    $("#form2").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
   }
 });
 $('.spoiler_links').click(function(){
  $(this).parents().children('.spoiler_body').toggle('slow');
  $(this).toggleClass('close')
  return false;
 });

})