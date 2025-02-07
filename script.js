// Hamburger Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Close the menu
  });
});

// Toggle between showing and hiding the navigation menu links
function myFunction() {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  // Hide the menu when scrolling
  window.addEventListener("scroll", () => {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
  });


