document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  /* SERVICES TOGGLER */
  const servicesButtons = document.querySelectorAll(".service__item");
  const serviceDetails = document.querySelectorAll(".services__right");

  function getService(category) {
    const details = servicesData.find(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );

    serviceDetails.forEach((detail) => {
      detail.innerHTML = `
        <h3>${details.title}</h3>
        ${details.description
          .map((paragraph) => `<p>${paragraph}</p>`)
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
});
