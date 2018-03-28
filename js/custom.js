$(function(){
    $(".banner__scroll").click(function (e) {
      e.preventDefault();
      var elementClick = $(this).attr("href");
      var destination = $('#' + elementClick).offset().top;
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        $('body').animate({ scrollTop: destination }, 1100);
      } else {
        $('html').animate({ scrollTop: destination }, 800);
      }
      return false;
    });
    $('.partners__slider_left, .partners__slider_right').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
    })
});
