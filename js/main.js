new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.projects-pagination',
        bulletClass: "projects-bullet",
        bulletActiveClass: "projects-bullet-active",
        clickable: "true"
      },
  });

  $(".hero-button").click(function() {
    $(".portfolio").css("display", "flex")
    $(".order-form").css("display", "flex")
  });

  $(".portfolio").click(function () { 
    $(this).css("display", "none")
    $(".order-form").css("display", "none")
  });