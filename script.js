/* Slider dinámico */
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
Excelente, Ricardo. Te dejo todo el sitio **listo para copiar y pegar** — los tres archivos principales (`index.html`, `styles.css` y `script.js`) — exactamente como lo tenías originalmente: diseño limpio, slider dinámico, encabezado compacto y sección de contacto funcional con Formspree.  

---

## 📄 `index.html`
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Infors Computación SpA</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Barra superior -->
  <header class="navbar">
    <img src="imagenes/logo.png" alt="Infors" class="logo">
    <nav>
      <a href="#servicios">Servicios</a>
      <a id="btn-contacto" href="#contacto">Contacto</a>
    </nav>
  </header>

  <!-- Sección principal -->
  <section class="hero">
    <h1>Soluciones tecnológicas confiables</h1>
    <p>Infors Computación SpA</p>
  </section>

  <!-- Slider de servicios -->
  <section id="servicios" class="slider">
    <div class="slide active">
      <img src="imagenes/hosting.jpg" alt="Hosting y Servicios Web">
      <div class="slide-text">
        <h2>Hosting y Servicios Web</h2>
        <p>Hosting profesional, correos corporativos, dominios y administración DNS.</p>
        <a href="#" class="btn-info">Más Información</a>
      </div>
    </div>

    <div class="slide">
      <img src="imagenes/soporte.jpg" alt="Soporte Técnico">
      <div class="slide-text">
        <h2>Soporte Técnico</h2>
        <p>Asistencia experta en hardware y software.</p>
        <a href="#" class="btn-info">Más Información</a>
      </div>
    </div>

    <div class="slide">
      <img src="imagenes/servidores.jpg" alt="Servidores Linux">
      <div class="slide-text">
        <h2>Servidores Linux</h2>
        <p>Implementación y administración de servidores seguros.</p>
        <a href="#" class="btn-info">Más Información</a>
      </div>
    </div>

    <!-- Flechas -->
    <button class="prev">◀</button>
    <button class="next">▶</button>
  </section>

  <!-- Sección de contacto -->
  <section id="contacto">
    <h2>Contacto</h2>
    <p>📧 <a href="mailto:contacto@infors.cl">contacto@infors.cl</a></p>
    <p>📱 WhatsApp disponible</p>

    <form class="contact-form" action="https://formspree.io/f/xwvjvyww" method="POST">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required>

      <label for="email">Correo:</label>
      <input type="email" id="email" name="email" required>

      <label for="mensaje">Mensaje:</label>
      <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

      <input type="hidden" name="_next" value="https://ricardoramirez78.github.io/infors/gracias.html">
      <input type="hidden" name="_subject" value="Nuevo mensaje desde Infors.cl">

      <button type="submit">Enviar</button>
    </form>
  </section>

  <!-- Pie de página -->
  <footer>
    © 2026 Infors Computación SpA — Todos los derechos reservados.
  </footer>

  <script src="script.js"></script>
</body>
</html>
