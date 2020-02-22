;(function($){

  $(function () {

    $('.slider-1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.slider-2',
    });
    $('.slider-2').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 10,
      // slidesToScroll: 1,
      // centerMode: true,
      infinite: true,
      // dots: true,
      arrows: false,
      focusOnSelect: true,
      asNavFor: '.slider-1',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 8,
                    // slidesToScroll: 2,
                    // infinite: true,
                    // dots: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 5,
                    // slidesToScroll: 1,
                    // dots: false
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1,
                    // dots: false
                }
            }

        ]
    });
      var $grid = $('.grid').isotope({
          itemSelector: '.element-item',
          layoutMode: 'fitRows'
      });

      var filterFns = {
          print: function() {
              var print = $(this).find('.print').text();
              return print;
          },
          photography: function() {
              var photography = $(this).find('.photography').text();
              return photography;
          },
          web: function () {
              var web = $(this).find('.web').text();
              return web;
          },
          animation: function () {
              var animation = $(this).find('.animation').text();
              return animation;
          }
      };
// bind filter button click
      $('.filters-button-group').on( 'click', 'button', function() {
          var filterValue = $( this ).attr('data-filter');
          // use filterFn if matches value
          filterValue = filterFns[ filterValue ] || filterValue;
          $grid.isotope({ filter: filterValue });
      });
// change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
          var $buttonGroup = $( buttonGroup );
          $buttonGroup.on( 'click', 'button', function() {
              $buttonGroup.find('.is-checked').removeClass('is-checked');
              $( this ).addClass('is-checked');
          });
      });
      $(".input_1 input, .textarea_1 textarea").focus(function(){
          console.log(1);
          $(this).next("span").addClass("active");
      });
      $(".input_1 input, .textarea_1 textarea").blur(function(){
          console.log(2);
          if($(this).val() === ""){
              $(this).next("span").removeClass("active");
          }
      });
      $('.up').on('click', function (e) {
          e.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, "slow");
          // return false;
      });

      var nav = $('nav'),
          hamburger = $('.hamburger');
      hamburger.on('click', function () {
          hamburger.toggleClass('active');
          nav.toggle();
      });
      $(window).on('resize', function () {
          if ($(window).width() <= 740) {
              nav.hide();
          } else {
              nav.show();
          }

          hamburger.removeClass('active');
      });

  });

})(jQuery);