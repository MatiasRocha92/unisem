import { useCallback } from 'react';

const useSmoothScroll = (headerHeight = 0) => {
  const handleSmoothScroll = useCallback((e) => {
    e.preventDefault();
    
    const targetId = e.currentTarget.getAttribute('href');
    
    // Verificar que el targetId sea válido (no solo '#')
    if (targetId && targetId !== '#') {
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [headerHeight]);

  return handleSmoothScroll;
};

export default useSmoothScroll;




