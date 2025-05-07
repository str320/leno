// Scroll Menu Transparent

export const navbarScroll = window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 0) {
        navbar
        .classList
        .add("navbar--scroll");
    } else {
        navbar
        .classList
        .remove("navbar--scroll");
    }
});