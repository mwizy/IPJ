let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const newTransformValue = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${newTransformValue}%)`;
}
