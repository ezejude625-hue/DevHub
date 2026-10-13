/* Home Page Code */

const initApp = () => {
  //  The DOM

  const header = document.querySelector(".header");
  const navbar = document.getElementById("siteNavbar");
  const menuBtn = document.getElementById("menuBtn");
  const menuIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";

    header.classList.toggle("header--menu-open", !isOpen);
    menuBtn.setAttribute("aria-expanded", String(!isOpen));
    menuBtn.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    menuIcon.classList.toggle("fa-bars", isOpen);
    menuIcon.classList.toggle("fa-xmark", !isOpen);
  });

  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("header--menu-open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Open navigation");
      menuIcon.classList.replace("fa-xmark", "fa-bars");
    });
  });
};

document.addEventListener("DOMContentLoaded", initApp);
