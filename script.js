/* ============================
   Slider dinámico de servicios
   ============================ */
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentSlide = 0;

function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Botones de navegación
prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  mostrarSlide(currentSlide);
});
nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  mostrarSlide(currentSlide);
});

// Avance automático cada 6 segundos
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  mostrarSlide(currentSlide);
}, 6000);

/* ============================
   Formulario de contacto (Formspree)
   ============================ */
const form = document.querySelector(".contact-form");
const formMessage = document.createElement("div");
formMessage.style.display = "none";
formMessage.style.marginTop = "15px";
formMessage.style.fontWeight = "bold";
form.appendChild(formMessage);

form.addEventListener("submit", async function(e) {
  e.preventDefault();
  const data = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      form.reset();
      formMessage.style.display = "block";
      formMessage.style.color = "green";
      formMessage.textContent = "✅ Gracias por tu mensaje. Te responderemos pronto.";
      setTimeout(() => {
        window.location.href = "gracias.html";
      }, 2000);
    } else {
      throw new Error("Error en el envío");
    }
  } catch (error) {
    formMessage.style.display = "block";
    formMessage.style.color = "red";
    formMessage.textContent = "❌ Hubo un problema al enviar. Intenta nuevamente.";
  }
/* Mostrar sección de contacto al hacer clic */
const btnContacto = document.getElementById("btn-contacto");
const contacto = document.getElementById("contacto");

btnContacto.addEventListener("click", () => {
  contacto.style.display = "block";
  contacto.scrollIntoView({ behavior: "smooth" });
}
/* Mostrar sección de contacto al hacer clic */
const btnContacto = document.getElementById("btn-contacto");
const contacto = document.getElementById("contacto");

btnContacto.addEventListener("click", () => {
  contacto.style.display = "block";
  contacto.scrollIntoView({ behavior: "smooth" });
}
#contacto {
  display: none;
}
                             
                             
