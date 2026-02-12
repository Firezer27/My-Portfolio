const hamburger = document.querySelector(".hamburger");
const navLists = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navLists.classList.toggle("active");
});
