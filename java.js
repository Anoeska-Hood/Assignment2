// slider.js

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', function() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    slides[currentIndex].classList.add('active');
});

document.getElementById('prevBtn').addEventListener('click', function() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    slides[currentIndex].classList.add('active');
});
