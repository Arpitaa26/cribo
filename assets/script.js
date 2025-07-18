$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// mobile menu //////////////////////

$("#mobile-menu-btn").click(function () {
  $(".mobile-menu").addClass("show");
});

$("#mobile-close-btn").click(function () {
  $(".mobile-menu").removeClass("show");
});

$(".mobile-menu-close").click(function () {
  $(".mobile-menu").removeClass("show");
});
