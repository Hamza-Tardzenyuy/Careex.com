const navMenu = document.querySelector(".primary-navigation");
const  menuToggle = document.querySelector(".mobile-nav");

menuToggle.addEventListener('click', () => {
    const visibility = navMenu.getAttribute('data-visible');

    if (visibility === "false") {
        navMenu.setAttribute('data-visible', true);
        menuToggle.setAttribute('aria-expanded', true);
    } else if (visibility === 'true') {
        navMenu.setAttribute('data-visible', false);
        menuToggle.setAttribute('aria-expanded', false);
    }


})

var toggleButtons = document.querySelectorAll('.accordion-toggle');

toggleButtons.forEach(function(button)
{
    button.addEventListener('click',
    function() {
        var accordion =
        this.parentNode;

        accordion.classList.toggle('open');
    });
});

let testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial= 0;

function showTestimonial(n) {
    testimonials[currentTestimonial].
    classList.remove('active');
    currentTestimonial = (n
+ testimonials.length) %
testimonials.length;
testimonials[currentTestimonial].
classList.add('active');
}

document.querySelector('.left').
addEventListener('click', () =>
{

    showTestimonial(currentTestimonial
- 1);
});

document.querySelector('.right')
.addEventListener('click', () =>
{

    showTestimonial(currentTestimonial
        + 1);
})

showTestimonial(currentTestimonial);
testimonials[currentTestimonial].classList.add('active');