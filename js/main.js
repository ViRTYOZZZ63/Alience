const navbar = document.querySelector(".navbar");
const logoLight = document.querySelector(".logo-logo-light");
const logo = document.querySelector(".logo");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");
const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
  logo.style.display = "block";
  logoLight.style.display = "none";
};
const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
  logo.style.display = "none";
  logoLight.style.display = "block";
};
const openMenu = (event) => {
  menu.classList.add("is-open");
  mMenuToggle.classList.add("close-menu");
  document.body.style.overflow = "hidden"; // Запрет прокутки сайта под меню
  lightModeOn();
};
const closeMenu = (event) => {
  menu.classList.remove("is-open");
  mMenuToggle.classList.remove("close-menu");
  document.body.style.overflow = ""; // возвращает прокутку сайта под меню
  lightModeOff();
  window.scrollY > 1 ? lightModeOn() : lightModeOff(); // Проверка уровня прокрутки после закрытия меню
};
mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});

window.addEventListener("scroll", () => {
  window.scrollY > 1 ? lightModeOn() : lightModeOff(); // Проверка уровня прокрутки
});

const modal = document.querySelector(".modal");
const modalDialog = document.querySelector(".modal-dialog");

document.addEventListener("click", (event) => {
  if (
    event.target.dataset.toggle == "modal" ||
    event.target.parentNode.dataset.toggle == "modal" ||
    !event.composedPath().includes(modalDialog)
  ) {
    event.preventDefault();
    modal.classList.toggle("is-open");
  }
});
document.addEventListener("keyup", (event) => {
  if (event.key == "Escape" && modal.classList.contains("is-open")) {
    modal.classList.toggle("is-open");
  }
});
