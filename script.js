// --- Slider ---
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentSlide = 0;

function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

mostrarSlide(currentSlide);

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  mostrarSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  mostrarSlide(currentSlide);
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  mostrarSlide(currentSlide);
}, 6000);

// --- Botón Contacto ---
const btnContacto = document.getElementById("btn-contacto");
const contacto = document.getElementById("contacto");

btnContacto.addEventListener("click", (e) => {
  e.preventDefault();
  contacto.style.display = "block";
  contacto.scrollIntoView({ behavior: "smooth" });
});

// --- Botón Servicios ---
const botonesServicios = document.querySelectorAll('a[href="#lista-servicios"]');
const listaServicios = document.getElementById("lista-servicios");

botonesServicios.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    listaServicios.style.display = "block";

    listaServicios.scrollIntoView({
      behavior: "smooth"
    });
  });
});
