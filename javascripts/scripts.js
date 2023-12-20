
// $(document).ready(function() {
//     $('#menu').click(function() {
//       $(this).toggleClass('bx-x');
//       $('.navlink').toggleClass('active');
//     });
//     });

function displaynavbar(){
  var menu = document.getElementById("menu");
  menu.classList.toggle("bx-x");
  var navlinks = document.querySelector('.navlink');
  navlinks.classList.toggle("active")
  // var nav = document.getElementsByClassName()
}    

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});