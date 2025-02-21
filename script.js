document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    // Highlight Active Navigation Link
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Contact Form Validation
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            const name = document.querySelector('input[type="text"]').value.trim();
            const email = document.querySelector('input[type="email"]').value.trim();
            const message = document.querySelector('textarea').value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields before submitting.");
            } else {
                alert(`Thank you, ${name}! Your message has been sent.`);
                contactForm.reset(); // Clear the form
            }
        });
    }
});
