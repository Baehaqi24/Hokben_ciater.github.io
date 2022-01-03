$(document).ready(function () {
  $('.image').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover:false,
    prevArrow: `<i class="fas fa-angle-left left_arrow">`,
    nextArrow: `<i class="fas fa-angle-right right_arrow">`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
})