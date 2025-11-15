/* ============================================================
   HEADER SCROLL EFFECT
============================================================ */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* ============================================================
   MOBILE NAVIGATION
============================================================ */
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* ============================================================
   HERO GALLERY AUTO SLIDE (optional, aktiviert)
============================================================ */
const heroImages = [
    "assets/hero1.jpg",
    "assets/hero2.jpg",
    "assets/hero3.jpg",
    "assets/hero4.jpg"
];

let heroIndex = 0;
const heroItems = document.querySelectorAll(".hero-gallery .gallery-item");

function updateHeroGallery() {
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroItems.forEach((item, i) => {
        const imgIndex = (heroIndex + i) % heroImages.length;
        item.style.backgroundImage = `url('${heroImages[imgIndex]}')`;
    });
}

setInterval(updateHeroGallery, 4000);


/* ============================================================
   GALLERY SLIDER
============================================================ */
const slideContainer = document.querySelector(".gallery-slides");
const slides = document.querySelectorAll(".gallery-slide");
const indicators = document.querySelectorAll(".gallery-indicator");

const btnPrev = document.querySelector(".prev-btn");
const btnNext = document.querySelector(".next-btn");

let currentSlide = 0;

function updateSlider() {
    slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    indicators.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
    });
}

btnNext.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
});

btnPrev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
});

indicators.forEach(dot => {
    dot.addEventListener("click", () => {
        currentSlide = Number(dot.dataset.index);
        updateSlider();
    });
});


/* ============================================================
   GSAP ANIMATIONS
============================================================ */
gsap.registerPlugin(ScrollTrigger);

// HERO
gsap.from(".hero-text", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.3
});

gsap.from(".hero-gallery", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 0.6
});

// SECTIONS
const fadeElements = [
    ".services-grid",
    ".gallery-container",
    ".about-content",
    ".testimonials-grid",
    ".contact-container"
];

fadeElements.forEach(selector => {
    gsap.from(selector, {
        scrollTrigger: {
            trigger: selector,
            start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8
    });
});
