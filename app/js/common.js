$(function() {

	// Custom JS
    (function($) {
        $(function() {

            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('ul.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });
            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });
            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('h3.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });

        });
    })(jQuery);
    $(".menu-lisy").click(function() {
        // $(".tabs__caption").slideToggle();
        $(".menu-lisy").toggleClass('menu-active');
    });

    initSlickCarousel();




    $('#mybtn').on('click', function(e) {
        /* your code here */
        e.preventDefault();
        var cssValues = {
            "height":"100%",
            "transition:": ".5s ease"
        };
        var cssValues2 = {
            "transition:": ".5s ease",
            "height":"0"
        };
        var myattr = $(this).attr("data-btn");
        console.log(myattr);
        if(myattr === 'btnopen'){
            $(this).attr("data-btn", 'btnclose');
            $(".second-block").css(cssValues);
        }else {
            $(this).attr("data-btn", 'btnopen');
            $(".second-block").css(cssValues2);
        }

        // $(".second-block").css(cssValues);


    });







});


function initSlickCarousel() {
    jQuery('.slick-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        // infinite: true,
        // adaptiveHeight: true,
        rows: 0,
        // prevArrow: '<span class="slick-prev"></span>',
        // nextArrow: '<span class="slick-next"></span>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                // centerMode: true,
                autoplay: true,
                // speed: 2000,
                slidesToShow: 3
            }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    // centerMode: true,
                    autoplay: true,
                    // speed: 2000,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    // centerMode: true,
                    autoplay: true,
                    // speed: 2000,
                    slidesToShow: 1
                }
            }]
    });
}