// ===== NAVBAR: Efecto al hacer scroll =====
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// ===== MENÚ MOBILE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

// ===== CARRUSEL =====
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  if (slides.length === 0) return;
  
  slides.forEach(slide => slide.classList.remove('active'));
  
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Auto-play del carrusel
function startSlideShow() {
  if (slides.length > 0) {
    slideInterval = setInterval(nextSlide, 5000);
  }
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

// Eventos de botones
if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopSlideShow();
    startSlideShow();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopSlideShow();
    startSlideShow();
  });
}

// Pausar en hover
const carousel = document.querySelector('.carousel');
if (carousel) {
  carousel.addEventListener('mouseenter', stopSlideShow);
  carousel.addEventListener('mouseleave', startSlideShow);
}

// Iniciar carrusel
showSlide(0);
startSlideShow();

// ===== FORMULARIO CONTACTO CON FORMSPREE AJAX =====
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const btn = document.getElementById('btn-submit');

if (form && status && btn) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const data = new FormData(form);
    btn.disabled = true;
    btn.textContent = 'Enviando...';
    status.style.display = 'block';
    status.style.background = '#0d47a1';
    status.style.color = '#ffeb3b';
    status.style.border = '2px solid #ffeb3b';
    status.style.padding = '12px';
    status.style.borderRadius = '6px';
    status.style.marginBottom = '20px';
    status.textContent = 'Enviando mensaje...';

    try {
      const response = await fetch('https://formspree.io/f/xwvjvyww', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.style.background = '#1b5e20';
        status.style.color = '#ffeb3b';
        status.style.border = '2px solid #ffeb3b';
        status.textContent = '✅ ¡Mensaje enviado! Te responderemos a la brevedad.';
        form.reset();
        
        setTimeout(() => {
          status.style.display = 'none';
        }, 5000);
      } else {
        const result = await response.json();
        status.style.background = '#b71c1c';
        status.style.color = '#fff';
        status.style.border = '2px solid #ffcdd2';
        if (result.errors) {
          status.textContent = '❌ ' + result.errors.map(error => error.message).join(', ');
        } else {
          status.textContent = '❌ Hubo un error. Escríbenos a contacto@infors.cl';
        }
      }
    } catch (error) {
      status.style.background = '#b71c1c';
      status.style.color = '#fff';
      status.style.border = '2px solid #ffcdd2';
      status.textContent = '❌ Error de conexión. Revisa tu internet.';
    } finally {
      btn.disabled = false;
      btn.textContent = 'Enviar';
    }
  });
}
