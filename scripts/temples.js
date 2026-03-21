// filepath: /home/luis/wdd131/wdd131/scripts/temples.js

// Hamburger menu functionality
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

// Toggle menu on button click
menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuButton.classList.toggle('close');
});

// Close menu when a link is clicked
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuButton.classList.remove('close');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
        navMenu.classList.remove('active');
        menuButton.classList.remove('close');
    }
});

// Get current year and display in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get last modified date
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;