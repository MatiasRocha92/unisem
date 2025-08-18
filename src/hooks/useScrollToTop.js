import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Hacer scroll al inicio de la página cuando cambia la ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Usar 'instant' para que sea inmediato
    });
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta
};

export default useScrollToTop;
