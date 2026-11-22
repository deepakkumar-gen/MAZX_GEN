
/* ==================================
   MAZX_GEN — INTERACTION SYSTEM
================================== */

// 1. Smooth page navigation

document.querySelectorAll('nav a, .hero-buttons a, .nav-btn')
    .forEach(link => {

        link.addEventListener('click', function(event) {

            const target = document.querySelector(
                this.getAttribute('href')
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }

        });

    });


// 2. Navbar scroll effect

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {

    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

});


// 3. Reveal sections on scroll

const sections = document.querySelectorAll(
    '.about, .projects, .contact'
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// 4. Dynamic footer year

const footerText = document.querySelector('footer p');

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} MAZX_GEN. Built with curiosity.`;

}


// 5. Console welcome message

console.log(
    '%cMAZX_GEN',
    'color: #42D9FF; font-size: 28px; font-weight: bold;'
);

console.log(
    'Learn. Build. Evolve. | Development initialized.'
);
