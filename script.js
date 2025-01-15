const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");
const navUl = document.querySelector("nav ul");
const navLi = document.querySelectorAll("nav ul li");
const firstUl = document.querySelector(".firstUl");

hamburger.addEventListener("click", () => {
  firstUl.style.display = "block";
  nav.style.flexDirection = "column";
  navUl.style.flexDirection = "column";
  // navUl.forEach((ul) => (ul.style.display = "flex"));
  navLi.forEach((li) => (li.style.display = "flex"));
  hamburger.innerHTML = "X";

  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    hamburger.innerHTML = "X";
  } else {
    hamburger.innerHTML = "&#9776;";
  }

});