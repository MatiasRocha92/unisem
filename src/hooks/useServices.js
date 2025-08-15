import { useState, useCallback } from 'react';

const useServices = () => {
  const [expandedServices, setExpandedServices] = useState(new Set());

  const toggleService = useCallback((serviceId) => {
    setExpandedServices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  }, []);

  const isServiceExpanded = useCallback((serviceId) => {
    return expandedServices.has(serviceId);
  }, [expandedServices]);

  return {
    expandedServices,
    toggleService,
    isServiceExpanded
  };
};

export default useServices;



