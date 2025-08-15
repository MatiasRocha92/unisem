// Funcionalidad para expandir/contraer servicios
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
        easing: 'ease-out-cubic'
    });
    const serviceToggles = document.querySelectorAll('.service-toggle');
    
    serviceToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const serviceCard = this.closest('.service-card');
            const serviceContent = serviceCard.querySelector('.service-content');
            const icon = this.querySelector('svg');
            
            // Toggle del contenido con animación suave
            if (serviceContent.classList.contains('hidden')) {
                serviceContent.classList.remove('hidden');
                serviceContent.classList.add('show');
                icon.style.transform = 'rotate(180deg)';
            } else {
                serviceContent.classList.remove('show');
                setTimeout(() => {
                    serviceContent.classList.add('hidden');
                }, 300);
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Funcionalidad del header simplificado - solo botón de emergencia

    // Efecto de scroll suave para enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Verificar que el targetId sea válido (no solo '#')
            if (targetId && targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });



    // Animación de entrada para las tarjetas de servicios
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animación a todas las tarjetas de servicios
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Funcionalidad para el botón de emergencia
    const emergencyButtons = document.querySelectorAll('.emergency-button');
    emergencyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aquí puedes agregar la funcionalidad de emergencia
            // Por ejemplo, hacer una llamada telefónica o mostrar un modal
            if (confirm('¿Deseas llamar a emergencias?\nTeléfono: (0342) 4552000')) {
                window.location.href = 'tel:03424552000';
            }
        });
    });
});
