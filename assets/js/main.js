/* 
    ======================== ***** ============================= 
      Template Name: Mydevfolio - One Page Portfolio Template
	  Template URI: https://www.designtocodes.com/product/mydevfolio-one-page-portfolio-template/
	  Description: Mydevfolio is a One Page Bootstrap template built with a modern design and the latest web technologies.
	  Version: 1.0.1
	  Author: DesignToCodes
	  Author URI: https://www.designtocodes.com
	  Text Domain: mydevfolio
*/

    $(window).on("load",function(){
        // Preloader Js
        // $("#preloader").fadeOut(1500);


        // Silk Carousel slick
        function slickCarousel() {
            // home v1 page testimonial slider
            $('.d2c_testimonial_v1_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true,
                autoplaySpeed: 2000,
                dots: false,
                infinite: true,
                prevArrow: '<button type="button" class="d2c_carousel_btn left" aria-label="carousel-control"><i class="fas fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="d2c_carousel_btn right" aria-label="carousel-control"><i class="fas fa-arrow-right"></i></button>',
            });
            $('.d2c_testimonial_slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                autoplay: true,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
            // Testimonial Slider
        }
        slickCarousel();  

        // bottom to top scroll js
        function scrollToTop(){
            //Get the button
            var mybutton = document.getElementById("scrollToTopBtn");
        
            // When the user scrolls down 150px from the top of the document, show the button
            window.onscroll = function () { scrollFunction() };
        
            function scrollFunction() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
            }
        
            // When the user clicks on the button, scroll to the top of the document
            function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            }
            document.getElementById("scrollToTopBtn").addEventListener("click", topFunction);
        }scrollToTop();

        // Navbar Active
        $('.navbar').on('click', 'li', function() {
            $('.navbar .nav-item.active').removeClass('active');
            $(this).addClass('active');
        });
    });


// Counter JS
$(function () {
    let visibilityIds = ['#counters_1', '#counters_2', '#counters_3', '.progress' ]; 
    let counterClass = '.count';
    let defaultSpeed = 3000;

    $(window).on('scroll', function () {
        getVisibilityStatus();
    });
    getVisibilityStatus();

    function getVisibilityStatus() {
        elValFromTop = [];
        var windowHeight = $(window).height(),
            windowScrollValFromTop = $(this).scrollTop();

        visibilityIds.forEach(function (item, index) {
            try {
                elValFromTop[index] = Math.ceil($(item).offset().top);
            } catch (err) {
                return;
            }
            if ((windowHeight + windowScrollValFromTop) > elValFromTop[index]) {
                counter_init(item);
            }
        });
    }

    function counter_init(groupId) {
        let num, speed, direction, index = 0;
        $(counterClass).each(function () {
            num = $(this).attr('data-TargetNum');
            speed = $(this).attr('data-Speed');
            direction = $(this).attr('data-Direction');
            easing = $(this).attr('data-Easing');
            if (speed == undefined) speed = defaultSpeed;
            $(this).addClass('c_' + index);
            doCount(num, index, speed, groupId, direction, easing);
            index++;
        });
    }

    function doCount(num, index, speed, groupClass, direction, easing) {
        let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;
        if(easing == undefined) easing = "swing";
        $(className).animate({
            num
        }, {
            duration: +speed,
            easing: easing,
            step: function (now) {
                if (direction == 'reverse') {
                    $(this).text(num - Math.floor(now));
                } else {
                    $(this).text(Math.floor(now));
                }
            },
            complete: doCount
        });
    }
});


// Progress Bar
function scroll_bar(){
     $(".progress").each(function () {
        $(this).find(".progress-bar").animate({
            width: $(this).attr("data-percent")
        });
    });
}
var check = true;
function detect_visibility(){
   
    var top_of_element = $(".progress").offset().top;
    var bottom_of_element = $(".progress").offset().top + $(".progress").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && check == true){
       scroll_bar();
       check = false;
    } 
    
}
$(window).scroll(function() {
    detect_visibility();
});
detect_visibility();

    
// wow Init
new WOW().init();    

// Form Validation js
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('form_validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
        });
    }, false);
})();




/* 
    ======================== ***** ============================= 
      Template Name: Mydevfolio - One Page Portfolio Template
	  Template URI: https://www.designtocodes.com/product/mydevfolio-one-page-portfolio-template/
	  Description: Mydevfolio is a One Page Bootstrap template built with a modern design and the latest web technologies.
	  Version: 1.0.1
	  Author: DesignToCodes
	  Author URI: https://www.designtocodes.com
	  Text Domain: mydevfolio
*/
