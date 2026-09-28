// ==================== INITIALIZATION ==================== //

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // 2. Initialize Particles.js
    if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 40,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#00E5FF" },
                "shape": {
                    "type": "circle",
                    "stroke": { "width": 0, "color": "#000000" },
                    "polygon": { "nb_sides": 5 }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": { "enable": false }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": { "enable": false }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00E5FF",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": { "enable": false }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }

    // 3. Initialize Typed.js
    if (document.querySelector('.typed-text') && typeof Typed !== 'undefined') {
        new Typed('.typed-text', {
            strings: ['AI & ML Graduate', 'Python Developer', 'Machine Learning Enthusiast', 'Problem Solver'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // 4. Initialize Vanilla Tilt
    if (document.querySelectorAll('[data-tilt]').length > 0 && typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2
        });
    }
});

// ==================== MENU SHOW / HIDE ==================== //
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Remove menu mobile on link click
const navLink = document.querySelectorAll('.nav-link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// ==================== THEME TOGGLE ==================== //
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';

const readStoredTheme = () => {
    try {
        return localStorage.getItem('selected-theme');
    } catch {
        return null;
    }
};

const storeTheme = (theme) => {
    try {
        localStorage.setItem('selected-theme', theme);
    } catch {
        // The toggle still works when storage is unavailable.
    }
};

const applyTheme = (theme) => {
    const isDark = theme === 'dark';
    const icon = themeButton.querySelector('i');

    document.body.classList.toggle(darkTheme, isDark);
    icon.classList.toggle('bx-sun', isDark);
    icon.classList.toggle('bx-moon', !isDark);

    const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';
    themeButton.setAttribute('aria-label', label);
    themeButton.setAttribute('title', label);
};

if (themeButton) {
    const initialTheme = readStoredTheme() === 'light' ? 'light' : 'dark';
    applyTheme(initialTheme);

    themeButton.addEventListener('click', () => {
        const nextTheme = document.body.classList.contains(darkTheme) ? 'light' : 'dark';
        applyTheme(nextTheme);
        storeTheme(nextTheme);
    });
}
