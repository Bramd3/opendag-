// script.js

let lastScrollTop = 0; // Houd de laatste scrollpositie bij
const header = document.getElementById('header'); // Haal de header op

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = header.offsetHeight; // Haal de hoogte van de header op

    if (currentScroll > lastScrollTop) {
        // Scroll naar beneden
        header.style.top = `-${headerHeight}px`; // Verberg de header door de top-property naar boven te verschuiven
    } else {
        // Scroll naar boven
        header.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Voor mobiel scrollen
});
