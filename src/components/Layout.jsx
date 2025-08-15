import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EmergencyModal from './EmergencyModal'; // Importar el modal
import useEmergencyButton from '../hooks/useEmergencyButton'; // Importar el hook

const Layout = ({ children }) => {
  const { isModalOpen, openModal, closeModal, handleConfirm } = useEmergencyButton();

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Header onEmergencyClick={openModal} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <EmergencyModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default Layout;

