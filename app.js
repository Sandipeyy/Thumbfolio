// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Filter Buttons
document.querySelectorAll("nav button").forEach((button) => {
  button.onclick = () => {
    document.querySelectorAll(".thumb-card").forEach((card) => {
      if (button.dataset.filter === "all" || card.dataset.category === button.dataset.filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Highlight active button
    document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  };
});

// GSAP Animations
gsap.from("header", { y: -50, opacity: 0, duration: 1 });
gsap.from("nav button", {
  y: -20,
  opacity: 0,
  stagger: 0.1,
  duration: 0.6,
});
gsap.from(".thumb-card", {
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
});
gsap.from("#about h2", { opacity: 0, y: 40, duration: 1, delay: 1 });
gsap.from("#about p", { opacity: 0, y: 40, duration: 1, delay: 1.3 });
gsap.from("#testimonials h2", { opacity: 0, y: 40, duration: 1, delay: 1.5 });
gsap.from("#testimonials .testimonial", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 1.7,
  stagger: 0.4,
});
gsap.from("#contact h2", { opacity: 0, y: 40, duration: 1, delay: 2 });
gsap.from("#contact form", { opacity: 0, y: 40, duration: 1, delay: 2.2 });

// Form submission feedback handler
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  formMessage.style.color = "#4c51bf";
  formMessage.textContent = "Sending your message...";
});
