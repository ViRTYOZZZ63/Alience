const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");
const lightModeOn = (event)=> {
  navbar.classList.add("navbar-light");
logo.href.baseVal="img/sprite.svg#logo-1";
};
const lightModeOff = (event)=> {
  navbar.classList.remove("navbar-light");
  logo.href.baseVal="img/sprite.svg#logo-white";
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
 window.scrollY>1 ? lightModeOn() : lightModeOff(); // Проверка уровня прокрутки после закрытия меню
  };
mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});

window.addEventListener('scroll', () => {
  window.scrollY>1 ? lightModeOn() : lightModeOff(); // Проверка уровня прокрутки
});

// Снизу баганный код(
  const swiper = new Swiper('.swiper', {
    speed: 400,
    autoHeight: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 2,
       centerSlides: true,
       slidesOffsetBefore: -100,
       slidesOffsetAfter: 60,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 4,
        
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });