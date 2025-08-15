import React, { useState } from 'react';
import useModal from '../hooks/useModal';
import mercadoPagoLogo from '../assets/logos/mercado-pago-pequeño.png';

const CheckoutPage = () => {
  // Estados para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    fechaNacimiento: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    terminos: false
  });

  // Estados para el modal de pago
  const { isOpen: showModal, openModal, closeModal } = useModal();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [showCardForm, setShowCardForm] = useState(false);
  const [showCardButton, setShowCardButton] = useState(false);
  const [showMercadoPagoButton, setShowMercadoPagoButton] = useState(false);

  // Estados para el formulario de tarjeta
  const [cardData, setCardData] = useState({
    numeroTarjeta: '',
    titular: '',
    vencimiento: '',
    cvv: ''
  });

  // Manejar cambios en el formulario principal
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Manejar cambios en el formulario de tarjeta
  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Formatear número de tarjeta
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  // Formatear fecha de vencimiento
  const formatExpiryDate = (value) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  // Abrir modal de pago
  const handleOpenModal = () => {
    openModal();
    resetPaymentSelection();
  };

  // Cerrar modal
  const handleCloseModal = () => {
    closeModal();
    resetPaymentSelection();
  };

  // Resetear selección de método de pago
  const resetPaymentSelection = () => {
    setSelectedPaymentMethod(null);
    setShowCardForm(false);
    setShowCardButton(false);
    setShowMercadoPagoButton(false);
  };

  // Seleccionar método de pago
  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    setShowCardForm(method === 'tarjeta');
    setShowCardButton(method === 'tarjeta');
    setShowMercadoPagoButton(method === 'mercadopago');
  };

  // Manejar pago con tarjeta
  const handleCardPayment = () => {
    if (!cardData.numeroTarjeta || !cardData.titular || !cardData.vencimiento || !cardData.cvv) {
      alert('Por favor completa todos los datos de la tarjeta');
      return;
    }
    alert('Procesando pago con tarjeta...');
    handleCloseModal();
  };

  // Manejar pago con MercadoPago
  const handleMercadoPagoPayment = () => {
    alert('Redirigiendo a MercadoPago...');
    handleCloseModal();
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpenModal();
  };

  return (
    <>
      {/* Contenido Principal */}
      <div className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-unisem-blue-navy mb-6">Afiliación a UNISEM</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Completa tus datos para comenzar a disfrutar de nuestros servicios médicos de emergencia 24/7</p>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Sección: Datos Personales */}
              <div>
                <h2 className="text-2xl font-bold text-unisem-blue-navy mb-8 flex items-center">
                  <span className="w-10 h-10 bg-unisem-orange rounded-full flex items-center justify-center text-white font-bold mr-4">1</span>
                  Datos Personales
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold text-unisem-blue-navy mb-3">Nombre *</label>
                    <input 
                      type="text" 
                      id="nombre" 
                      name="nombre" 
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-unisem-orange focus:border-unisem-orange transition-all duration-300 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="apellido" className="block text-sm font-semibold text-unisem-blue-navy mb-3">Apellido *</label>
                    <input 
                      type="text" 
                      id="apellido" 
                      name="apellido" 
                      value={formData.apellido}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-unisem-orange focus:border-unisem-orange transition-all duration-300 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="dni" className="block text-sm font-semibold text-unisem-blue-navy mb-3">DNI *</label>
                    <input 
                      type="text" 
                      id="dni" 
                      name="dni" 
                      value={formData.dni}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-unisem-orange focus:border-unisem-orange transition-all duration-300 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="fechaNacimiento" className="block text-sm font-semibold text-unisem-blue-navy mb-3">Fecha de Nacimiento *</label>
                    <input 
                      type="date" 
                      id="fechaNacimiento" 
                      name="fechaNacimiento" 
                      value={formData.fechaNacimiento}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-unisem-orange focus:border-unisem-orange transition-all duration-300 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-unisem-blue-navy mb-3">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-unisem-orange focus:border-unisem-orange transition-all duration-300 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold text-unisem-blue-navy mb-3">Teléfono *</label>
                    <input 
                      type="tel" 
                      id="telefono" 
                      name="telefono" 
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-unisem-orange focus:border-unisem-orange transition-all duration-300 text-lg"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="direccion" className="block text-sm font-semibold text-unisem-blue-navy mb-3">Dirección *</label>
                    <input 
                      type="text" 
                      id="direccion" 
                      name="direccion" 
                      value={formData.direccion}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-unisem-orange focus:border-unisem-orange transition-all duration-300 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="ciudad" className="block text-sm font-semibold text-unisem-blue-navy mb-3">Ciudad *</label>
                    <input 
                      type="text" 
                      id="ciudad" 
                      name="ciudad" 
                      value={formData.ciudad}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-unisem-orange focus:border-unisem-orange transition-all duration-300 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="codigoPostal" className="block text-sm font-semibold text-unisem-blue-navy mb-3">Código Postal *</label>
                    <input 
                      type="text" 
                      id="codigoPostal" 
                      name="codigoPostal" 
                      value={formData.codigoPostal}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-unisem-orange focus:border-unisem-orange transition-all duration-300 text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Términos y Condiciones */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <label className="flex items-start cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="terminos"
                    checked={formData.terminos}
                    onChange={handleInputChange}
                    required 
                    className="mt-1 mr-4 w-5 h-5 text-unisem-orange focus:ring-unisem-orange border-gray-300 rounded"
                  />
                  <span className="text-gray-700">
                    Acepto los <a href="#" className="text-unisem-orange hover:underline font-medium">términos y condiciones</a> y la 
                    <a href="#" className="text-unisem-orange hover:underline font-medium">política de privacidad</a> de UNISEM S.A. *
                  </span>
                </label>
              </div>

              {/* Botón de Pago */}
              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-unisem-orange text-white px-16 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 shadow-lg hover:bg-orange-600 hover:shadow-xl hover:-translate-y-1"
                >
                  Proceder al Pago
                </button>
              </div>
            </form>
          </div>

          {/* Información Adicional */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              ¿Tienes dudas? Llámanos al <span className="font-semibold text-unisem-blue-navy">(0342) 4553500</span>
            </p>
            <p className="text-sm text-gray-500">
              Horario de atención: Lunes a viernes de 8:00 a 17:00 hs
            </p>
          </div>
        </div>
      </div>

      {/* Modal de Pago */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-[9999] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 max-h-[calc(90vh-2rem)] overflow-y-auto custom-scrollbar">
              {/* Header del Modal */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100 sticky top-0 bg-white z-10">
                <h3 className="text-2xl font-bold text-unisem-blue-navy">Método de Pago</h3>
                <button 
                  onClick={handleCloseModal}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Opciones de Pago */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {/* Opción Tarjeta */}
                <label className="relative cursor-pointer group">
                  <input 
                    type="radio" 
                    name="metodo-pago" 
                    value="tarjeta" 
                    checked={selectedPaymentMethod === 'tarjeta'}
                    onChange={() => handlePaymentMethodSelect('tarjeta')}
                    className="sr-only"
                  />
                  <div className={`h-full border-2 rounded-xl p-4 transition-all duration-300 bg-white group-hover:shadow-lg ${
                    selectedPaymentMethod === 'tarjeta' 
                      ? 'border-unisem-orange bg-orange-50 shadow-lg' 
                      : 'border-gray-200 hover:border-unisem-orange/50'
                  }`}>
                    <div className="text-center">
                      {/* Radio Button */}
                      <div className={`w-6 h-6 border-2 rounded-full mx-auto mb-3 flex items-center justify-center transition-all duration-300 ${
                        selectedPaymentMethod === 'tarjeta' 
                          ? 'border-unisem-orange bg-unisem-orange' 
                          : 'border-gray-300 group-hover:border-unisem-orange'
                      }`}>
                        {selectedPaymentMethod === 'tarjeta' && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      
                      {/* Icono de Tarjeta */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      
                      {/* Texto */}
                      <h4 className="text-base font-bold text-unisem-blue-navy mb-1">Tarjeta de Crédito/Débito</h4>
                      <p className="text-xs text-gray-600">Paga de forma segura con tu tarjeta</p>
                    </div>
                  </div>
                </label>
                
                {/* Opción MercadoPago */}
                <label className="relative cursor-pointer group">
                  <input 
                    type="radio" 
                    name="metodo-pago" 
                    value="mercadopago" 
                    checked={selectedPaymentMethod === 'mercadopago'}
                    onChange={() => handlePaymentMethodSelect('mercadopago')}
                    className="sr-only"
                  />
                  <div className={`h-full border-2 rounded-xl p-4 transition-all duration-300 bg-white group-hover:shadow-lg ${
                    selectedPaymentMethod === 'mercadopago' 
                      ? 'border-unisem-orange bg-orange-50 shadow-lg' 
                      : 'border-gray-200 hover:border-unisem-orange/50'
                  }`}>
                    <div className="text-center">
                      {/* Radio Button */}
                      <div className={`w-6 h-6 border-2 rounded-full mx-auto mb-3 flex items-center justify-center transition-all duration-300 ${
                        selectedPaymentMethod === 'mercadopago' 
                          ? 'border-unisem-orange bg-unisem-orange' 
                          : 'border-gray-300 group-hover:border-unisem-orange'
                      }`}>
                        {selectedPaymentMethod === 'mercadopago' && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      
                      {/* Logo MercadoPago */}
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 border border-gray-200">
                        <img src={mercadoPagoLogo} alt="MercadoPago" className="w-8 h-8 object-contain" />
                      </div>
                      
                      {/* Texto */}
                      <h4 className="text-base font-bold text-unisem-blue-navy mb-1">MercadoPago</h4>
                      <p className="text-xs text-gray-600">Paga con tu cuenta de MercadoPago</p>
                    </div>
                  </div>
                </label>
              </div>
              
              {/* Formulario de Tarjeta */}
              {showCardForm && (
                <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h4 className="text-lg font-bold text-unisem-blue-navy mb-4 flex items-center">
                    <svg className="w-5 h-5 text-unisem-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Datos de la Tarjeta
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-unisem-blue-navy mb-2">Número de Tarjeta</label>
                      <input 
                        type="text" 
                        name="numeroTarjeta"
                        value={cardData.numeroTarjeta}
                        onChange={(e) => setCardData(prev => ({ ...prev, numeroTarjeta: formatCardNumber(e.target.value) }))}
                        placeholder="1234 5678 9012 3456" 
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-unisem-orange focus:border-unisem-orange transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-unisem-blue-navy mb-2">Titular</label>
                      <input 
                        type="text" 
                        name="titular"
                        value={cardData.titular}
                        onChange={handleCardInputChange}
                        placeholder="NOMBRE APELLIDO" 
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-unisem-orange focus:border-unisem-orange transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-unisem-blue-navy mb-2">Vencimiento</label>
                      <input 
                        type="text" 
                        name="vencimiento"
                        value={cardData.vencimiento}
                        onChange={(e) => setCardData(prev => ({ ...prev, vencimiento: formatExpiryDate(e.target.value) }))}
                        placeholder="MM/AA" 
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-unisem-orange focus:border-unisem-orange transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-unisem-blue-navy mb-2">CVV</label>
                      <input 
                        type="text" 
                        name="cvv"
                        value={cardData.cvv}
                        onChange={handleCardInputChange}
                        placeholder="123" 
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-unisem-orange focus:border-unisem-orange transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Botones de Acción */}
              <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4 border-t border-gray-100">
                <button 
                  onClick={handleCloseModal}
                  className="px-6 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                >
                  Cancelar
                </button>
                
                {showCardButton && (
                  <button 
                    onClick={handleCardPayment}
                    className="px-6 py-2 bg-gradient-to-r from-unisem-orange to-orange-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      Pagar con Tarjeta
                    </span>
                  </button>
                )}
                
                {showMercadoPagoButton && (
                  <button 
                    onClick={handleMercadoPagoPayment}
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center">
                      <img src={mercadoPagoLogo} alt="MercadoPago" className="w-4 h-4 mr-2" />
                      Pagar con MercadoPago
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
