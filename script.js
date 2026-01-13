const audio = document.getElementById("bgMusic");
let played = false;

const playAudioOnce = () => {
  if (!played) {
    audio.play().catch(() => {});
    played = true;
  }
};

window.addEventListener("scroll", playAudioOnce);
window.addEventListener("mousemove", playAudioOnce);
window.addEventListener("click", playAudioOnce);


// COUNTDOWN
const countdown = document.getElementById("countdown");
const eventDate = new Date("May 1, 2026").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;
  if (diff <= 0) return countdown.innerHTML = "It's time 🔥";

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdown.innerHTML = `${d} Days To Go`;
}, 1000);

// WAITLIST
document.getElementById("waitlistForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "You're on the list 🔥";
});

// GUESS GAME
document.getElementById("guessForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("guessMessage").textContent =
    "❌ Not quite… keep guessing 👀";
});

// REVEAL ON SCROLL
document.querySelectorAll(".reveal").forEach(el => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  });
  observer.observe(el);
});


// MOBILE NAV TOGGLE
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
