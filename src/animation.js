import $ from 'jquery';

import Velocity from 'velocity-animate';    

window.onload = function() {

        $.fn.isInViewport = function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            // we multiply the value of elementBottom and elementTop by  1.1 to make sure it is visible on the viewport and is not just entering
            return elementBottom * 1.05 > viewportTop && elementTop * 1.05 < viewportBottom;
        };

        var $elements = $('article section img');
        
        if ( !$('body').hasClass('instagram') ) {
            $elements.css({opacity:0});
        }

        $elements.each(function(i){
            var $element = $elements.eq(i);

            if ( $element.hasClass('galleryImage') == true ){
                 $element.css({opacity:1});
                }
            }); 

            // var $rightElements = $('article section img.right');
            // $rightElements.css({transform: "translateX(60px)"})
        // var $leftElements = $('article section img.left');
            // $leftElements.css({transform: "translateX(-60px)"})
        $(window).on('resize scroll load', function(){
            $elements.each(function(i){

                var $el = $elements.eq(i);

                if ($el.isInViewport() == true && $el.hasClass('animation-done') == false) {

                    if ($el.hasClass('left')) {
                        // $el.addClass('animated slideInLeft')
                      Velocity($el, { opacity: 1 /* , transform:"translateX(-60px)", transform: "translateZ(0)"*/}, 2000, "easeInSine" );
                    }
                    if ($el.hasClass('right')) {
                        // $el.addClass('animated slideInRight')
                      Velocity($el, { opacity: 1 /* , transform:"translateX(60px)", transform: "translateZ(0)"*/}, 2000, "easeInSine" );
                    }
                    if (!$el.hasClass('left') && !$el.hasClass('right')) {
                        $el.addClass('animated slideInUp')
                      Velocity($el, { opacity: 1 /* , transform: "translateY(50)", transform: "translateZ(30)"*/}, 2000, "easeInSine" );
                    }

                    $el.addClass('animation-done');
                };

            });

        });
};