import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAos = () => {
  useEffect(() => {
    // Inicializar AOS con configuración mejorada
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false, // Cambiado a false para que las animaciones se repitan
      offset: 100,
      delay: 0,
      anchorPlacement: 'top-bottom'
    });

    // Verificar que AOS esté funcionando
    console.log('AOS inicializado:', typeof AOS !== 'undefined');
    
    // Forzar actualización de AOS después de un breve delay
    const timeoutId = setTimeout(() => {
      AOS.refresh();
      console.log('AOS refrescado');
    }, 1000);

    // Función de limpieza
    return () => {
      clearTimeout(timeoutId);
      // AOS no tiene un método de destrucción, pero podemos limpiar el timeout
    };
  }, []); // Se ejecuta solo una vez al montar el componente
};

export default useAos;



