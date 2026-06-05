// script.js

let slides = document.querySelectorAll(".slide");
let indicators = document.querySelectorAll(".indicators span");
let currentIndex = 0;
let interval = 5000; // tiempo en ms (5 segundos)

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        indicators[i].classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
            indicators[i].classList.add("active");
        }
    });
    currentIndex = index;
}

function nextSlide() {
    let newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
}

function prevSlide() {
    let newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
}

// autoplay
setInterval(nextSlide, interval);

// indicadores clicables
indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
        showSlide(i);
    });
});

// flechas
document.querySelector(".hero").insertAdjacentHTML("beforeend", `
    <div class="arrows">
        <span class="prev">⬅️</span>
        <span class="next">➡️</span>
    </div>
`);

document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);
