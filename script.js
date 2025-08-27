tailwind.config = {
    theme: {
        extend: {
            colors: {
                'ocean': '#0891b2',
                'pearl': '#f8fafc',
                'ocean-light': '#67e8f9',
                'mist': '#e0f2fe',
                'navy': '#1e293b'
            }
        }
    }
}

AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        backToTopBtn.classList.add('opacity-0', 'invisible');
        backToTopBtn.classList.remove('opacity-100', 'visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-white/98');
        nav.classList.remove('bg-white/95');
    } else {
        nav.classList.remove('bg-white/98');
        nav.classList.add('bg-white/95');
    }
});

document.querySelectorAll('.submenu-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const submenu = document.getElementById(targetId);
        const icon = document.getElementById("icon-" + targetId);

        submenu.classList.toggle("hidden");
        icon.classList.toggle("rotate-180");
    });
});