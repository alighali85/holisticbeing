    
   var backgroundImages = { mainPage: '',
                            aboutMe:'aboutme-background.jpg',
                            training: '',
                            holistingLiving: '' 
                            };

    var  $animationElements = $('.img');
    var $window = $(window);

    $window.on('scroll', checkIfInView);
    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');

    function checkIfInView () { 
        var  $animationElements = $('.img');
        var $windowHeight = $window.height();
        var $windowTopPosition = $window.scrollTop();
        var $windowBottomPosition = ($windowTopPosition + $windowHeight);        
        $.each ($animationElements, function(){
            var $element = $(this);
            var $elementHeight = $element.outerHeight();
            var $elementTopPosition = $element.offset().top;
            var $elementBottomPosition = ( $elementHeight + $elementTopPosition );
            if ($elementBottomPosition >= $windowTopPosition) {
                $element.delay(500).queued(function(){
                    $element.addClass('img__active');
                })
            }else {
                $element.removeClass('img__active');
            }

        })

    }
                



    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this,'href')).offset().top
        },500);
    });

$(function(){
    $('.hb__body__page__mainImage').on('click', function() {
        console.log("url(./img/" + backgroundImages.aboutMe+ ")" );
        $(this).attr('src',"url(./img/" + backgroundImages.aboutMe+ ")" );
        $(this).css('border', 'solid');
    });
});
