import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    // Función para scroll suave a elementos con hash
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Esperar un poco más para que la página se cargue completamente
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 300); // Aumentado el tiempo para evitar conflictos
        }
      }
    };

    // Solo manejar scroll al hash si existe uno
    if (window.location.hash) {
      handleHashScroll();
    }

    // Manejar cambios en el hash
    const handleHashChange = () => {
      handleHashScroll();
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
};

export default useSmoothScroll;




