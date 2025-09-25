// Simple menu toggle for mobile
const nav = document.querySelector("nav ul");
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "☰";
document.querySelector("header").insertBefore(toggleBtn, nav);

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});
