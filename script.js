// sticky header
const openBtn = document.getElementById("menu-open-btn");
const header = document.querySelector("header");
window.addEventListener("scroll", function (e) {
  e.preventDefault();
  header.classList.toggle("sticky", window.scrollY > 50);
  document
    .getElementById("menu-open-btn")
    .classList.toggle("activated", window.scrollY > 50);
});

// sticky header
// active menu

const activeLinks = document.querySelectorAll(".desktop-menu> li > a");

activeLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    activeLinks.forEach((otherLink) => {
      otherLink.classList.remove("active-color");
    });
    link.classList.add("active-color");
  });
});
// // active menu
// image popup
const popupImage1 = document.getElementById("popup-image1");
const popupImage2 = document.getElementById("popup-image2");

const showPopup = document.querySelector(".portfolio-icon");

showPopup.addEventListener("click", function () {
  popupImage1.style.display = "flex";
});
popupImage1.addEventListener("click", function () {
  popupImage1.style.display = "none";
});

// image popup

// dropdown menu
const processMenu = document.querySelector(".process-menu");
const processMenu1 = document.querySelector(".process-menu1");
const subMenu = document.getElementById("submenu-list-1");
const subMenu2 = document.getElementById("submenu-list-2");
const arrowRotate = document.querySelector(".rotate-on-click");
const arrowRotate1 = document.querySelector(".rotate-on-click1");

processMenu.addEventListener("click", function (e) {
  // console.log(e.target);
  e.preventDefault();
  subMenu.classList.toggle("open");
  arrowRotate.classList.toggle("rotate");
});

processMenu1.addEventListener("click", function (e) {
  e.preventDefault();
  subMenu2.classList.toggle("opens");
  arrowRotate1.classList.toggle("rotates");
});

window.addEventListener("click", function (e) {
  const submenuOpen = document.querySelector(".open");
  if (
    submenuOpen &&
    !submenuOpen.contains(e.target) &&
    !processMenu.contains(e.target)
  ) {
    submenuOpen.classList.remove("open");
  }
});

// dropdown menu

//offcanvus menu

const closeBtn = document.getElementById("menu-close-btn");
const offCanvusMenu = document.getElementById("offcanvus-menu");
const transOverlay = document.getElementById("transparent-overlay");

openBtn.addEventListener("click", function () {
  offCanvusMenu.classList.add("active");
  transOverlay.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  offCanvusMenu.classList.remove("active");
  transOverlay.classList.remove("active");
});

transOverlay.addEventListener("click", function () {
  offCanvusMenu.classList.remove("active");
  transOverlay.classList.remove("active");
});
//offcanvus menu
