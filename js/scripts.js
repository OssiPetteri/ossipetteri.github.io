function toggleMenu() {
    const menu = document.querySelector('.topbar-menu');
    menu.classList.toggle('open');
}

// debug
console.log("Hamburger script loaded!");

function toggleMenu() {
  console.log("Hamburger clicked!");
  const menu = document.querySelector('.topbar-menu');
  menu.classList.toggle('open');
}

// intro transition
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector('.intro-screen');
  const main = document.getElementById('main');

  if (intro && main) {
    intro.addEventListener('click', () => {
      setTimeout(() => {
        main.scrollIntoView({ behavior: "smooth", block: "start" });      }, 350);
    });
  }
});
