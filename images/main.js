$(function () {

    new WOW().init();

    //theme swither start
    (function () {
        var theme = localStorage.getItem('theme');
        setTheme(theme);
    })();

    function setTheme(theme) {
        document.body.classList.toggle('theme--ligth', (theme === 'ligth'));

        localStorage.setItem('theme', theme);

    }

    window.addEventListener('load', function () {
        document.getElementById('switchMode').addEventListener('click', function () {
            var theme = localStorage.getItem('theme');
            setTheme((theme === "dark" ? "ligth" : 'dark'))
        });
        document.getElementById('switchModeMobile').addEventListener('click', function () {
            var theme = localStorage.getItem('theme');
            setTheme((theme === "dark" ? "ligth" : 'dark'))
        });
    });
    //theme swhitcher end




    //counter start

    $(function () {
        if ($("#eventOrganizers").length) {
            var e = "#eventOrganizers";
            $(window).on("scroll load resize", function () {
                var t = $(window).scrollTop(),
                    o = $(e).offset().top,
                    i = $(window).height(),
                    s = $(document).height(),
                    n = $(e).outerHeight();
                (t + 500 >= o || i + t == s || n + o < i) && $("#eventOrganizers").spincrement({
                    thousandSeparator: "",
                    duration: 3e3,
                    from: 0,
                    to: 10
                })
            })
        }
        if ($("#event").length) {
            var e = "#event";
            $(window).on("scroll load resize", function () {
                var t = $(window).scrollTop(),
                    o = $(e).offset().top,
                    i = $(window).height(),
                    s = $(document).height(),
                    n = $(e).outerHeight();
                (t + 500 >= o || i + t == s || n + o < i) && $("#event").spincrement({
                    thousandSeparator: "",
                    duration: 3e3,
                    from: 0,
                    to: 220
                })
            })
        }
        if ($("#viewers").length) {
            var e = "#viewers";
            $(window).on("scroll load resize", function () {
                var t = $(window).scrollTop(),
                    o = $(e).offset().top,
                    i = $(window).height(),
                    s = $(document).height(),
                    n = $(e).outerHeight();
                (t + 500 >= o || i + t == s || n + o < i) && $("#viewers").spincrement({
                    thousandSeparator: "",
                    duration: 3e3,
                    from: 0,
                    to: 220
                })
            })
        }
    });

    //counter end


    setTimeout(function () {
        $('select').styler();
    }, 100)

    $("#date").inputmask("99/99/99", {
        "placeholder": "mm/dd/yy"
    });

    if (document.cookie.indexOf('device_pixel_ratio') == -1 &&
        'devicePixelRatio' in window &&
        window.devicePixelRatio == 2) {

        document.cookie = 'device_pixel_ratio=' + window.devicePixelRatio + ';';
        window.location.reload();
    }

    //lang swither start

    $('.lang-switcher').on('click', function () {
        $('.lang-switcher').toggleClass('active');
        //$('.lang-switcher__list').slideToggle(200);
    });

    $('.lang-switcher__list').on('click', function () {
        $('.lang-switcher').on('click');
    });

    if ($('.compensation__charts').length > 0) {
        function setProgress() {
            jQuery.each(jQuery('.circle'), function () {
                var spinner = jQuery('.spinner', this);
                var filler = jQuery('.filler', this);
                var num = jQuery(this).attr('data-percentage');
                jQuery('.circle__half').addClass('loaded');

                if (num < 0) num = 0;
                if (num > 100) num = 100;

                var initialNum = 0;
                jQuery({
                    numVal: initialNum
                }).animate({
                    numVal: num
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (currVal) {
                        if (currVal > 0 && currVal <= 50) {
                            filler.css('display', 'none');
                            var spinnerDegs = -180 + ((currVal * 180) / 50);
                            rotate(spinner, spinnerDegs);
                        } else if (currVal > 50) {
                            rotate(spinner, 0);
                            filler.css('display', '');
                            var fillerDegs = 0 + ((currVal * 180) / 50);
                            rotate(filler, fillerDegs);
                        }
                    }
                });
            });
        }

        // Function that animate the Percentage Circles
        function rotate(el, deg) {
            el.css({
                '-webkit-transform': 'rotate(' + deg + 'deg)',
                '-moz-transform': 'rotate(' + deg + 'deg)',
                '-ms-transform': 'rotate(' + deg + 'deg)',
                '-o-transform': 'rotate(' + deg + 'deg)',
                'transform': 'rotate(' + deg + 'deg)'
            });
        }

        var animated = false;
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            var offset = $('.compensation__heading').offset().top - 200;

            if (scroll > offset && animated == false) {
                console.log(scroll);
                console.log(offset);
                setProgress();
                animated = true;
            }
        });
    }

    //lang swither end

    //tabs start

    $('.partners-tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.partners-tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.partners-tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        //$(".partners__slider").slick('reinit');
        $(".partners__slider").slick('setPosition');
        return false;
    });

    $('.blog-tabs .blog-tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.blog-tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.blog-tabs .tabs').find('.blog-tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        if ($(window).width() <= 768) {
            const index = $(this).attr("data-slick-index");
            $(".blog-tabs > .tabs").slick("slickGoTo", index);
        }
        return false;

    });

    $('.advanced-tabs .advanced-tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.advanced-tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.advanced-tabs .tabs').find('.advanced-tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;

    });
    var aTabF = $('.advanced-tabs .tab-item:first-child img:first-child').width();
    var aTabS = $('.advanced-tabs .tab-item:first-child img:last-child').width();

    if ($('.advanced-tabs').length > 0) {
        $('.advanced-tabs .tab-item img:first-child').css({
            'width': aTabF,
            'height': 'auto'
        });
        $('.advanced-tabs .tab-item img:last-child').css({
            'width': aTabS,
            'height': 'auto'
        });
    }

    //tabs end

    // media queries
    if ($(window).width() <= 768) {
        $('.header__btn-menu').click(function () {
            $('.mobile-menu').toggleClass('opened');
            $('.header__btn-menu').toggleClass('opened');
            $('body').toggleClass('opened-menu');
        });
        $('.has-dropdown span').click(function (e) {
            e.preventDefault();
            $(this).next('ul').slideToggle().parent('.has-dropdown').toggleClass('opened');
        });
        if ($('.watch-now__link').length > 0) {
            $('.watch-now__link').prependTo($('.watch-now__link').closest('.watch-now__inner'));
        }
        if ($('.advantages__link').length > 0) {
            $('.advantages__link').appendTo($('.advantages__link').closest('.advantages__inner'));
        }
        if ($('.advantages__items').length > 0) {
            $('.advantages__items').slick({
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false
            });
        }
        if ($('.map__items').length > 0) {
            $('.map__items').slick({
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false
            });
        }
        if ($('.monetize-slider').length > 0) {
            $('.monetize-slider').slick({
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false,
                responsive: [{
                        breakpoint: 789,
                        settings: {
                            slidesToShow: 2,

                        }
                    },
                    {
                        breakpoint: 650,
                        settings: {
                            slidesToShow: 1,

                        }
                    },

                ]
            });


        }
        if ($('.loyalty__items').length > 0) {
            $('.loyalty__items').slick({
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false
            });
            $(".loyalty__items .loyalty-item").on("click", function () {
                const index = $(this).attr("data-slick-index");
                $(".loyalty__items").slick("slickGoTo", index);
            });
        }
        if ($('.why-lose .block-list').length > 0) {
            $('.why-lose .block-list').slick({
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false
            });
        }
        if ($('.whom__slider').length > 0) {
            $('.whom__slider > .whom__slide > .whom-card').each(function () {
                $(this).appendTo($(this).closest('.whom__slider'));
            });
            $('.whom__slider > .whom__slide').remove();
        }
        if ($('.shape-events').length > 0) {
            $('.shape-events').find('.slider-cards__arrow').insertBefore('.shape-events .block__content');
            $('.shape-events').find('.select-btn').prependTo('.shape-events .block__inner');
        }
        if ($('.which-ambassador').length > 0) {
            $('.affiliate-ambassador__items').before('<div class="affiliate-ambassador__items--mobile"></div>');
            $('.affiliate-ambassador-item').each(function () {
                var affHeading = $(this).find('.affiliate-ambassador-item__heading').text();
                var affText = $(this).find('.affiliate-ambassador-item__text').text();
                var becomeNext = false;
                if ($(this).find('.select-btn').length > 0)
                    becomeNext = true;
                if (becomeNext) {
                    $(this).parent('.affiliate-ambassador__items').siblings('.affiliate-ambassador__items--mobile').append('<div class="affiliate-ambassador-item--mobile affiliate-ambassador-card--mobile">' + $(this).html() + '</div>');
                } else {
                    $(this).parent('.affiliate-ambassador__items').siblings('.affiliate-ambassador__items--mobile').append('<div class="affiliate-ambassador-item--mobile"><p class="affiliate-ambassador-item__heading--mobile">' + affHeading + '</p><p class="affiliate-ambassador-item__text--mobile">' + affText + '</p><ul class="affiliate-ambassador-item__list-slider">' + $(this).children('.affiliate-ambassador-item__list').html() + '</ul></div>');
                }
                $(this).remove();
            });
            $('.what-ambassador .affiliate-ambassador-card--mobile').appendTo('.what-ambassador .affiliate-ambassador__items--mobile');
            $('.affiliate-ambassador-item__list-slider').slick({
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false
            });
        }
        $('.ambassadors-steps__items').slick({
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false
        });
        if ($('.pricing-item').length > 0) {
            $('.pricing-item').last().clone().addClass('pricing-item--custom').insertAfter($('.pricing-item').last());
            $('.pricing-item--custom').find('.pricing-item__supbeading').html('Custom');
            $('.pricing-item--custom').find('.pricing-item__price').html('custom <span> / month</span>');
            $('.pricing-item--custom .pricing-item__subheading:last-child, .pricing-item--custom .pricing-item__link').addClass('custom');
            $('.pricing-item--custom .pricing-item__benifits:not(:last)').remove()
            $('.pricing-item--custom .pricing-item__li').remove();
            $('.plan .advantages__item.card:not(.slick-cloned) .card__heading').each(function () {
                $('.pricing-item--custom .pricing-item__list').append('<li class="pricing-item__li">' + $(this).text() + '</li>')
            })
            $('.pricing-item').each(function () {
                $(this).children('.pricing-item__link').insertAfter($(this).children('.pricing-item__head')).before('<div class="pricing-item__show-details"><span>More details</span></div>').after('<div class="pricing-item__benifits-wrapper"></div>');
                $(this).children('.pricing-item__benifits').appendTo($(this).children('.pricing-item__benifits-wrapper'))
            });
            $.fn.toggleText = function (t1, t2) {
                if (this.text() == t1)
                    this.text(t2);
                else
                    this.text(t1);
                return this;
            };
            $('.pricing-item__show-details').click(function () {
                $(this).toggleClass('opened').siblings('.pricing-item__benifits-wrapper').slideToggle();
                $(this).children('span').toggleText('More details', 'Less details');
            });
        }
        if ($('.setup').length > 0) {
            $('.setup .select-btn').insertAfter($('.setup .setup__slider'));
        }
        if ($('.live').length > 0) {
            $('.live .select-btn').insertBefore($('.live .live__items'));
        }
        if ($('.features').length > 0) {
            $('.features .block-list, .monetization .block-list').slick({
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false,

            });
        }
        if ($('.ease-use').length > 0) {
            $('.ease-use .slider-cards__arrow').insertAfter('.ease-use .slider-cards');
            $('.ease-use .select-btn').insertBefore('.ease-use .slider-cards');
        }
        if ($('.blog').length > 0) {
            $('.blog-tabs > .tabs').slick({
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                variableWidth: true
            });
        }
        $('.blog-tabs > .tabs').on('swipe', function (slick, direction) {
            var currentSlide = $('.blog-tabs .blog-tab.slick-current').index();
            var id = $('.blog-tabs .blog-tab').eq(currentSlide).attr('data-id');
            $('.blog-tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.blog-tabs .tabs').find('.blog-tab').removeClass('active');
            $('.blog-tabs .blog-tab').eq(currentSlide).addClass('active');
            $('#' + id).addClass('active-tab').fadeIn();
        });
        $('.foter-col__heading').click(function () {
            if ($(this).siblings('.foter-col__links').length > 0)
                $(this).toggleClass('opened').next('.foter-col__links').slideToggle();
        });
        $('.footer__bottom-content:first-child').hide().children().each(function () {
            $(this).prependTo($(this).closest('.footer__bottom-inner'));
        });
    }


    $('.watch-now__slider').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendArrows: '.watch-now__arrows',
        prevArrow: '<button class="slider-btn square-btn slider-btn__left"><span><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.46599 14.5711C7.31725 14.5686 7.17053 14.5362 7.03461 14.4757C6.8987 14.4152 6.77639 14.3279 6.67499 14.2191L0.908987 8.47108C0.687035 8.24945 0.560684 7.94972 0.556988 7.63608C0.559065 7.32211 0.685665 7.02179 0.908987 6.80108L6.65799 1.05308C6.76168 0.942001 6.88664 0.852892 7.02544 0.791049C7.16424 0.729206 7.31406 0.695891 7.46599 0.693082C7.61026 0.686241 7.75441 0.709014 7.88955 0.759997C8.02469 0.81098 8.14796 0.889093 8.25176 0.989525C8.35557 1.08996 8.43771 1.21058 8.49312 1.34396C8.54854 1.47734 8.57606 1.62066 8.57399 1.76508C8.57312 1.91591 8.54237 2.06506 8.48349 2.20392C8.42462 2.34279 8.33879 2.4686 8.23099 2.57408L6.23099 4.57408L4.01199 6.61708L5.98999 6.51208H16.282C16.434 6.50128 16.5866 6.52266 16.7299 6.57483C16.8731 6.627 17.0037 6.7088 17.1132 6.81487C17.2226 6.92094 17.3085 7.0489 17.3652 7.19041C17.4218 7.33191 17.448 7.48377 17.442 7.63608C17.4481 7.78847 17.4221 7.94045 17.3655 8.08207C17.3089 8.2237 17.223 8.35178 17.1135 8.45796C17.0041 8.56415 16.8734 8.64603 16.7301 8.69826C16.5868 8.75049 16.4341 8.7719 16.282 8.76108H5.98999L4.01199 8.64708L6.23599 10.6931L8.23599 12.6931C8.34379 12.7986 8.42962 12.9244 8.48849 13.0632C8.54737 13.2021 8.57812 13.3513 8.57899 13.5021C8.58143 13.6469 8.55396 13.7907 8.49831 13.9244C8.44266 14.0581 8.36002 14.1789 8.25556 14.2792C8.1511 14.3796 8.02706 14.4573 7.8912 14.5075C7.75535 14.5577 7.61059 14.5794 7.46599 14.5711Z" fill="#E0E0FF"/></svg></span></button>',
        nextArrow: '<button class="slider-btn square-btn slider-btn__right"><span><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.534 14.571C10.6828 14.5686 10.8295 14.5361 10.9654 14.4756C11.1013 14.4152 11.2236 14.3279 11.325 14.219L17.091 8.47102C17.313 8.24939 17.4393 7.94966 17.443 7.63602C17.4409 7.32205 17.3143 7.02173 17.091 6.80102L11.342 1.05302C11.2383 0.94194 11.1134 0.852831 10.9746 0.790988C10.8358 0.729145 10.6859 0.69583 10.534 0.693021C10.3897 0.68618 10.2456 0.708953 10.1105 0.759936C9.97531 0.810919 9.85204 0.889032 9.74824 0.989464C9.64443 1.0899 9.56229 1.21052 9.50688 1.3439C9.45146 1.47728 9.42394 1.6206 9.42601 1.76502C9.42688 1.91585 9.45763 2.065 9.51651 2.20386C9.57538 2.34273 9.66121 2.46854 9.76901 2.57402L11.769 4.57402L13.988 6.61702L12.01 6.51202H1.71801C1.56597 6.50122 1.41335 6.5226 1.27013 6.57477C1.12691 6.62694 0.996308 6.70873 0.88684 6.81481C0.777373 6.92088 0.691506 7.04884 0.634845 7.19034C0.578184 7.33185 0.552003 7.48371 0.558011 7.63602C0.551859 7.78841 0.577933 7.94039 0.634529 8.08201C0.691126 8.22364 0.776971 8.35172 0.886454 8.4579C0.995938 8.56408 1.1266 8.64597 1.26989 8.6982C1.41318 8.75043 1.56588 8.77184 1.71801 8.76102H12.01L13.988 8.64702L11.764 10.693L9.76401 12.693C9.65621 12.7985 9.57038 12.9243 9.51151 13.0632C9.45263 13.202 9.42188 13.3512 9.42101 13.502C9.41857 13.6468 9.44604 13.7906 9.50169 13.9243C9.55734 14.058 9.63998 14.1789 9.74444 14.2792C9.8489 14.3795 9.97294 14.4572 10.1088 14.5074C10.2447 14.5576 10.3894 14.5793 10.534 14.571Z" fill="#E0E0FF"/></svg></span></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.partners__slider').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        centerMode: true,
        centerPadding: '117px',
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '60px',
            }
        }]
    });

    $('.partners__slider-arrow.slider-btn__left').click(function () {
        $('.partners-tabs .active-tab').children('.partners__slider').slick('slickPrev');
    });
    $('.partners__slider-arrow.slider-btn__right').click(function () {
        $('.partners-tabs .active-tab').children('.partners__slider').slick('slickNext');
    });

    $('.whom__slider').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: '.whom__slider-arrows',
        prevArrow: '<button class="slider-btn square-btn slider-btn__left"><span><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.46599 14.5711C7.31725 14.5686 7.17053 14.5362 7.03461 14.4757C6.8987 14.4152 6.77639 14.3279 6.67499 14.2191L0.908987 8.47108C0.687035 8.24945 0.560684 7.94972 0.556988 7.63608C0.559065 7.32211 0.685665 7.02179 0.908987 6.80108L6.65799 1.05308C6.76168 0.942001 6.88664 0.852892 7.02544 0.791049C7.16424 0.729206 7.31406 0.695891 7.46599 0.693082C7.61026 0.686241 7.75441 0.709014 7.88955 0.759997C8.02469 0.81098 8.14796 0.889093 8.25176 0.989525C8.35557 1.08996 8.43771 1.21058 8.49312 1.34396C8.54854 1.47734 8.57606 1.62066 8.57399 1.76508C8.57312 1.91591 8.54237 2.06506 8.48349 2.20392C8.42462 2.34279 8.33879 2.4686 8.23099 2.57408L6.23099 4.57408L4.01199 6.61708L5.98999 6.51208H16.282C16.434 6.50128 16.5866 6.52266 16.7299 6.57483C16.8731 6.627 17.0037 6.7088 17.1132 6.81487C17.2226 6.92094 17.3085 7.0489 17.3652 7.19041C17.4218 7.33191 17.448 7.48377 17.442 7.63608C17.4481 7.78847 17.4221 7.94045 17.3655 8.08207C17.3089 8.2237 17.223 8.35178 17.1135 8.45796C17.0041 8.56415 16.8734 8.64603 16.7301 8.69826C16.5868 8.75049 16.4341 8.7719 16.282 8.76108H5.98999L4.01199 8.64708L6.23599 10.6931L8.23599 12.6931C8.34379 12.7986 8.42962 12.9244 8.48849 13.0632C8.54737 13.2021 8.57812 13.3513 8.57899 13.5021C8.58143 13.6469 8.55396 13.7907 8.49831 13.9244C8.44266 14.0581 8.36002 14.1789 8.25556 14.2792C8.1511 14.3796 8.02706 14.4573 7.8912 14.5075C7.75535 14.5577 7.61059 14.5794 7.46599 14.5711Z" fill="#E0E0FF"/></svg></span></button>',
        nextArrow: '<button class="slider-btn square-btn slider-btn__right"><span><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.534 14.571C10.6828 14.5686 10.8295 14.5361 10.9654 14.4756C11.1013 14.4152 11.2236 14.3279 11.325 14.219L17.091 8.47102C17.313 8.24939 17.4393 7.94966 17.443 7.63602C17.4409 7.32205 17.3143 7.02173 17.091 6.80102L11.342 1.05302C11.2383 0.94194 11.1134 0.852831 10.9746 0.790988C10.8358 0.729145 10.6859 0.69583 10.534 0.693021C10.3897 0.68618 10.2456 0.708953 10.1105 0.759936C9.97531 0.810919 9.85204 0.889032 9.74824 0.989464C9.64443 1.0899 9.56229 1.21052 9.50688 1.3439C9.45146 1.47728 9.42394 1.6206 9.42601 1.76502C9.42688 1.91585 9.45763 2.065 9.51651 2.20386C9.57538 2.34273 9.66121 2.46854 9.76901 2.57402L11.769 4.57402L13.988 6.61702L12.01 6.51202H1.71801C1.56597 6.50122 1.41335 6.5226 1.27013 6.57477C1.12691 6.62694 0.996308 6.70873 0.88684 6.81481C0.777373 6.92088 0.691506 7.04884 0.634845 7.19034C0.578184 7.33185 0.552003 7.48371 0.558011 7.63602C0.551859 7.78841 0.577933 7.94039 0.634529 8.08201C0.691126 8.22364 0.776971 8.35172 0.886454 8.4579C0.995938 8.56408 1.1266 8.64597 1.26989 8.6982C1.41318 8.75043 1.56588 8.77184 1.71801 8.76102H12.01L13.988 8.64702L11.764 10.693L9.76401 12.693C9.65621 12.7985 9.57038 12.9243 9.51151 13.0632C9.45263 13.202 9.42188 13.3512 9.42101 13.502C9.41857 13.6468 9.44604 13.7906 9.50169 13.9243C9.55734 14.058 9.63998 14.1789 9.74444 14.2792C9.8489 14.3795 9.97294 14.4572 10.1088 14.5074C10.2447 14.5576 10.3894 14.5793 10.534 14.571Z" fill="#E0E0FF"/></svg></span></button>',
        responsive: [{
                breakpoint: 789,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,

                }
            },

        ]
    });

    $('.article__slider').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        appendArrows: '.article__slider-arrows',
        prevArrow: '<button class="slider-btn square-btn slider-btn__left"><span><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.46599 14.5711C7.31725 14.5686 7.17053 14.5362 7.03461 14.4757C6.8987 14.4152 6.77639 14.3279 6.67499 14.2191L0.908987 8.47108C0.687035 8.24945 0.560684 7.94972 0.556988 7.63608C0.559065 7.32211 0.685665 7.02179 0.908987 6.80108L6.65799 1.05308C6.76168 0.942001 6.88664 0.852892 7.02544 0.791049C7.16424 0.729206 7.31406 0.695891 7.46599 0.693082C7.61026 0.686241 7.75441 0.709014 7.88955 0.759997C8.02469 0.81098 8.14796 0.889093 8.25176 0.989525C8.35557 1.08996 8.43771 1.21058 8.49312 1.34396C8.54854 1.47734 8.57606 1.62066 8.57399 1.76508C8.57312 1.91591 8.54237 2.06506 8.48349 2.20392C8.42462 2.34279 8.33879 2.4686 8.23099 2.57408L6.23099 4.57408L4.01199 6.61708L5.98999 6.51208H16.282C16.434 6.50128 16.5866 6.52266 16.7299 6.57483C16.8731 6.627 17.0037 6.7088 17.1132 6.81487C17.2226 6.92094 17.3085 7.0489 17.3652 7.19041C17.4218 7.33191 17.448 7.48377 17.442 7.63608C17.4481 7.78847 17.4221 7.94045 17.3655 8.08207C17.3089 8.2237 17.223 8.35178 17.1135 8.45796C17.0041 8.56415 16.8734 8.64603 16.7301 8.69826C16.5868 8.75049 16.4341 8.7719 16.282 8.76108H5.98999L4.01199 8.64708L6.23599 10.6931L8.23599 12.6931C8.34379 12.7986 8.42962 12.9244 8.48849 13.0632C8.54737 13.2021 8.57812 13.3513 8.57899 13.5021C8.58143 13.6469 8.55396 13.7907 8.49831 13.9244C8.44266 14.0581 8.36002 14.1789 8.25556 14.2792C8.1511 14.3796 8.02706 14.4573 7.8912 14.5075C7.75535 14.5577 7.61059 14.5794 7.46599 14.5711Z" fill="#E0E0FF"/></svg></span></button>',
        nextArrow: '<button class="slider-btn square-btn slider-btn__right"><span><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.534 14.571C10.6828 14.5686 10.8295 14.5361 10.9654 14.4756C11.1013 14.4152 11.2236 14.3279 11.325 14.219L17.091 8.47102C17.313 8.24939 17.4393 7.94966 17.443 7.63602C17.4409 7.32205 17.3143 7.02173 17.091 6.80102L11.342 1.05302C11.2383 0.94194 11.1134 0.852831 10.9746 0.790988C10.8358 0.729145 10.6859 0.69583 10.534 0.693021C10.3897 0.68618 10.2456 0.708953 10.1105 0.759936C9.97531 0.810919 9.85204 0.889032 9.74824 0.989464C9.64443 1.0899 9.56229 1.21052 9.50688 1.3439C9.45146 1.47728 9.42394 1.6206 9.42601 1.76502C9.42688 1.91585 9.45763 2.065 9.51651 2.20386C9.57538 2.34273 9.66121 2.46854 9.76901 2.57402L11.769 4.57402L13.988 6.61702L12.01 6.51202H1.71801C1.56597 6.50122 1.41335 6.5226 1.27013 6.57477C1.12691 6.62694 0.996308 6.70873 0.88684 6.81481C0.777373 6.92088 0.691506 7.04884 0.634845 7.19034C0.578184 7.33185 0.552003 7.48371 0.558011 7.63602C0.551859 7.78841 0.577933 7.94039 0.634529 8.08201C0.691126 8.22364 0.776971 8.35172 0.886454 8.4579C0.995938 8.56408 1.1266 8.64597 1.26989 8.6982C1.41318 8.75043 1.56588 8.77184 1.71801 8.76102H12.01L13.988 8.64702L11.764 10.693L9.76401 12.693C9.65621 12.7985 9.57038 12.9243 9.51151 13.0632C9.45263 13.202 9.42188 13.3512 9.42101 13.502C9.41857 13.6468 9.44604 13.7906 9.50169 13.9243C9.55734 14.058 9.63998 14.1789 9.74444 14.2792C9.8489 14.3795 9.97294 14.4572 10.1088 14.5074C10.2447 14.5576 10.3894 14.5793 10.534 14.571Z" fill="#E0E0FF"/></svg></span></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }]
    });

    $('.carusel').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        centerMode: true,
        variableWidth: true,
    });

    $(".carusel .carusel__item").on("click", function () {
        const index = $(this).attr("data-slick-index");
        $(".carusel").slick("slickGoTo", index);
    });

    $('.features-cont__slider').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        centerMode: true,
        variableWidth: true,
        arrows: true,
        appendArrows: '.features-cont__arrows',
        prevArrow: '<button class="slider-btn white square-btn slider-btn__left"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.46599 14.5711C7.31725 14.5686 7.17053 14.5362 7.03461 14.4757C6.8987 14.4152 6.77639 14.3279 6.67499 14.2191L0.908987 8.47108C0.687035 8.24945 0.560684 7.94972 0.556988 7.63608C0.559065 7.32211 0.685665 7.02179 0.908987 6.80108L6.65799 1.05308C6.76168 0.942001 6.88664 0.852892 7.02544 0.791049C7.16424 0.729206 7.31406 0.695891 7.46599 0.693082C7.61026 0.686241 7.75441 0.709014 7.88955 0.759997C8.02469 0.81098 8.14796 0.889093 8.25176 0.989525C8.35557 1.08996 8.43771 1.21058 8.49312 1.34396C8.54854 1.47734 8.57606 1.62066 8.57399 1.76508C8.57312 1.91591 8.54237 2.06506 8.48349 2.20392C8.42462 2.34279 8.33879 2.4686 8.23099 2.57408L6.23099 4.57408L4.01199 6.61708L5.98999 6.51208H16.282C16.434 6.50128 16.5866 6.52266 16.7299 6.57483C16.8731 6.627 17.0037 6.7088 17.1132 6.81487C17.2226 6.92094 17.3085 7.0489 17.3652 7.19041C17.4218 7.33191 17.448 7.48377 17.442 7.63608C17.4481 7.78847 17.4221 7.94045 17.3655 8.08207C17.3089 8.2237 17.223 8.35178 17.1135 8.45796C17.0041 8.56415 16.8734 8.64603 16.7301 8.69826C16.5868 8.75049 16.4341 8.7719 16.282 8.76108H5.98999L4.01199 8.64708L6.23599 10.6931L8.23599 12.6931C8.34379 12.7986 8.42962 12.9244 8.48849 13.0632C8.54737 13.2021 8.57812 13.3513 8.57899 13.5021C8.58143 13.6469 8.55396 13.7907 8.49831 13.9244C8.44266 14.0581 8.36002 14.1789 8.25556 14.2792C8.1511 14.3796 8.02706 14.4573 7.8912 14.5075C7.75535 14.5577 7.61059 14.5794 7.46599 14.5711Z" fill="#212429"/></svg></button>',
        nextArrow: '<button class="slider-btn white square-btn slider-btn__right"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.534 14.571C10.6828 14.5686 10.8295 14.5361 10.9654 14.4756C11.1013 14.4152 11.2236 14.3279 11.325 14.219L17.091 8.47102C17.313 8.24939 17.4393 7.94966 17.443 7.63602C17.4409 7.32205 17.3143 7.02173 17.091 6.80102L11.342 1.05302C11.2383 0.94194 11.1134 0.852831 10.9746 0.790988C10.8358 0.729145 10.6859 0.69583 10.534 0.693021C10.3897 0.68618 10.2456 0.708953 10.1105 0.759936C9.97531 0.810919 9.85204 0.889032 9.74824 0.989464C9.64443 1.0899 9.56229 1.21052 9.50688 1.3439C9.45146 1.47728 9.42394 1.6206 9.42601 1.76502C9.42688 1.91585 9.45763 2.065 9.51651 2.20386C9.57538 2.34273 9.66121 2.46854 9.76901 2.57402L11.769 4.57402L13.988 6.61702L12.01 6.51202H1.71801C1.56597 6.50122 1.41335 6.5226 1.27013 6.57477C1.12691 6.62694 0.996308 6.70873 0.88684 6.81481C0.777373 6.92088 0.691506 7.04884 0.634845 7.19034C0.578184 7.33185 0.552003 7.48371 0.558011 7.63602C0.551859 7.78841 0.577933 7.94039 0.634529 8.08201C0.691126 8.22364 0.776971 8.35172 0.886454 8.4579C0.995938 8.56408 1.1266 8.64597 1.26989 8.6982C1.41318 8.75043 1.56588 8.77184 1.71801 8.76102H12.01L13.988 8.64702L11.764 10.693L9.76401 12.693C9.65621 12.7985 9.57038 12.9243 9.51151 13.0632C9.45263 13.202 9.42188 13.3512 9.42101 13.502C9.41857 13.6468 9.44604 13.7906 9.50169 13.9243C9.55734 14.058 9.63998 14.1789 9.74444 14.2792C9.8489 14.3795 9.97294 14.4572 10.1088 14.5074C10.2447 14.5576 10.3894 14.5793 10.534 14.571Z" fill="#212429"/></svg></button>',
    });

    $(".features-cont__slider .carusel__item").on("click", function () {
        const index = $(this).attr("data-slick-index");
        $(".features-cont__slider").slick("slickGoTo", index);
    });

    $('.customer__items').slick({
        centerPadding: '60px',
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });


    $('.customer__items .customer-item').on('click', function () {
        //$(this).slick('slickNext');
        const index = $(this).attr("data-slick-index");
        if (index < 0) {
            $(".customer__items").slick("slickGoTo", index);
        } else {
            $(".customer__items").slick("slickGoTo", index);
        }
    });

    $('.testimoniall__slider').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        swipeToSlide: true,
        arrows: true,
        appendArrows: '.testimoniall__arrow',
        prevArrow: '<button class="slider-btn square-btn slider-btn__left"><span><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.46599 14.5711C7.31725 14.5686 7.17053 14.5362 7.03461 14.4757C6.8987 14.4152 6.77639 14.3279 6.67499 14.2191L0.908987 8.47108C0.687035 8.24945 0.560684 7.94972 0.556988 7.63608C0.559065 7.32211 0.685665 7.02179 0.908987 6.80108L6.65799 1.05308C6.76168 0.942001 6.88664 0.852892 7.02544 0.791049C7.16424 0.729206 7.31406 0.695891 7.46599 0.693082C7.61026 0.686241 7.75441 0.709014 7.88955 0.759997C8.02469 0.81098 8.14796 0.889093 8.25176 0.989525C8.35557 1.08996 8.43771 1.21058 8.49312 1.34396C8.54854 1.47734 8.57606 1.62066 8.57399 1.76508C8.57312 1.91591 8.54237 2.06506 8.48349 2.20392C8.42462 2.34279 8.33879 2.4686 8.23099 2.57408L6.23099 4.57408L4.01199 6.61708L5.98999 6.51208H16.282C16.434 6.50128 16.5866 6.52266 16.7299 6.57483C16.8731 6.627 17.0037 6.7088 17.1132 6.81487C17.2226 6.92094 17.3085 7.0489 17.3652 7.19041C17.4218 7.33191 17.448 7.48377 17.442 7.63608C17.4481 7.78847 17.4221 7.94045 17.3655 8.08207C17.3089 8.2237 17.223 8.35178 17.1135 8.45796C17.0041 8.56415 16.8734 8.64603 16.7301 8.69826C16.5868 8.75049 16.4341 8.7719 16.282 8.76108H5.98999L4.01199 8.64708L6.23599 10.6931L8.23599 12.6931C8.34379 12.7986 8.42962 12.9244 8.48849 13.0632C8.54737 13.2021 8.57812 13.3513 8.57899 13.5021C8.58143 13.6469 8.55396 13.7907 8.49831 13.9244C8.44266 14.0581 8.36002 14.1789 8.25556 14.2792C8.1511 14.3796 8.02706 14.4573 7.8912 14.5075C7.75535 14.5577 7.61059 14.5794 7.46599 14.5711Z" fill="#E0E0FF"/></svg></span></button>',
        nextArrow: '<button class="slider-btn square-btn slider-btn__right"><span><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.534 14.571C10.6828 14.5686 10.8295 14.5361 10.9654 14.4756C11.1013 14.4152 11.2236 14.3279 11.325 14.219L17.091 8.47102C17.313 8.24939 17.4393 7.94966 17.443 7.63602C17.4409 7.32205 17.3143 7.02173 17.091 6.80102L11.342 1.05302C11.2383 0.94194 11.1134 0.852831 10.9746 0.790988C10.8358 0.729145 10.6859 0.69583 10.534 0.693021C10.3897 0.68618 10.2456 0.708953 10.1105 0.759936C9.97531 0.810919 9.85204 0.889032 9.74824 0.989464C9.64443 1.0899 9.56229 1.21052 9.50688 1.3439C9.45146 1.47728 9.42394 1.6206 9.42601 1.76502C9.42688 1.91585 9.45763 2.065 9.51651 2.20386C9.57538 2.34273 9.66121 2.46854 9.76901 2.57402L11.769 4.57402L13.988 6.61702L12.01 6.51202H1.71801C1.56597 6.50122 1.41335 6.5226 1.27013 6.57477C1.12691 6.62694 0.996308 6.70873 0.88684 6.81481C0.777373 6.92088 0.691506 7.04884 0.634845 7.19034C0.578184 7.33185 0.552003 7.48371 0.558011 7.63602C0.551859 7.78841 0.577933 7.94039 0.634529 8.08201C0.691126 8.22364 0.776971 8.35172 0.886454 8.4579C0.995938 8.56408 1.1266 8.64597 1.26989 8.6982C1.41318 8.75043 1.56588 8.77184 1.71801 8.76102H12.01L13.988 8.64702L11.764 10.693L9.76401 12.693C9.65621 12.7985 9.57038 12.9243 9.51151 13.0632C9.45263 13.202 9.42188 13.3512 9.42101 13.502C9.41857 13.6468 9.44604 13.7906 9.50169 13.9243C9.55734 14.058 9.63998 14.1789 9.74444 14.2792C9.8489 14.3795 9.97294 14.4572 10.1088 14.5074C10.2447 14.5576 10.3894 14.5793 10.534 14.571Z" fill="#E0E0FF"/></svg></span></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.setup__slider').slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
        arrows: true,
        appendArrows: '.setup__arrow',
        prevArrow: '<button class="slider-btn square-btn slider-btn__left"><span><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.46599 14.5711C7.31725 14.5686 7.17053 14.5362 7.03461 14.4757C6.8987 14.4152 6.77639 14.3279 6.67499 14.2191L0.908987 8.47108C0.687035 8.24945 0.560684 7.94972 0.556988 7.63608C0.559065 7.32211 0.685665 7.02179 0.908987 6.80108L6.65799 1.05308C6.76168 0.942001 6.88664 0.852892 7.02544 0.791049C7.16424 0.729206 7.31406 0.695891 7.46599 0.693082C7.61026 0.686241 7.75441 0.709014 7.88955 0.759997C8.02469 0.81098 8.14796 0.889093 8.25176 0.989525C8.35557 1.08996 8.43771 1.21058 8.49312 1.34396C8.54854 1.47734 8.57606 1.62066 8.57399 1.76508C8.57312 1.91591 8.54237 2.06506 8.48349 2.20392C8.42462 2.34279 8.33879 2.4686 8.23099 2.57408L6.23099 4.57408L4.01199 6.61708L5.98999 6.51208H16.282C16.434 6.50128 16.5866 6.52266 16.7299 6.57483C16.8731 6.627 17.0037 6.7088 17.1132 6.81487C17.2226 6.92094 17.3085 7.0489 17.3652 7.19041C17.4218 7.33191 17.448 7.48377 17.442 7.63608C17.4481 7.78847 17.4221 7.94045 17.3655 8.08207C17.3089 8.2237 17.223 8.35178 17.1135 8.45796C17.0041 8.56415 16.8734 8.64603 16.7301 8.69826C16.5868 8.75049 16.4341 8.7719 16.282 8.76108H5.98999L4.01199 8.64708L6.23599 10.6931L8.23599 12.6931C8.34379 12.7986 8.42962 12.9244 8.48849 13.0632C8.54737 13.2021 8.57812 13.3513 8.57899 13.5021C8.58143 13.6469 8.55396 13.7907 8.49831 13.9244C8.44266 14.0581 8.36002 14.1789 8.25556 14.2792C8.1511 14.3796 8.02706 14.4573 7.8912 14.5075C7.75535 14.5577 7.61059 14.5794 7.46599 14.5711Z" fill="#E0E0FF"/></svg></span></button>',
        nextArrow: '<button class="slider-btn square-btn slider-btn__right"><span><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.534 14.571C10.6828 14.5686 10.8295 14.5361 10.9654 14.4756C11.1013 14.4152 11.2236 14.3279 11.325 14.219L17.091 8.47102C17.313 8.24939 17.4393 7.94966 17.443 7.63602C17.4409 7.32205 17.3143 7.02173 17.091 6.80102L11.342 1.05302C11.2383 0.94194 11.1134 0.852831 10.9746 0.790988C10.8358 0.729145 10.6859 0.69583 10.534 0.693021C10.3897 0.68618 10.2456 0.708953 10.1105 0.759936C9.97531 0.810919 9.85204 0.889032 9.74824 0.989464C9.64443 1.0899 9.56229 1.21052 9.50688 1.3439C9.45146 1.47728 9.42394 1.6206 9.42601 1.76502C9.42688 1.91585 9.45763 2.065 9.51651 2.20386C9.57538 2.34273 9.66121 2.46854 9.76901 2.57402L11.769 4.57402L13.988 6.61702L12.01 6.51202H1.71801C1.56597 6.50122 1.41335 6.5226 1.27013 6.57477C1.12691 6.62694 0.996308 6.70873 0.88684 6.81481C0.777373 6.92088 0.691506 7.04884 0.634845 7.19034C0.578184 7.33185 0.552003 7.48371 0.558011 7.63602C0.551859 7.78841 0.577933 7.94039 0.634529 8.08201C0.691126 8.22364 0.776971 8.35172 0.886454 8.4579C0.995938 8.56408 1.1266 8.64597 1.26989 8.6982C1.41318 8.75043 1.56588 8.77184 1.71801 8.76102H12.01L13.988 8.64702L11.764 10.693L9.76401 12.693C9.65621 12.7985 9.57038 12.9243 9.51151 13.0632C9.45263 13.202 9.42188 13.3512 9.42101 13.502C9.41857 13.6468 9.44604 13.7906 9.50169 13.9243C9.55734 14.058 9.63998 14.1789 9.74444 14.2792C9.8489 14.3795 9.97294 14.4572 10.1088 14.5074C10.2447 14.5576 10.3894 14.5793 10.534 14.571Z" fill="#E0E0FF"/></svg></span></button>',
        responsive: [{
            breakpoint: 1440,
            settings: {
                slidesToShow: 2,
            }
        }]
    });

    $(' .availability__slider').slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $(".availability__slider .card").on("click", function () {
        const index = $(this).attr("data-slick-index");
        $(".availability__slider").slick("slickGoTo", index);
    });
    if ($('.affiliate__slider').hasClass('affiliate-ambassadors__slider')) {
        $('.affiliate__slider').slick({
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipeToSlide: true,
            variableWidth: true
        });
    } else {
        $('.affiliate__slider').slick({
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipeToSlide: true,
            variableWidth: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    centerMode: true
                }
            }]
        });
    }


    $(".affiliate__slider .affiliate__slide").on("click", function () {
        const index = $(this).attr("data-slick-index");
        $(".affiliate__slider").slick("slickGoTo", index);
    });

    $('.slider-cards').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        variableWidth: true,
        appendArrows: '.slider-cards__arrow',
        prevArrow: '<button class="slider-btn square-btn slider-btn__left"><span><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.46599 14.5711C7.31725 14.5686 7.17053 14.5362 7.03461 14.4757C6.8987 14.4152 6.77639 14.3279 6.67499 14.2191L0.908987 8.47108C0.687035 8.24945 0.560684 7.94972 0.556988 7.63608C0.559065 7.32211 0.685665 7.02179 0.908987 6.80108L6.65799 1.05308C6.76168 0.942001 6.88664 0.852892 7.02544 0.791049C7.16424 0.729206 7.31406 0.695891 7.46599 0.693082C7.61026 0.686241 7.75441 0.709014 7.88955 0.759997C8.02469 0.81098 8.14796 0.889093 8.25176 0.989525C8.35557 1.08996 8.43771 1.21058 8.49312 1.34396C8.54854 1.47734 8.57606 1.62066 8.57399 1.76508C8.57312 1.91591 8.54237 2.06506 8.48349 2.20392C8.42462 2.34279 8.33879 2.4686 8.23099 2.57408L6.23099 4.57408L4.01199 6.61708L5.98999 6.51208H16.282C16.434 6.50128 16.5866 6.52266 16.7299 6.57483C16.8731 6.627 17.0037 6.7088 17.1132 6.81487C17.2226 6.92094 17.3085 7.0489 17.3652 7.19041C17.4218 7.33191 17.448 7.48377 17.442 7.63608C17.4481 7.78847 17.4221 7.94045 17.3655 8.08207C17.3089 8.2237 17.223 8.35178 17.1135 8.45796C17.0041 8.56415 16.8734 8.64603 16.7301 8.69826C16.5868 8.75049 16.4341 8.7719 16.282 8.76108H5.98999L4.01199 8.64708L6.23599 10.6931L8.23599 12.6931C8.34379 12.7986 8.42962 12.9244 8.48849 13.0632C8.54737 13.2021 8.57812 13.3513 8.57899 13.5021C8.58143 13.6469 8.55396 13.7907 8.49831 13.9244C8.44266 14.0581 8.36002 14.1789 8.25556 14.2792C8.1511 14.3796 8.02706 14.4573 7.8912 14.5075C7.75535 14.5577 7.61059 14.5794 7.46599 14.5711Z" fill="#E0E0FF"/></svg></span></button>',
        nextArrow: '<button class="slider-btn square-btn slider-btn__right"><span><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.534 14.571C10.6828 14.5686 10.8295 14.5361 10.9654 14.4756C11.1013 14.4152 11.2236 14.3279 11.325 14.219L17.091 8.47102C17.313 8.24939 17.4393 7.94966 17.443 7.63602C17.4409 7.32205 17.3143 7.02173 17.091 6.80102L11.342 1.05302C11.2383 0.94194 11.1134 0.852831 10.9746 0.790988C10.8358 0.729145 10.6859 0.69583 10.534 0.693021C10.3897 0.68618 10.2456 0.708953 10.1105 0.759936C9.97531 0.810919 9.85204 0.889032 9.74824 0.989464C9.64443 1.0899 9.56229 1.21052 9.50688 1.3439C9.45146 1.47728 9.42394 1.6206 9.42601 1.76502C9.42688 1.91585 9.45763 2.065 9.51651 2.20386C9.57538 2.34273 9.66121 2.46854 9.76901 2.57402L11.769 4.57402L13.988 6.61702L12.01 6.51202H1.71801C1.56597 6.50122 1.41335 6.5226 1.27013 6.57477C1.12691 6.62694 0.996308 6.70873 0.88684 6.81481C0.777373 6.92088 0.691506 7.04884 0.634845 7.19034C0.578184 7.33185 0.552003 7.48371 0.558011 7.63602C0.551859 7.78841 0.577933 7.94039 0.634529 8.08201C0.691126 8.22364 0.776971 8.35172 0.886454 8.4579C0.995938 8.56408 1.1266 8.64597 1.26989 8.6982C1.41318 8.75043 1.56588 8.77184 1.71801 8.76102H12.01L13.988 8.64702L11.764 10.693L9.76401 12.693C9.65621 12.7985 9.57038 12.9243 9.51151 13.0632C9.45263 13.202 9.42188 13.3512 9.42101 13.502C9.41857 13.6468 9.44604 13.7906 9.50169 13.9243C9.55734 14.058 9.63998 14.1789 9.74444 14.2792C9.8489 14.3795 9.97294 14.4572 10.1088 14.5074C10.2447 14.5576 10.3894 14.5793 10.534 14.571Z" fill="#E0E0FF"/></svg></span></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                arrows: true
            }
        }]
    });

    $(".slider-cards .card").on("click", function () {
        const index = $(this).attr("data-slick-index");
        $(".slider-cards").slick("slickGoTo", index);
    });

    $('.data-analysis__slider').slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true
    });


    // faq accordion start 
    $('.faq-item .faq-item__button').on('click', function (e) {
        e.preventDefault();

        // Add the correct active class
        if ($(this).closest('.faq-item').hasClass('show')) {
            // Remove active classes
            $('.faq-item').removeClass('show');
        } else {
            // Remove active classes
            $('.faq-item').removeClass('show');

            // Add the active class
            $(this).closest('.faq-item').addClass('show');
        }

        // Show the content
        var $content = $(this).next();
        $content.slideToggle(100);
        $('.faq-item .faq-item__content').not($content).slideUp('fast');
    });
    //faq accordion end

    //magnific popup start
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        closeMarkup: '<button title="%title%" type="button" class="mfp-close close"><img src="images/icons/close.svg" alt=""></button>',
        callbacks: {
            open: function () {
                $('.mfp-close').click(function () {
                    $.magnificPopup.close()
                });
            }
        }
    });

    $('#become-ambassadors-btn').magnificPopup({
        items: {
            src: '#become-ambassadors-continue',
            type: 'inline'
        },
        closeBtnInside: true
    });
    $('.form__btn').magnificPopup({
        items: {
            src: '#coming-up-continue',
            type: 'inline'
        },
        closeBtnInside: true
    });

    $('.btn-back').magnificPopup({
        items: {
            src: '#become-ambassadors',
            type: 'inline'
        },
        closeBtnInside: true
    });
    //magnific popup end

    $(".date").mask("99.99.9999", {
        placeholder: "mm/dd/yy"
    });

})