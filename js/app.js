function post(t, e, o) { return $.ajax({ type: 'POST', url: t, data: e, success: o, dataType: 'json' }) }

// const leftArrow = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
//   '<rect x="0.5" y="0.5" width="39" height="39" transform="matrix(-4.37114e-08 1 1 4.37114e-08 -2.18557e-08 2.18557e-08)" stroke="black"/>\n' +
//   '<path d="M29.9999 20.0789C29.8988 20.396 29.6544 20.4574 29.3569 20.4567C23.5237 20.4539 17.6912 20.4546 11.858 20.4546C11.7763 20.4546 11.6946 20.4546 11.5662 20.4546C11.6501 20.5446 11.6989 20.601 11.7519 20.6538C12.9066 21.8059 14.0614 22.9579 15.2161 24.11C15.2527 24.1464 15.2914 24.1821 15.3258 24.2207C15.5114 24.4278 15.5172 24.6856 15.3409 24.867C15.1674 25.0463 14.905 25.0442 14.6936 24.8613C14.6492 24.8235 14.6083 24.7813 14.5667 24.7399C13.1253 23.3043 11.6845 21.8695 10.2438 20.4339C9.9205 20.1118 9.91907 19.8932 10.2366 19.5761C11.7003 18.1169 13.164 16.6585 14.6284 15.2C14.8635 14.9665 15.1143 14.9365 15.3172 15.1151C15.4871 15.265 15.5215 15.5086 15.3889 15.6936C15.333 15.7721 15.2634 15.8421 15.1946 15.9107C14.0442 17.0577 12.8937 18.2048 11.7426 19.3511C11.6931 19.4004 11.6465 19.4518 11.5612 19.5418C11.6874 19.5418 11.7677 19.5418 11.8479 19.5418C17.6876 19.5418 23.5266 19.5425 29.3662 19.5397C29.6487 19.5397 29.8766 19.6075 29.9992 19.8832C29.9999 19.9489 29.9999 20.0139 29.9999 20.0789Z" fill="black"/>\n' +
//   '</svg>'
// const rightArrow = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
//   '<rect x="-0.5" y="-0.5" width="39" height="39" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 39 39)" stroke="black"/>\n' +
//   '<path d="M10.0001 20.0789C10.1012 20.396 10.3456 20.4574 10.6431 20.4567C16.4763 20.4539 22.3088 20.4546 28.142 20.4546C28.2237 20.4546 28.3054 20.4546 28.4338 20.4546C28.3499 20.5446 28.3011 20.601 28.2481 20.6538C27.0934 21.8059 25.9386 22.9579 24.7839 24.11C24.7473 24.1464 24.7086 24.1821 24.6742 24.2207C24.4886 24.4278 24.4828 24.6856 24.6591 24.867C24.8326 25.0463 25.095 25.0442 25.3064 24.8613C25.3508 24.8235 25.3917 24.7813 25.4333 24.7399C26.8747 23.3043 28.3155 21.8695 29.7562 20.4339C30.0795 20.1118 30.0809 19.8932 29.7634 19.5761C28.2997 18.1169 26.836 16.6585 25.3716 15.2C25.1365 14.9665 24.8857 14.9365 24.6828 15.1151C24.5129 15.265 24.4785 15.5086 24.6111 15.6936C24.667 15.7721 24.7366 15.8421 24.8054 15.9107C25.9558 17.0577 27.1063 18.2048 28.2574 19.3511C28.3069 19.4004 28.3535 19.4518 28.4388 19.5418C28.3126 19.5418 28.2323 19.5418 28.1521 19.5418C22.3124 19.5418 16.4734 19.5425 10.6338 19.5397C10.3513 19.5397 10.1234 19.6075 10.0008 19.8832C10.0001 19.9489 10.0001 20.0139 10.0001 20.0789Z" fill="black"/>\n' +
//   '</svg>'
const formatPrice = (x) => {
  return x.toString().replace(/\s/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
$().ready(function () {
  let prevScrollpos = window.pageYOffset
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('secondNavbar').style.top = '60px'
    } else {
      document.getElementById('secondNavbar').style.top = '-50px'
    }
    prevScrollpos = currentScrollPos
  }

  $('.empty-cart-slider').slick({
    responsive: [{
      breakpoint: 767, settings: {
        slidesToShow: 1, slidesToScroll: 1, arrows: false, centerMode: true, slickSetOption: true
      }
    }]
  })

  $('.product-slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>',
    responsive: [{
      breakpoint: 1199, settings: {
        slidesToShow: 4, slidesToScroll: 1, infinite: true, dots: true
      }
    }, {
      breakpoint: 991, settings: {
        slidesToShow: 3, slidesToScroll: 1
      }
    }, {
      breakpoint: 767, settings: {
        slidesToShow: 1, slidesToScroll: 1, arrows: false, centerMode: true
      }
    }]
  })

  $('.collection-slick').slick({
    dots: true, infinite: false, speed: 300, slidesToShow: 3, slidesToScroll: 1, // prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"></button>',
    // nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>',
    responsive: [{
      breakpoint: 1199, settings: {
        slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true
      }
    }, {
      breakpoint: 991, settings: {
        slidesToShow: 1, slidesToScroll: 1
      }
    }, {
      breakpoint: 767, settings: {
        slidesToShow: 1, slidesToScroll: 1, arrows: false, centerMode: true, dots: false
      }
    }]
  })

  $('.useful-slick').slick({
    dots: true, infinite: false, speed: 300, slidesToShow: 4, slidesToScroll: 1, // prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"></button>',
    // nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>',
    responsive: [{
      breakpoint: 1199, settings: {
        slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true
      }
    }, {
      breakpoint: 991, settings: {
        slidesToShow: 2, slidesToScroll: 1
      }
    }, {
      breakpoint: 767, settings: {
        slidesToShow: 1, slidesToScroll: 1, arrows: false, centerMode: true, dots: false
      }
    }]
  })
  $('.useful-slick-slider').slick({
    dots: true, infinite: false, speed: 300, slidesToShow: 3, slidesToScroll: 1, // prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"></button>',
    // nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>',
    responsive: [{
      breakpoint: 1199, settings: {
        slidesToShow: 3, slidesToScroll: 1, infinite: true
      }
    }, {
      breakpoint: 991, settings: {
        slidesToShow: 2, slidesToScroll: 1
      }
    }, {
      breakpoint: 767, settings: {
        slidesToShow: 1, slidesToScroll: 1, arrows: false, centerMode: true, dots: false
      }
    }]
  })

  $('.actions-slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>',
    responsive: [{
      breakpoint: 1199, settings: {
        slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true
      }
    }, {
      breakpoint: 991, settings: {
        slidesToShow: 2, slidesToScroll: 1
      }
    }, {
      breakpoint: 767, settings: {
        slidesToShow: 1, slidesToScroll: 1
      }
    }]
  })

  $(document).on('click', '.es-catalog-dropdown', function (e) {
    e.stopPropagation()
  })

  let slider = document.getElementById('range-slider-price')
  if (slider !== null) {
    noUiSlider.create(slider, {
      start: [100000, 1000000], connect: true, range: {
        'min': 100000, 'max': 1000000
      }
    })

    slider.noUiSlider.on('update', function (e) {
      $('.es-range-min.price-range').val(formatPrice(Math.round(e[0])))
      $('.es-range-max.price-range').val(formatPrice(Math.round(e[1])))
    })
  }
  let sliderPage = document.getElementById('range-slider-page')
  if (sliderPage !== null) {
    noUiSlider.create(sliderPage, {
      start: [100000, 1000000], connect: true, range: {
        'min': 100000, 'max': 1000000
      }
    })

    sliderPage.noUiSlider.on('update', function (e) {
      console.log("asdasd")
      $('.es-range-min.page-range').val(formatPrice(Math.round(e[0])))
      $('.es-range-max.page-range').val(formatPrice(Math.round(e[1])))
    })
  }


  $(window).on('scroll', function () {
    $scrollTop = $(window).scrollTop(), t = $('#back-top'), $scrollTop > 350 ? t.addClass('visible') : t.removeClass('visible')
  })
  let t = $('#back-top')
  $htmlBody = $('html, body'), t.length && t.on('click', function (t) {
    $htmlBody.animate({ scrollTop: 0 }, 200), t.preventDefault()
  })
})