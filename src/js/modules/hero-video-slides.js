function videoSlider () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    
    function showSlide() {
        slides[currentSlide].classList.remove("active-text");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active-text");
    }
    setInterval(showSlide, 4500);
}

export default videoSlider;