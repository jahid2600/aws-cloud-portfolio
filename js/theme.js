/* ==========================================
   DARK / LIGHT THEME TOGGLE
========================================== */

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        body.classList.add("light-theme");
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("aria-label", "Switch to Dark Mode");
    } else {
        body.classList.remove("light-theme");
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Switch to Light Mode");
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-theme");

        if (body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "☀️";
            themeToggle.setAttribute("aria-label", "Switch to Dark Mode");
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌙";
            themeToggle.setAttribute("aria-label", "Switch to Light Mode");
        }
    });
}