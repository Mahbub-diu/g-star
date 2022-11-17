$('.you-may-like-slider-wrapper').slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay:true,
  prevArrow:
    '<span class="arrow_Prev"><i class="fas fa-angle-left"></i></span> ',
  nextArrow:
    '<span class="arrow_Next"><i class="fas fa-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$('.explorer-slider-wrapper').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  prevArrow:
    '<span class="arrow_Prev"><i class="fas fa-angle-left"></i></span> ',
  nextArrow:
    '<span class="arrow_Next"><i class="fas fa-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById('header').classList.add('fixed-top');
    document.getElementById('header').style.backgroundColor = '#fff';
    document.getElementById('navbar-toggler').classList.add('toggle-button');
    document.querySelectorAll('.nav-link').classList.add('color-black');
  }
  if (document.documentElement.scrollTop < 50) {
    document.getElementById('header').classList.remove('fixed-top');
    document.getElementById('header').style.backgroundColor = 'transparent';
  }
});

$('.community-slider').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 6,
  arrows: true,
  prevArrow:
    '<span class="arrow_Prev"><i class="fas fa-angle-left"></i></span> ',
  nextArrow:
    '<span class="arrow_Next"><i class="fas fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
});
