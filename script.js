// Smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll reveal animations
ScrollReveal().reveal('.intro', { delay: 200 });
ScrollReveal().reveal('.section', { delay: 200, interval: 200 });
ScrollReveal().reveal('.skills', { delay: 200, interval: 100 });
ScrollReveal().reveal('.projects-gallery', { delay: 200 });

// Image carousel
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
