$('.carousel').carousel({
    interval: 1500
});

var swiper = new Swiper('.service_slide', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: true,
    navigation: {
        nextEl: '.right',
        prevEl: '.left',
    },
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $('.client_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: '16px',
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '20px',
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '20px',
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
    $('.service_sliders').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '10px',
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                    centerMode: true,
                    centerPadding: '10px',
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    centerMode: true,
                    centerPadding: '10px',
                }
    }
  ]
    });
    $('.d_image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1500,
        asNavFor: '.d_list'
    });
    $('.d_list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.d_image',
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: false,
        focusOnSelect: true,
    });
});
