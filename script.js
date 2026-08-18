document.addEventListener("DOMContentLoaded", function () {

  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Add a small shadow to the navigation when scrolling
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

});
