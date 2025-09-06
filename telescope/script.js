document.addEventListener("DOMContentLoaded", () => {
    // Starfield animation
    const starfield = document.getElementById("starfield");
    let stars = '';
    for (let i = 0; i < 500; i++) {
        stars += `<div class="star" style="top:${Math.random() * 100}vh; left:${Math.random() * 100}vw; animation-duration:${Math.random() * 5 + 2}s;"></div>`;
    }
    starfield.innerHTML = stars;

    // Scroll-triggered animation
    const components = document.querySelectorAll('.component');
    window.addEventListener('scroll', checkComponentsVisibility);

    function checkComponentsVisibility() {
        const triggerBottom = window.innerHeight * 0.8;
        components.forEach(component => {
            const componentTop = component.getBoundingClientRect().top;
            if (componentTop < triggerBottom) {
                component.classList.add('show');
            }
        });
    }
    
    checkComponentsVisibility(); // Check on load
});


