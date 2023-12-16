
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
