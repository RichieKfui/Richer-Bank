$(document).ready(function () {

    new WOW().init();
    /*=====================================
                NAVIGATION
    =====================================*/

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 550) {
            $('#mainNavbar').addClass('colored');
            $('#back-to-top').fadeIn();

        } else {
            $('#mainNavbar').removeClass('colored');
            $('#back-to-top').fadeOut();
        }
    });

    //Smooth scrolling
    $('a.smooth-scroll').click(function (event) {

        event.preventDefault();

        //get/return id like #about, #work, # team etc
        var section = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1000, "easeInOutExpo");

    });

    function search() {
      $('.open-search').on('click', function() {
        $('.search-overlay').css('display', 'block');
        $('.search-overlay').addClass('fadeInUp');
      });
      $(window).on('scroll', function() {
        $('.search-overlay').css('display', 'none');
      });
      $('.close-btn').on('click', function() {
        $('.search-overlay').css('display', 'none');
      });
      }
search();

  // function zoomIn() {
  //   $('.carousel-item').on('click',  function() {
  //     $('.carousel-image-1').addClass('activer');
  //   });
  //   }
  //
  //   setInterval(zoomIn, 0);
});
