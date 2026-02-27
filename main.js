// Animação ao rolar página
const elements = document.querySelectorAll('.card, .gallery img');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease";

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});



document.addEventListener("DOMContentLoaded", function () {

  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const update = () => {
          const increment = target / 60;

          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(update);
          } else {
            counter.innerText = "+" + target;
          }
        };

        update();
        observer.unobserve(counter);
      }

    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    observer.observe(counter);
  });

});

});


// ===============================
// MENU MOBILE
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

});

// ===============================
// SCROLL HEADER EFFECT
// ===============================

window.addEventListener("scroll", function () {

  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});

// ===============================
// PROTEÇÃO BÁSICA CONTRA SPAM BOT
// ===============================

// Bloqueia clique automático excessivo
let clickCount = 0;

document.addEventListener("click", function () {
  clickCount++;
  if (clickCount > 1000) {
    console.warn("Comportamento suspeito detectado.");
  }
});

console.log("JS carregado");

