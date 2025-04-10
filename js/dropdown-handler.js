let dropdownOpened = false;

function handleDropdownClick(event) {
  if (window.matchMedia("(pointer: coarse)").matches) {
    if (!dropdownOpened) {
      event.preventDefault(); // Prevent immediate navigation
      dropdownOpened = true; // Mark dropdown as opened
    } else {
      dropdownOpened = false; // Reset state after activation
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".hamburger");
  const menu = document.querySelector(".topbar-menu");

  // Toggle menu open when hamburger is clicked
  burger.addEventListener("click", (e) => {
    menu.classList.add("open");
    burger.classList.add("hidden");
    e.stopPropagation(); // prevent click from closing immediately
  });

  // Close menu when clicking outside of it
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) {
      menu.classList.remove("open");
      burger.classList.remove("hidden");
    }
  });
});