// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (navMenu.classList.contains("show")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

}


// ================================
// CLOSE MOBILE MENU
// ================================

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("show");
        }

        if (menuBtn) {

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        }

    });

});


// ================================
// ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

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


// ================================
// FOOTER YEAR
// ================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (!name || !email || !message) {

            alert("Please fill all fields.");

            return;

        }

        alert(
            "Thank you " +
            name +
            "! Your message has been received."
        );

        contactForm.reset();

    });

}