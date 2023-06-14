// Membuat Hamburger Menu
const toggleMenuBtn = document.querySelector("#menu-btn");
const toggleMenuSvg = document.querySelector("#menu-btn svg");
const toggledMenu = document.querySelector("#hamburger-menu");
const menuLinks = document.querySelector("#main-nav ul a");

toggleMenuBtn.addEventListener("click", toggleNav);

function toggleNav() {
  toggledMenu.classList.toggle("-translate-y-full");

  if (toggledMenu.classList.contains("-translate-y-full")) {
    toggleMenuBtn.setAttribute("aria-expanded", "false");
  } else {
    toggleMenuBtn.setAttribute("aria-expanded", "true");
  }
}
