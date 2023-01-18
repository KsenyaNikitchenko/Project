$(document).ready(function () {
    $('.review-slick-slider').slick({
      infinite: true,
      speed: 300,
      prevArrow: $("#left-arrow"),
      nextArrow: $("#right-arrow"),
      fade: true,
      swipe: false,
      draggable: false,
      slidesToShow: 1,
      adaptiveHeight: true
    });
    $('.review-slick-slider').on('afterChange', function (event, slick, currentSlide) {
      $('#rev-num').text('0' + (currentSlide + 1))
    });
  
    $(".first-slider").slick({
      infinite: true,
      dots: false,
      arrows: false,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '10%',
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 2 }
        }
      ]
    });
  
    $(".second-slider").slick({
      infinite: true,
      dots: false,
      arrows: false,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '10%',
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 2 }
        }
      ]
    });
  
  
$(document).ready(function() {
    console.log( "ready!" );
   $(".accordion h6:first").addClass("active");
   $(".accordion p:not(:first)").hide();
   $(".accordion h6").click(function () {
     $(this).next("p").slideToggle("slow")
       .siblings("p:visible").slideUp("slow");
     $(this).toggleClass("active");
     $(this).siblings("h6").removeClass("active");
   });

});
