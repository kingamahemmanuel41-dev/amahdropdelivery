document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     ELEMENTS
  ========================================== */

  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  const mobileLinks = document.querySelectorAll(
    ".mobile-menu a"
  );

  const currentYear = document.getElementById(
    "currentYear"
  );


  /* =========================================
     MOBILE MENU
  ========================================== */

  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", function () {

      const isOpen =
        mobileMenu.classList.toggle("active");

      menuToggle.classList.toggle(
        "active",
        isOpen
      );

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      document.body.classList.toggle(
        "menu-open",
        isOpen
      );

    });


    /* Close menu when a link is clicked */

    mobileLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        document.body.classList.remove(
          "menu-open"
        );

      });

    });

  }


  /* =========================================
     NAVBAR SHADOW ON SCROLL
  ========================================== */

  function updateNavbar() {

    if (!navbar) {
      return;
    }

    if (window.scrollY > 20) {

      navbar.style.boxShadow =
        "0 5px 25px rgba(0,0,0,0.08)";

    } else {

      navbar.style.boxShadow = "none";

    }

  }

  window.addEventListener(
    "scroll",
    updateNavbar
  );

  updateNavbar();


  /* =========================================
     CLOSE MOBILE MENU WHEN RESIZING
  ========================================== */

  window.addEventListener(
    "resize",
    function () {

      if (
        window.innerWidth > 900 &&
        mobileMenu &&
        menuToggle
      ) {

        mobileMenu.classList.remove(
          "active"
        );

        menuToggle.classList.remove(
          "active"
        );

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        document.body.classList.remove(
          "menu-open"
        );

      }

    }
  );


  /* =========================================
     CURRENT YEAR
  ========================================== */

  if (currentYear) {

    currentYear.textContent =
      new Date().getFullYear();

  }


  /* =========================================
     SMOOTH INTERNAL NAVIGATION
  ========================================== */

  const internalLinks =
    document.querySelectorAll(
      'a[href^="#"]'
    );

  internalLinks.forEach(function (link) {

    link.addEventListener(
      "click",
      function (event) {

        const targetId =
          this.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(
            targetId
          );

        if (target) {

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }
    );

  });


  /* =========================================
     LOGO ERROR FALLBACK
     
     If the logo is accidentally missing,
     don't leave a broken image icon.
  ========================================== */

  const logos =
    document.querySelectorAll(
      ".logo img, .footer-logo img"
    );

  logos.forEach(function (logo) {

    logo.addEventListener(
      "error",
      function () {

        this.style.display = "none";

      }
    );

  });

});
