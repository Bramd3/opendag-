
let lastScrollTop = 0; 
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = header.offsetHeight; 

    if (currentScroll > lastScrollTop) {
        header.style.top = `-${headerHeight}px`;
    } else {
        header.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});

const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modeToggle.classList.toggle('fa-moon');
    modeToggle.classList.toggle('fa-sun');
});
