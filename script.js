/* ============================
   Estilos generales
   ============================ */
body {
  font-family: 'Segoe UI', Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  color: #333;
}

/* Contenedor general para mantener ancho amplio */
section, header, footer {
  max-width: 1200px;
  margin: 0 auto;
}

/* ============================
   Logo flotante
   ============================ */
.logo {
  position: fixed;
  top: 20px;
  left: 20px;
  height: 60px;
  z-index: 1000;
}

/* ============================
   Encabezado principal
   ============================ */
header {
  background: linear-gradient(135deg, #0d47a1, #1976d2);
  color: #fff;
  text-align: center;
  padding: 100px 20px 80px;
}
header h1 {
  font-size: 2.8em;
  margin-bottom: 10px;
}
header p {
  font-size: 1.3em;
  opacity: 0.9;
}

/* ============================
   Sección de servicios
   ============================ */
#servicios {
  padding: 60px 20px;
  text-align: center;
}
#servicios h2 {
  font-size: 2.2em;
  margin-bottom: 40px;
  color: #0d47a1;
}
.servicio {
  display: inline-block;
  width: 320px;
  margin: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.servicio:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}
.servicio img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
.servicio h3 {
  margin: 15px 0 10px;
  color: #1976d2;
}
.servicio p {
  padding: 0 15px 25px;
  font-size: 1em;
}

/* ============================
   Slider de servicios
   ============================ */
.slider-btn {
  background-color: #0d47a1;
  color: #fff;
  border: none;
  padding: 10px 15px;
  margin: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2em;
  transition: background 0.3s ease;
}
.slider-btn:hover {
  background-color: #1976d2;
}

/* ============================
   Sección de contacto
   ============================ */
#contacto {
  background: #e3f2fd;
  padding: 60px 20px;
  text-align: center;
}
#contacto h2 {
  font-size: 2.2em;
  margin-bottom: 25px;
  color: #0d47a1;
}
.contact-form {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
}
.contact-form label {
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #bbb;
  border-radius: 6px;
  margin-bottom: 15px;
  font-size: 1em;
}
.contact-form button {
  background: #0d47a1;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
  transition: background 0.3s ease;
}
.contact-form button:hover {
  background: #1976d2;
}

/* ============================
   Ícono flotante de WhatsApp
   ============================ */
.whatsapp-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 60px;
  z-index: 1000;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.whatsapp-icon:hover {
  transform: scale(1.1);
}

/* ============================
   Pie de página
   ============================ */
footer {
  background: #0d47a1;
  color: #fff;
  text-align: center;
  padding: 25px;
  font-size: 0.95em;
}

/* ============================
   Responsive (móviles y tablets)
   ============================ */
@media (max-width: 768px) {
  header h1 {
    font-size: 2.2em;
  }
  header p {
    font-size: 1.1em;
  }
  .servicio {
    width: 90%;
    margin: 20px auto;
  }
  .logo {
    height: 50px;
  }
  .whatsapp-icon {
    height: 50px;
  }
  #contacto h2 {
    font-size: 1.8em;
  }
}

