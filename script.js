// Carrusel principal

const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicators span');

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove('active');
    });

    indicators.forEach(dot=>{
        dot.classList.remove('active');
    });

    slides[index].classList.add('active');
    indicators[index].classList.add('active');

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

// Cambia cada 5 segundos
setInterval(nextSlide, 5000);

// Permite hacer clic en los indicadores
indicators.forEach((dot,index)=>{

    dot.addEventListener('click',()=>{

        currentSlide = index;

        showSlide(currentSlide);

    });

});
