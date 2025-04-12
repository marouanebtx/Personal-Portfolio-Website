// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  // Change icon between hamburger and X
  const icon = hamburger.querySelector("i");
  if (mobileMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll(".mobile-links a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    hamburger.querySelector("i").classList.remove("fa-times");
    hamburger.querySelector("i").classList.add("fa-bars");
  });
});

// Sticky Navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Close mobile menu when scrolling
window.addEventListener("scroll", function () {
  if (mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
    hamburger.querySelector("i").classList.remove("fa-times");
    hamburger.querySelector("i").classList.add("fa-bars");
  }
});
