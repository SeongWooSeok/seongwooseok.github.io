// Function to initialize the slideshow
function initSlideShow() {
  const slides = document.querySelectorAll('#slideShow .slides li');
  let currentSlide = 0;

  // Function to show a slide
  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
  }

  // Function to navigate to the previous slide
  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
  }

  // Function to navigate to the next slide
  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  // Add event listeners to the previous and next buttons
  const prevButton = document.querySelector('#slideShow .controller .prev');
  const nextButton = document.querySelector('#slideShow .controller .next');
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Show the first slide
  showSlide(currentSlide);
}

// Initialize the slideshow when the page loads
window.addEventListener('load', initSlideShow);
