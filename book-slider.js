let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const sliderWrapper = document.querySelector('.slider-wrapper');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Update the transform property to show the current slide
function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

// Move to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Add event listeners
leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

// Initialize slider
updateSlider();
