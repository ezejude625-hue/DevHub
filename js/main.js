/* Home Page Code */

const initApp = () => {
  //  The DOM

  const menu = document.getElementById("menu");
  const menuBtn = document.getElementById("menuBtn");

  menuBtn.addEventListener("click", () => {
    menu.classList.add("menu__open");
  });
};

document.addEventListener("DOMContentLoaded", initApp);
