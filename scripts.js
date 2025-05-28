// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to navbar
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.width = "100%";
    nav.style.zIndex = "1000";
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    nav.style.position = "relative";
    nav.style.boxShadow = "none";
  }
});

// Slideshow for iphone mockup
document.querySelectorAll(".slideshow-container").forEach((container) => {
  const slides = container.querySelectorAll(".slide");
  const dotsContainer = container.querySelector(".dots");

  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".dot");
  let slideIndex = 0;

  function showSlides() {
    slides.forEach((slide) => (slide.style.display = "none"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
  }

  showSlides();
  setInterval(showSlides, 3000);
});

let modalInterval;
function openModal(index) {
  const modal = document.getElementById("slideshowModal");
  const slides = modal.querySelectorAll(".slide");
  const dotsContainer = modal.querySelector(".dots");

  // Setup dots if not yet initialized
  if (dotsContainer.children.length === 0) {
    slides.forEach(() => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dotsContainer.appendChild(dot);
    });
  }

  const dots = dotsContainer.querySelectorAll(".dot");
  let slideIndex = 0;

  function showModalSlides() {
    slides.forEach((slide) => (slide.style.display = "none"));
    dots.forEach((dot) => dot.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
  }

  showModalSlides();
  modalInterval = setInterval(showModalSlides, 3000);
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("slideshowModal").style.display = "none";
  clearInterval(modalInterval);
}
