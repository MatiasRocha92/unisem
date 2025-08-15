import { useState, useCallback } from 'react';

const useEmergencyButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleConfirm = useCallback(() => {
    window.location.href = 'tel:03424552000';
    closeModal();
  }, [closeModal]);

  return {
    isModalOpen,
    openModal,
    closeModal,
    handleConfirm,
  };
};

export default useEmergencyButton;

