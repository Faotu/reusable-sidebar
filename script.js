const body = document.querySelector("body"),
  sidebar = document.querySelector(".sidebar");
toggle = document.querySelector(".toggle");
searchBtn = document.querySelector(".search-box");
modeSwitch = document.querySelector(".toggle-switch");
modeText = document.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

function togglePage() {
  // Replace the URL with the destination page
  window.location.href = "predict";
}
