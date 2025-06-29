// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Filter Buttons
document.querySelectorAll("nav button").forEach(button => {
  button.onclick = () => {
    const category = button.dataset.filter;
    document.querySelectorAll(".thumb-card").forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };
});

// GSAP Animation
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
