import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    // Función para scroll suave a elementos con hash
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Esperar un poco para que la página se cargue completamente
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    // Manejar scroll al cargar la página
    handleHashScroll();

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




