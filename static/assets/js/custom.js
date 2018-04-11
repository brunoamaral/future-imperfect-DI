    window.onload = function() {
            $.fn.isInViewport = function() {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();
                // we multiply the value of elementBottom and elementTop by 1.1 to make sure it is visible on the viewport and is not just entering
                return elementBottom *1.1 > viewportTop && elementTop *1.1 < viewportBottom;
            };

            var $elements = $('article section img')
            $elements.css({opacity:0})

            $(window).on('resize scroll load', function(){
                $elements.each(function(i){

                    var $el = $elements.eq(i);

                    if ($el.isInViewport() == true && $el.hasClass('animated') == false) {

                        if ($el.hasClass('left')) {
                          $el.velocity("transition.slideLeftIn", { duration: 1500 });
                        }
                        if ($el.hasClass('right')) {
                          $el.velocity("transition.slideRightIn", { duration: 1500 });
                        }
                        if (!$el.hasClass('left') && !$el.hasClass('right')) {
                          $el.velocity("transition.slideUpIn",  { duration: 1500 });
                        }

                        $el.addClass('animated');
                    };

                });

            });
          };