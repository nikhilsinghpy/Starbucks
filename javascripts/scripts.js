

function displaynavbar(){
  var menu = document.getElementById("menu");
  menu.classList.toggle("bx-x");
  var navlinks = document.querySelector('.navlink');
  navlinks.classList.toggle("active")
}    


var swiper = new Swiper(".slide-content", {
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
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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