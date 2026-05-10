window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((el, i) => {
    const baseDelay = i * 0.085;
    const jitter = Math.random() * 0.025;
    const delay = baseDelay + jitter;

    el.style.setProperty("--delay", `${delay}s`);
  });

  const cursor = document.createElement("div");
  cursor.className = "fake-cursor";
  document.body.appendChild(cursor);

  window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor.classList.add("visible");
  });

  document.documentElement.addEventListener("mouseleave", () => {
    cursor.classList.remove("visible");
  });

  document.documentElement.addEventListener("mouseenter", () => {
    cursor.classList.add("visible");
  });
});
