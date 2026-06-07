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


// =====================
// Secciones
// =====================

const hero =
  document.getElementById("hero");

const slider =
  document.getElementById("slider");

const footer =
  document.getElementById("footer");

const listaServicios =
  document.getElementById("lista-servicios");

const contacto =
  document.getElementById("contacto");


// =====================
// Funciones
// =====================

function mostrarInicio() {

  hero.style.display = "flex";

  slider.style.display = "block";

  footer.style.display = "block";

  listaServicios.style.display = "none";

  contacto.style.display = "none";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

function mostrarServicios() {

  hero.style.display = "none";

  slider.style.display = "none";

  contacto.style.display = "none";

  footer.style.display = "block";

  listaServicios.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

function mostrarContacto() {

  hero.style.display = "none";

  slider.style.display = "none";

  listaServicios.style.display = "none";

  footer.style.display = "block";

  contacto.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// =====================
// Botones
// =====================

document
.getElementById("btn-inicio")
.addEventListener(
  "click",
  function(e){

    e.preventDefault();

    mostrarInicio();

  }
);

document
.querySelectorAll(
'a[href="#lista-servicios"]'
)
.forEach(btn => {

  btn.addEventListener(
    "click",
    function(e){

      e.preventDefault();

      mostrarServicios();

    }
  );

});

document
.getElementById("btn-contacto")
.addEventListener(
  "click",
  function(e){

    e.preventDefault();

    mostrarContacto();

  }
);
