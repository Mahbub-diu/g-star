$('.you-may-like-slider-wrapper').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay:true,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.explorer-slider-wrapper').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 200) {
      document.getElementById('header').classList.add('fixed-top')
      document.getElementById('header').style.backgroundColor = '#fff'
      document.querySelector('.nav-link').style.color = '#000'
    }
    if (document.documentElement.scrollTop < 200) {
      document.getElementById('header').classList.remove('fixed-top')
      document.getElementById('header').style.backgroundColor = 'transparent'
    }
});