let slideIndex = 0;
let slideshowInterval;

function startSlideshow() {
    showSlides();
    slideshowInterval = setInterval(showSlides, 3000);
}

function showSlides() {
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => (slide.style.display = 'none'));

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function () {
    startSlideshow();
});

document.getElementById('monitorizare-resurse').addEventListener('dblclick', function () {
    clearInterval(slideshowInterval);
    startSlideshow();
});
