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
      items: 4,
    },
  },
});

// mobile menu //////////////////////

// $("#mobile-menu-btn").click(function () {
//   $(".mobile-menu").addClass("show");
// });

// $("#mobile-close-btn").click(function () {
//   $(".mobile-menu").removeClass("show");
// });

// $(".mobile-menu-close").click(function () {
//   $(".mobile-menu").removeClass("show");
// });
   const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navActions = document.getElementById('nav-actions');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navActions.classList.toggle('active');
    });
    const closeBtn = document.getElementById('mobile-close-btn');

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
  navActions.classList.remove('active');
});