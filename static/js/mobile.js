// toggle hamburger menu on small screens
    document.addEventListener('DOMContentLoaded', function () {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.menu');

        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    });