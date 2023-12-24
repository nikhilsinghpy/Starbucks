

function displaynavbar(){
  var menu = document.getElementById("menu");
  menu.classList.toggle("bx-x");
  var navlinks = document.querySelector('.navlink');
  navlinks.classList.toggle("active")
}    


var swiper = new Swiper("#slide-content-first", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: "#next-btn",
    prevEl: "#prev-btn",
  },
  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

var secondswiper = new Swiper("#swiper-content-second", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: "#next-btn-second",
    prevEl: "#prev-btn-second",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      720: {
        slidesPerView: 3,
      },
      950: {
          slidesPerView: 4,
      },
  },
});
