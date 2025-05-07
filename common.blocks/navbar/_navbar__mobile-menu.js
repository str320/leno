// Mobile Menu Toggle
export const toggleMobileButton = document.addEventListener("DOMContentLoaded", () => {

    const toggleButton = 
    document
    .querySelector(".navbar__mobile-menu-toggle");

    const mobileMenu =
    document
    .querySelector(".navbar__mobile-menu-items");

    toggleButton.addEventListener("click", () => {
        mobileMenu
        .classList
        .toggle("active");
    });

});