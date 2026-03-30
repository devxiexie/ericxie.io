window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((el, i) => {
    const baseDelay = i * 0.085;
    const jitter = Math.random() * 0.025;
    const delay = baseDelay + jitter;

    el.style.setProperty("--delay", `${delay}s`);
  });
});
