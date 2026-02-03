// Navegación suave al hacer clic en los enlaces
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
        // Remover clase active de todos los enlaces
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });

        this.classList.add('active');

        const targetElement = document.querySelector(this.getAttribute('href'));

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

        // Cambiar enlace activo al hacer scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 100) {
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
        profileImg.addEventListener('mouseenter', () => {
            profileImg.style.boxShadow = '0 0 50px var(--primary-color)';
            profileImg.style.filter = 'brightness(1.3)';
        });

        profileImg.addEventListener('mouseleave', () => {
            profileImg.style.boxShadow = '0 0 30px var(--primary-color)';
            profileImg.style.filter = 'brightness(1)';
        });

        // Validación del formulario de contacto
        const contactForm = document.getElementById('messageForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                if (name && email && subject && message) {
                    // Aquí iría la lógica para enviar el formulario
                    alert('¡Mensaje enviado con éxito! Te contactaré pronto.');
                    contactForm.reset();
                } else {
                    alert('Por favor, completa todos los campos.');
                }
            });
        }

        const btnTop = document.getElementById("btnTop");

        // Mostrar boton arriba
        window.addEventListener("scroll",() => {
            if (window.scrollY > 300) {
                btnTop.style.display = "flex";
            }    else {
                btnTop.style.display = "none";
            }
            }
        );

        // Subir suavemente
        btnTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        const menuToggle = document.getElementById("menuToggle");
        const navLinks = document.querySelector(".nav-links");

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
