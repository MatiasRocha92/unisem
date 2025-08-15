// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Inicializar la librería AOS con configuración mejorada
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: false, // Cambiado a false para que las animaciones se repitan
        offset: 100,
        delay: 0,
        anchorPlacement: 'top-bottom'
    });

    // Funcionalidad del header simplificado - solo botón de emergencia

    // Funcionalidad de scroll con offset
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const header = document.getElementById('header');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Verificar que el targetId sea válido (no solo '#')
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement && header) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
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

    // Verificar que AOS esté funcionando
    console.log('AOS inicializado:', typeof AOS !== 'undefined');
    
    // Forzar actualización de AOS después de un breve delay
    setTimeout(() => {
        AOS.refresh();
        console.log('AOS refrescado');
    }, 1000);

});
