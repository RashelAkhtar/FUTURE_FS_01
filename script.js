// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
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

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
  }
});

// Animate service cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Animate timeline items on scroll
document.querySelectorAll(".timeline-item").forEach((item, index) => {
  item.style.transition = `opacity 0.6s ease ${
    index * 0.2
  }s, transform 0.6s ease ${index * 0.2}s`;
  observer.observe(item);
});

// Animate education cards on scroll
document.querySelectorAll(".education-card").forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = `opacity 0.6s ease ${
    index * 0.2
  }s, transform 0.6s ease ${index * 0.2}s`;
  observer.observe(card);
});
document.querySelectorAll(".service-card").forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = `opacity 0.6s ease ${
    index * 0.1
  }s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(card);
});
