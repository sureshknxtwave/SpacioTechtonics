// Example placeholder for potential interactive elements
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  alert('Menu button clicked! Add your menu toggle logic here.');
});


// JavaScript for Carousel
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

// Function to show a slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

// Go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Go to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Event Listeners
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Initialize the carousel
showSlide(currentSlide);


// Carousel for Latest Work Section
const latestWorkImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

document.querySelector('.carousel .prev').addEventListener('click', () => {
  latestWorkImages[currentIndex].style.display = 'none';
  currentIndex = (currentIndex - 1 + latestWorkImages.length) % latestWorkImages.length;
  latestWorkImages[currentIndex].style.display = 'block';
});

document.querySelector('.carousel .next').addEventListener('click', () => {
  latestWorkImages[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % latestWorkImages.length;
  latestWorkImages[currentIndex].style.display = 'block';
});

// Set initial state for the Latest Work images
latestWorkImages.forEach((img, index) => {
  img.style.display = index === 0 ? 'block' : 'none';
}); 

