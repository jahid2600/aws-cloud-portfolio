/* ==========================================
   STICKY HEADER
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   CURRENT YEAR
========================================== */

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML = `© ${year} MD JAHID ALAM. All Rights Reserved.`;

}

const visitorCountElement = document.getElementById("visitor-count");

fetch("https://cqsalh5sgf.execute-api.ap-south-1.amazonaws.com/visitor-count")
    .then(response => response.json())
    .then(data => {
        visitorCountElement.textContent = data.count;
    })
    .catch(error => {
        console.error("Error fetching visitor count:", error);
        visitorCountElement.textContent = "Unavailable";
    });


    const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        contactStatus.textContent = "Sending message...";

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        try {
            const response = await fetch("https://cqsalh5sgf.execute-api.ap-south-1.amazonaws.com/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                contactStatus.textContent = "Message sent successfully!";
                contactForm.reset();
            } else {
                contactStatus.textContent = data.error || "Something went wrong. Please try again.";
            }
        } catch (error) {
            console.error("Contact form error:", error);
            contactStatus.textContent = "Unable to send message right now.";
        }
    });
}