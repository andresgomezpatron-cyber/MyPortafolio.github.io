const desplazamiento = 1;


// Navegación suave entre secciones
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });

        this.classList.add('active');

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (!targetElement) {
            return;
        }

        const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            desplazamiento;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        const navLinks = document.querySelector('.nav-links');

        if (navLinks) {
            navLinks.classList.remove('active');
        }

    });

});


// Cambiar enlace activo al hacer scroll
window.addEventListener('scroll', () => {

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - desplazamiento - 50) {
            currentSection = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }

    });

});


// Efectos de iluminación para la foto de perfil
const profileImg = document.querySelector('.profile-img');

if (profileImg) {

    profileImg.addEventListener('mouseenter', () => {

        profileImg.style.boxShadow =
            '0 0 50px var(--primary-color)';

        profileImg.style.filter =
            'brightness(1.3)';

    });

    profileImg.addEventListener('mouseleave', () => {

        profileImg.style.boxShadow =
            '0 0 30px var(--primary-color)';

        profileImg.style.filter =
            'brightness(1)';

    });

}


// Validación del formulario de contacto
const contactForm =
    document.getElementById('messageForm');

if (contactForm) {

    contactForm.addEventListener('submit', function(e) {

        const name =
            document.getElementById('name').value.trim();

        const email =
            document.getElementById('email').value.trim();

        const message =
            document.getElementById('message').value.trim();

        if (!name || !email || !message) {

            e.preventDefault();

            alert('Por favor, completa todos los campos.');

            return;
        }

        alert('¡Mensaje enviado con éxito! Te contactaré pronto.');

    });

}


// Botón para volver arriba
const btnTop =
    document.getElementById('btnTop');

if (btnTop) {

    window.addEventListener('scroll', () => {

        if (window.scrollY > 300) {

            btnTop.style.display = 'flex';

        } else {

            btnTop.style.display = 'none';

        }

    });

    btnTop.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}


// Menú hamburguesa
const menuToggle =
    document.getElementById('menuToggle');

const navLinks =
    document.querySelector('.nav-links');

if (menuToggle && navLinks) {

    menuToggle.addEventListener('click', () => {

        navLinks.classList.toggle('active');

    });

}
