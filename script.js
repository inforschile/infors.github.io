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
        // Redirección automática a página de agradecimiento
        setTimeout(() => {
            window.location.href = "gracias.html";
        }, 2000);
    } else {
        formMessage.style.display = "block";
        formMessage.style.color = "red";
        formMessage.textContent = "❌ Error al enviar. Intenta nuevamente.";
    }
});

/* ============================
   Slider automático de servicios
   ============================ */
const servicios = document.querySelectorAll(".servicio");
let currentIndex = 0;

function mostrarServicio(index) {
    servicios.forEach((servicio, i) => {
        servicio.style.display = i === index ? "inline-block" : "none";
    });
}

// Inicializar slider
mostrarServicio(currentIndex);

// Botones de navegación
const prevBtn = document.createElement("button");
const nextBtn = document.createElement("button");
prevBtn.textContent = "◀";
nextBtn.textContent = "▶";
prevBtn.className = "slider-btn prev";
nextBtn.className = "slider-btn next";
document.getElementById("servicios").appendChild(prevBtn);
document.getElementById("servicios").appendChild(nextBtn);

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + servicios.length) % servicios.length;
    mostrarServicio(currentIndex);
});
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % servicios.length;
    mostrarServicio(currentIndex);
});

// Slider automático cada 5 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % servicios.length;
    mostrarServicio(currentIndex);
}, 5000);

