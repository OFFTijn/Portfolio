/* toggle navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/* sticky navbar */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* sticky navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* scroll reveal */

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 100
});

ScrollReveal().reveal('.home-content, .about-skill', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });
//ScrollReveal().reveal('.home-content h1', { origin: 'left' });

/* Typed js */
const typed = new Typed('.multiple-text',{
    strings: ['Software Developer', 'UX-Designer', 'Student', 'Front-End Developer'],
    typeSpeed: 85,
    backSpeed: 85,
    backDelay: 1000,
    loop: true
});