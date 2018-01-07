    
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
            scrollTop: $($.attr(this,'href')).offset().top -100
        },500);
    });

    $(function(){
        $('.hb__body__page__mainImage').on('click', function() {
            console.log("url(./img/" + backgroundImages.aboutMe+ ")" );
            $(this).attr('src',"url(./img/" + backgroundImages.aboutMe+ ")" );
            $(this).css('border', 'solid');
        });
    });

    var pagesLinks = { home: '/index.hmtl', holistingLiving: '/holistingLivivng.html',videos: '/videos.html', training : '/training.html',courses: './courses.html', aboutLama: 'aboutMe.html', contactMe: 'contacMe.html' };

    function goToPage(pageName) {
        var fullpageLink = pagesLinks[pageName];
        console.log(pageName) ;
    }
// google maps//

function initMap() {
    var uluru = {lat: 60.679491, lng: 17.146042};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  $(document).reday(

    function(){
        $('#nav__mobi').hide();
        $('label[for="nav__mobi"]').css('display','none');
    }
  )