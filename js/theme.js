/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeButton = document.querySelector(".theme-toggle");

const body = document.body;

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {

    body.classList.add("light-mode");

    themeButton.textContent = "☀️";

}

themeButton.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "light");

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "dark");

    }

});