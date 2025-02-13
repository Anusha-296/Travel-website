document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Feature Coming Soon!");
        });
    });
});
