    
   var backgroundImages = { mainPage: '',
                            aboutMe:'aboutme-background.jpg',
                            training: '',
                            holistingLiving: ''};

   $(function(){
       $(document).scroll( function(){
           var imgOne = $('#img1').offset().top - $('#img1').height();
                      console.log("elememnt offset is "+imgOne);
                      console.log("window offset is "+$(window).scrollTop());
                      if(imgOne == $(window).scrollTop()){
                          $('#img1').css('left','400px');
                      }
                      
       })
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this,'href')).offset().top
        },500);
    });
})

$(function(){
    $('.hb__body__page__mainImage').on('click', function(){
        console.log("url(./img/" + backgroundImages.aboutMe+ ")" );
        $(this).attr('src',"url(./img/" + backgroundImages.aboutMe+ ")" );
    });
});
