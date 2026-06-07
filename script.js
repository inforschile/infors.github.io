// =====================
// Slider
// =====================

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;

function mostrarSlide(index) {

  slides.forEach((slide, i) => {

    slide.classList.toggle(
      "active",
      i === index
    );

  });

}

if (slides.length > 0) {

  mostrarSlide(currentSlide);

  if (prevBtn && nextBtn) {

    prevBtn.addEventListener("click", () => {

      currentSlide =
        (currentSlide - 1 + slides.length)
        % slides.length;

      mostrarSlide(currentSlide);

    });

    nextBtn.addEventListener("click", () => {

      currentSlide =
        (currentSlide + 1)
        % slides.length;

      mostrarSlide(currentSlide);

    });

  }

  setInterval(() => {

    currentSlide =
      (currentSlide + 1)
      % slides.length;

    mostrarSlide(currentSlide);

  }, 6000);

}
