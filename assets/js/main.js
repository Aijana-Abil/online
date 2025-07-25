document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
    document.querySelector("#overlay").classList.toggle("overlay");
  });
});

const burgerBtn = document.getElementById("burger");
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
});
