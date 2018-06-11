import $ from 'jquery';

import Velocity from 'velocity-animate';    
import 'velocity-animate/velocity.ui.min.js';

window.onload = function() {

        $.fn.isInViewport = function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            // we multiply the value of elementBottom and elementTop by  1.1 to make sure it is visible on the viewport and is not just entering
            return elementBottom * 1.09 > viewportTop && elementTop * 1.09 < viewportBottom;
        };

        var $elements = $('article section img');

        if ( !$('body').hasClass('instagram') ) {
            $elements.each(function(i){
                var $el = $elements.eq(i);     
                if ($el.hasClass('animate')){       
                    $el.css({opacity:0});
                }
            });
        }
        

        $(window).on('resize scroll load', function(){
                $elements.each(function(i){

                var $el = $elements.eq(i);

                if ($el.isInViewport() == true && $el.hasClass('animated') == false && $el.hasClass('animate') ) {

                    var duration = 1500;

                    if ($el.hasClass('left')) {
                        $el.addClass('animated slideInLeft')
                        Velocity($el, "slideInLeft", {duration: duration});
                        console.log('animated left');
                    }
                    if ($el.hasClass('right')) {
                        $el.addClass('animated slideInRight')
                        Velocity($el, "slideInRight", {duration: duration});
                        console.log('animated right');

                    }
                    if (!$el.hasClass('left') && !$el.hasClass('right')) {
                        $el.addClass('animated slideInUp')
                        Velocity($el, "slideInUp", {duration: duration});
                        console.log('animated up');

                    }

                };

            });

        });
};