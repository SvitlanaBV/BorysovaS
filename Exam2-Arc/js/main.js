;(function($){

    $(".overlay").hover(function(){
        $(this).css("background", "rgba(33, 44, 67, 0.1) url(\"image/360.png\") center no-repeat");
    }, function(){
        $(this).css("background", "rgba(33, 44, 67, 0)");
    });

    $(function () {
        $('#slider').slick({
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
        $('.slider-1').slick({
            arrows: true,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    });
})(jQuery);