$(function () {

    $('.image_list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1500,
        asNavFor: '.nav_list'
    });
    $('.nav_list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.image_list',
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: false,
        focusOnSelect: true,
    });

    $('.hiw_list').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
});