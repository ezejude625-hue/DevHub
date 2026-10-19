/* Home Page Code */

const initApp = () => {
  //  The DOM

  const header = document.querySelector(".header");
  const navbar = document.getElementById("siteNavbar");
  const menuBtn = document.getElementById("menuBtn");
  const menuIcon = menuBtn.querySelector("i");
  const mobileNav = window.matchMedia("(max-width: 1100px)");
  const navInput = document.getElementById("navInput");

  const closeMenu = () => {
    header.classList.remove("header--menu-open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation");
    menuIcon.classList.replace("fa-xmark", "fa-bars");
  };

  menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
      return;
    }

    header.classList.add("header--menu-open");
    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("aria-label", "Close navigation");
    menuIcon.classList.replace("fa-bars", "fa-xmark");
  });

  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuBtn.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menuBtn.focus();
    }
  });

  mobileNav.addEventListener("change", (event) => {
    if (!event.matches) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== navInput) {
      event.preventDefault();
      navInput.focus();
    }
  });
};

document.addEventListener("DOMContentLoaded", initApp);
