(function () {
    "use strict";
    $(document).ready(function () {
        /*-------------------------MENU ITEM HIGHLIGHTING---------------------------- */
        $(window).on('scroll', function () {
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        /*-------------------------BACK TO TOP---------------------------- */
        $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

        var amountScrolled = 1200;

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > amountScrolled) {
                $('a.back-to-top').fadeIn('slow');
            } else {
                $('a.back-to-top').fadeOut('slow');
            }
        });
        $('a.back-to-top, a.simple-back-to-top').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 700);
            return false;
        });
        /*-------------------------parallax---------------------------- */
        var parallax = new Parallax('.parallax', {
            offsetYBounds: 50,
            intensity: 30,
            center: 0.5

        })
        parallax.init();
        /*-------------------------WOW---------------------------- */
        new WOW().init();
        /*-------------------------COUNTER---------------------------- */
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        /*-------------------------carousel---------------------------- */
        $('.owl-carousel.testimonial-carousel').owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                750: {
                    items: 1,
                }
            }
        });
    });
    /*-------------------------PRELOADER---------------------------- */
    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(100).fadeOut('slow');
        $('body').delay(100).css({
            'overflow': 'visible'
        });
    });
    /*--------Global myTheme Obj / Variable Declaration-----------*/
    var myTheme = window.myTheme || {},
        $win = $(window);
    /*----------------------------------isotope-----------------------------*/
    myTheme.Isotope = function () {
        var isotopeContainer = $('.isotopeContainer');
        if (!isotopeContainer.length || !jQuery().isotope) return;
        $win.on('load', function () {
            isotopeContainer.isotope({
                itemSelector: '.isotopeSelector'
            });
            $('.isotopeFilters').on('click', 'a', function (e) {
                $('.isotopeFilters').find('.active').removeClass('active');
                $(this).parent().addClass('active');
                var filterValue = $(this).attr('data-filter');
                isotopeContainer.isotope({
                    filter: filterValue
                });
                e.preventDefault();
            });
        });
    };
    /*-------------------------Fancybox---------------------*/
    myTheme.Fancybox = function () {
        $(".fancybox-pop").fancybox({
            maxWidth: 900,
            maxHeight: 700,
            fitToView: true,
            width: '80%',
            height: '80%',
            autoSize: false,
            closeClick: false,
            openEffect: 'elastic',
            closeEffect: 'none'
        });
    };
    /*----------------Functions Initializers----------------*/
    myTheme.Isotope();
    myTheme.Fancybox();
    /*------------------Video-------------------*/
    $(".fancybox").fancybox({
        width: '70%',
        height: '70%'
    });
})(jQuery);
