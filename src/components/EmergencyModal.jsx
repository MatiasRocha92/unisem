import React from 'react';

const EmergencyModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl p-8 max-w-sm w-full mx-4"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
      >
        <h2 className="text-2xl font-bold text-unisem-blue-navy mb-4">Confirmación de Llamada</h2>
        <p className="text-gray-700 mb-6">
          Estás a punto de llamar a nuestro servicio de emergencias. <br />
          Teléfono: <span className="font-semibold">(0342) 4552000</span>
        </p>
        <div className="flex justify-end space-x-4">
          <button 
            onClick={onClose}
            className="px-6 py-2 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancelar
          </button>
          <button 
            onClick={onConfirm}
            className="px-6 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Llamar ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyModal;

