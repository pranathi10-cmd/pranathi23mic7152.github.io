const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const cards = document.querySelectorAll(".skill-card, .project-card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(25px)";
  card.style.transition = "opacity .7s ease, transform .7s ease, border-color .3s";
  observer.observe(card);
});

document.querySelectorAll(".project-card").forEach(card => {
  const label = document.createElement("span");
  label.className = "selected-label";
  label.textContent = "SELECTED ✓";
  card.appendChild(label);

  card.addEventListener("click", () => {
    document.querySelectorAll(".project-card").forEach(item => {
      item.classList.remove("selected");
    });
    card.classList.add("selected");
  });
});
