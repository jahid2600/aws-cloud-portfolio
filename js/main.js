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


/* ==========================================
   SERVERLESS VISITOR COUNTER
========================================== */

const visitorCountElement = document.getElementById("visitor-count");

if (visitorCountElement) {
    fetch("https://cqsalh5sgf.execute-api.ap-south-1.amazonaws.com/visitor-count")
        .then(response => response.json())
        .then(data => {
            visitorCountElement.textContent = data.count;
        })
        .catch(error => {
            console.error("Error fetching visitor count:", error);
            visitorCountElement.textContent = "Unavailable";
        });
}


/* ==========================================
   CONTACT FORM VALIDATION + SPAM PROTECTION
========================================== */

const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");
const contactSubmitBtn = document.getElementById("contact-submit-btn");

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const website = document.getElementById("website").value.trim();

        // Honeypot spam protection
        if (website) {
            contactStatus.textContent = "Message blocked.";
            return;
        }

        if (name.length < 2) {
            contactStatus.textContent = "Please enter a valid name.";
            return;
        }

        if (!isValidEmail(email)) {
            contactStatus.textContent = "Please enter a valid email address.";
            return;
        }

        if (message.length < 10) {
            contactStatus.textContent = "Message should be at least 10 characters.";
            return;
        }

        contactStatus.textContent = "Sending message...";

        if (contactSubmitBtn) {
            contactSubmitBtn.disabled = true;
            contactSubmitBtn.textContent = "Sending...";
        }

        const formData = {
            name: name,
            email: email,
            message: message,
            website: website
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
        } finally {
            if (contactSubmitBtn) {
                contactSubmitBtn.disabled = false;
                contactSubmitBtn.textContent = "Send Message";
            }
        }
    });
}