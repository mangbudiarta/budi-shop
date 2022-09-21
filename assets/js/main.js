//Navbar Responsive
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//Navbar Scroll
var nav = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 45) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
});
 