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
            // Redirección automática a página de agradecimiento
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

// Crear botones de navegación
const prevBtn = document.createElement("button");
const nextBtn = document.createElement("button");
prevBtn.textContent
