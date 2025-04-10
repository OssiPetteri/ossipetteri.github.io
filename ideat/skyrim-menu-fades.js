// fade in
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// fade out
document.querySelector(".intro-button").addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.remove("fade-in");
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "your-next-page.html";
  }, 1000);
});