const theBody = document.querySelector("body");
const openNav = document.querySelector(".menu-bar button");
const closeNav = document.querySelector(".close-nav button");
const Navbar = document.querySelector(".navbar");

// Hiding body scroll when mobile navigation menu opens
function bodyScroll() {
  if (Navbar.classList.contains("show")) {
    theBody.classList.add("hide-scroll");
  } else if (theBody.classList.contains("hide-scroll")) {
    theBody.classList.remove("hide-scroll");
  }
}

function showHide() {
  Navbar.classList.toggle("show");
  bodyScroll();
}

openNav.onclick = showHide;
closeNav.onclick = showHide;

const obj = document.querySelector(".objectives");
const mis = document.querySelector(".mission");
const vis = document.querySelector(".vision");

const obj_btn = document.querySelector(".obj-btn");
const mis_btn = document.querySelector(".mis-btn");
const vis_btn = document.querySelector(".vis-btn");
obj.classList.add("active");
obj_btn.classList.add("active_btn");
obj_btn.addEventListener("click", () => {
  mis.classList.remove("active");
  obj.classList.add("active");
  vis.classList.remove("active");
  obj_btn.classList.remove("non-btn");
  obj_btn.classList.add("active_btn");
  mis_btn.classList.remove("active_btn");
  vis_btn.classList.remove("active_btn");
  mis_btn.classList.add("non-btn");
  vis_btn.classList.add("non-btn");
});

mis_btn.addEventListener("click", () => {
  obj.classList.remove("active");
  mis.classList.add("active");
  vis.classList.remove("active");
  mis_btn.classList.add("active_btn");
  mis_btn.classList.remove("non-btn");
  vis_btn.classList.remove("active_btn");
  vis_btn.classList.add("non-btn");
  obj_btn.classList.remove("active_btn");
  obj_btn.classList.add("non-btn");
});

vis_btn.addEventListener("click", () => {
  obj.classList.remove("active");
  mis.classList.remove("active");
  vis.classList.add("active");
  vis_btn.classList.add("active_btn");
  mis_btn.classList.remove("active_btn");
  obj_btn.classList.add("non-btn");
  vis_btn.classList.remove("non-btn");
  obj_btn.classList.remove("active_btn");
  mis_btn.classList.add("non-btn");
});

gallary;

function loadMore() {
  let gallary = document.querySelector(".gallary");
  let load_btn = document.querySelector(".load-more");

  gallary.style.height = "180vh";
}

// slideshow

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
