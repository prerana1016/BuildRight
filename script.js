// script.js

// Function to scroll smoothly to a section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

// Event listeners for navigation links
document.getElementById("home-link").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("home");
});

document.getElementById("services-link").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("services");
});

document.getElementById("about-link").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("about");
});

document.getElementById("contact-link").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("contact");
});

// "Get a Quote" button
document.getElementById("quote-button").addEventListener("click", function() {
    alert("Redirecting to the 'Get a Quote' page.");
    window.location.href = "#"; // Replace "#" with the actual URL if needed
});

// "Learn More" button
document.getElementById("learn-more-button").addEventListener("click", function() {
    scrollToSection("services");
});

// "Get Started" button
document.getElementById("get-started-button").addEventListener("click", function() {
    alert("Get started with BuildRight Construction!");
    window.location.href = "#"; // Replace "#" with the actual URL if needed
});
// "Privacy Policy"
document.getElementById("privacy-policy").addEventListener("click", function() {
    alert("Redirecting to the 'Privacy Policy' page");
    window.location.href = "#"; // Replace "#" with the actual URL if needed
});
// "Terms of Service"
document.getElementById("terms-of-service").addEventListener("click", function() {
    alert("Redirecting to the 'Terms of Service' page");
    window.location.href = "#"; // Replace "#" with the actual URL if needed
});
document.getElementById("hamburger-button").addEventListener("click", function() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});