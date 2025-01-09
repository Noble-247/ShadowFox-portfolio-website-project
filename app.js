// PURPOSE: MAIN JAVASCRIPT FILE FOR THE PROJECT
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  /* SERVICES TOGGLER */
  const servicesButtons = document.querySelectorAll(".service__item");
  const serviceDetails = document.querySelectorAll(".services__right");

  // Get data for the services section in the markup
  function getService(category) {
    const details = servicesData.find(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );

    serviceDetails.forEach((detail) => {
      detail.innerHTML = `
          <h3>${details.title}</h3>
          ${details.description
            .map((paragraph) => "<p>" + paragraph + "</p>")
            .join("")}
        `;
    });
  }

  function removeClass() {
    servicesButtons.forEach((btn) => btn.classList.remove("active"));
  }

  servicesButtons.forEach((item) => {
    item.addEventListener("click", () => {
      removeClass();
      const serviceClass = item.classList[1];

      item.classList.add("active");

      getService(serviceClass);
    });
  });

  // Get the first service on page load
  getService("design");

  /* SWIPER JS INITIALIZER - TESTIMONIAL SECTION */
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      600: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  /* NAVIGATION TOGGLE FOR SMALL SCREENS */
  const navMenu = document.querySelector(".nav__menu");
  const navOpenBtn = document.querySelector(".nav__toggle-open");
  const navCloseBtn = document.querySelector(".nav__toggle-close");

  function openNavHandler() {
    navMenu.style.display = "flex";
    navOpenBtn.style.display = "none";
    navCloseBtn.style.display = "inline-block";
  }

  function closeNavHandler() {
    navMenu.style.display = "none";
    navOpenBtn.style.display = "inline-block";
    navCloseBtn.style.display = "none";
  }

  navOpenBtn.addEventListener("click", openNavHandler);
  navCloseBtn.addEventListener("click", closeNavHandler);

  // Close nav menu when a link is clicked on small screens
  const navLinks = document.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        closeNavHandler();
      }
    });
  });

  /* TOGGLE DARK AND LIGHT (default) THEME FUNCTIONALITY */
  const themeToggle = document.querySelector(".nav__theme-btn");
  const body = document.querySelector("body");

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      themeToggle.innerHTML = `<i class="uil uil-sun"></i>`;
      // Save theme preference to local storage
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.innerHTML = `<i class="uil uil-moon"></i>`;
      // Save theme preference to local storage
      localStorage.setItem("theme", "");
    }
  });

  // Get the theme preference from local storage on page load
  window.addEventListener("load", () => {
    body.classList.add(localStorage.getItem("theme"));
  });

  // Display the current date-year in the footer copywrite information
  const footerYear = document.querySelector("#date-year");
  const currentYear = new Date().getFullYear();
  footerYear.textContent = currentYear;
});
