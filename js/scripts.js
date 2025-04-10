

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
