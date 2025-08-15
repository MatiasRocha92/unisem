import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import unisemLogo from '../assets/logos/unisem-logo.webp';

const Header = ({ onEmergencyClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isPlanesDropdownOpen, setIsPlanesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const planesDropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Cerrar dropdowns al hacer click fuera
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
      if (planesDropdownRef.current && !planesDropdownRef.current.contains(event.target)) {
        setIsPlanesDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Inicializar el estado
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { to: '/', text: 'Inicio' },
  ];

  const servicesDropdownItems = [
    { 
      to: '/servicios#personas', 
      text: 'PERSONAS', 
      description: 'Cobertura médica personal',
      icon: '👥',
      sectionId: 'personas'
    },
    { 
      to: '/servicios#empresas', 
      text: 'EMPRESAS', 
      description: 'Servicios corporativos',
      icon: '🏢',
      sectionId: 'empresas'
    },
    { 
      to: '/servicios#obras-sociales', 
      text: 'OBRAS SOCIALES', 
      description: 'Entidades de salud',
      icon: '🏥',
      sectionId: 'obras-sociales'
    }
  ];

  const planesDropdownItems = [
    { 
      to: '/#detalle-salud-activa', 
      text: 'SALUD ACTIVA', 
      description: 'De 0 a 50 años - $2.500',
      icon: '💙',
      sectionId: 'detalle-salud-activa'
    },
    { 
      to: '/#detalle-vida-plena', 
      text: 'VIDA PLENA 50+', 
      description: 'A partir de los 50 años - $3.200',
      icon: '💜',
      sectionId: 'detalle-vida-plena'
    },
    { 
      to: '/#detalle-bienestar-total', 
      text: 'BIENESTAR TOTAL', 
      description: 'Sin límite de edad - $5.800',
      icon: '🧡',
      sectionId: 'detalle-bienestar-total'
    },
    { 
      to: '/#detalle-unisem-distancia', 
      text: 'UNISEM A DISTANCIA', 
      description: 'Cobertura remota - $1.800',
      icon: '💙',
      sectionId: 'detalle-unisem-distancia'
    }
  ];

  // Clases mejoradas para los enlaces
  const linkClass = "px-4 py-2 text-sm font-bold tracking-wide rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group";
  const activeLinkClass = "text-unisem-orange font-extrabold";

  const handleServicesClick = (e) => {
    e.preventDefault();
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsPlanesDropdownOpen(false); // Cerrar el otro dropdown
  };

  const handlePlanesClick = (e) => {
    e.preventDefault();
    setIsPlanesDropdownOpen(!isPlanesDropdownOpen);
    setIsServicesDropdownOpen(false); // Cerrar el otro dropdown
  };

  const handleServicesDropdownItemClick = (item) => {
    setIsServicesDropdownOpen(false);
    
    // Navegar a la página de servicios
    navigate('/servicios');
    
    // Esperar a que la página se cargue y luego hacer scroll a la sección
    setTimeout(() => {
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  const handlePlanesDropdownItemClick = (item) => {
    setIsPlanesDropdownOpen(false);
    
    // Navegar a la página principal
    navigate('/');
    
    // Esperar a que la página se cargue y luego hacer scroll a la sección
    setTimeout(() => {
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  return (
    <header 
      id="header" 
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-black/20'}`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center group" aria-current="page">
              <img src={unisemLogo} alt="Logo UNISEM" className="w-auto h-12 transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </div>

          {/* Navegación Desktop - Controlada por JavaScript */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
              <nav className="flex items-center space-x-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : (scrolled ? 'text-gray-800 hover:text-unisem-orange hover:bg-gray-100' : 'text-white hover:text-unisem-orange hover:bg-white/10')}`}
                  >
                    <span className="relative z-10">{link.text}</span>
                    <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 bg-gradient-to-r from-unisem-orange/20 to-unisem-orange/10 group-hover:opacity-100"></div>
                  </NavLink>
                ))}

                {/* Enlace Servicios con Dropdown */}
                <div className="relative" ref={servicesDropdownRef}>
                  <button
                    onClick={handleServicesClick}
                    className={`${linkClass} ${scrolled ? 'text-gray-800 hover:text-unisem-orange hover:bg-gray-100' : 'text-white hover:text-unisem-orange hover:bg-white/10'} flex items-center space-x-1`}
                  >
                    <span className="relative z-10">Servicios</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 bg-gradient-to-r from-unisem-orange/20 to-unisem-orange/10 group-hover:opacity-100"></div>
                  </button>

                  {/* Dropdown Menu Servicios */}
                  <div className={`absolute top-full left-0 mt-2 w-80 transform transition-all duration-300 ease-out ${isServicesDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                    <div className="overflow-hidden border shadow-2xl bg-white/95 backdrop-blur-md rounded-2xl border-gray-200/50">
                      <div className="p-2">
                        {servicesDropdownItems.map((item, index) => (
                          <button
                            key={item.to}
                            onClick={() => handleServicesDropdownItemClick(item)}
                            className="group flex items-center w-full p-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-unisem-orange/10 hover:to-orange-500/5 hover:shadow-lg transform hover:scale-[1.02] hover:-translate-y-0.5"
                          >
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl text-white transition-all duration-300 shadow-lg bg-gradient-to-br from-unisem-orange to-orange-500 rounded-xl group-hover:shadow-xl group-hover:scale-110">
                              {item.icon}
                            </div>
                            <div className="flex-1 ml-4 text-left">
                              <h3 className="text-sm font-bold transition-colors duration-300 text-unisem-blue-navy group-hover:text-unisem-orange">
                                {item.text}
                              </h3>
                              <p className="mt-1 text-xs text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                                {item.description}
                              </p>
                            </div>
                            <div className="flex-shrink-0 transition-all duration-300 transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                              <svg className="w-4 h-4 text-unisem-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                              </svg>
                            </div>
                          </button>
                        ))}
                      </div>
                      
                      {/* Footer del dropdown */}
                      <div className="p-4 bg-gradient-to-r from-unisem-blue-dark to-unisem-blue-navy">
                        <Link
                          to="/servicios"
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className="flex items-center justify-center w-full px-4 py-2 text-sm font-bold text-white transition-all duration-300 transform bg-white/10 rounded-xl hover:bg-white/20 hover:scale-105"
                        >
                          <span>Ver todos los servicios</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enlace Planes con Dropdown */}
                <div className="relative" ref={planesDropdownRef}>
                  <button
                    onClick={handlePlanesClick}
                    className={`${linkClass} ${scrolled ? 'text-gray-800 hover:text-unisem-orange hover:bg-gray-100' : 'text-white hover:text-unisem-orange hover:bg-white/10'} flex items-center space-x-1`}
                  >
                    <span className="relative z-10">Planes</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${isPlanesDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 bg-gradient-to-r from-unisem-orange/20 to-unisem-orange/10 group-hover:opacity-100"></div>
                  </button>

                  {/* Dropdown Menu Planes */}
                  <div className={`absolute top-full left-0 mt-2 w-80 transform transition-all duration-300 ease-out ${isPlanesDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                    <div className="overflow-hidden border shadow-2xl bg-white/95 backdrop-blur-md rounded-2xl border-gray-200/50">
                      <div className="p-2">
                        {planesDropdownItems.map((item, index) => (
                          <button
                            key={item.to}
                            onClick={() => handlePlanesDropdownItemClick(item)}
                            className="group flex items-center w-full p-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-unisem-orange/10 hover:to-orange-500/5 hover:shadow-lg transform hover:scale-[1.02] hover:-translate-y-0.5"
                          >
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl text-white transition-all duration-300 shadow-lg bg-gradient-to-br from-unisem-orange to-orange-500 rounded-xl group-hover:shadow-xl group-hover:scale-110">
                              {item.icon}
                            </div>
                            <div className="flex-1 ml-4 text-left">
                              <h3 className="text-sm font-bold transition-colors duration-300 text-unisem-blue-navy group-hover:text-unisem-orange">
                                {item.text}
                              </h3>
                              <p className="mt-1 text-xs text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                                {item.description}
                              </p>
                            </div>
                            <div className="flex-shrink-0 transition-all duration-300 transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                              <svg className="w-4 h-4 text-unisem-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                              </svg>
                            </div>
                          </button>
                        ))}
                      </div>
                      
                      {/* Footer del dropdown */}
                      <div className="p-4 bg-gradient-to-r from-unisem-blue-dark to-unisem-blue-navy">
                        <Link
                          to="/"
                          onClick={() => setIsPlanesDropdownOpen(false)}
                          className="flex items-center justify-center w-full px-4 py-2 text-sm font-bold text-white transition-all duration-300 transform bg-white/10 rounded-xl hover:bg-white/20 hover:scale-105"
                        >
                          <span>Ver todos los planes</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

              <div className="flex items-center space-x-3">
                <button 
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-red-600 to-red-500 hover:shadow-xl hover:from-red-500 hover:to-red-400 rounded-xl hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-red-300"
                  onClick={onEmergencyClick}
                >
                  <span className="relative z-10">🚨 EMERGENCIA</span>
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-red-500 to-red-400 hover:opacity-100 rounded-xl"></div>
                </button>
                
                <Link 
                  to="/contacto" 
                  className={`px-6 py-3 text-sm font-bold transition-all duration-300 border-2 rounded-xl transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 ${scrolled ? 'text-unisem-blue-dark border-unisem-blue-dark hover:bg-unisem-blue-dark hover:text-white hover:shadow-lg focus:ring-unisem-blue-dark/30' : 'text-white border-white hover:bg-white hover:text-unisem-blue-dark hover:shadow-lg focus:ring-white/30'}`}
                >
                  📞 Contacto
                </Link>
              </div>
            </div>
          )}

          {/* Botón Hamburguesa - Solo en móviles */}
          {isMobile && (
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`z-50 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-white/10 ${scrolled ? 'text-gray-800' : 'text-white'}`}
                aria-label="Abrir menú"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Menú Mobile - Solo en móviles */}
      {isMobile && (
        <div className={`fixed top-0 left-0 w-full h-full bg-white/95 backdrop-blur-md pt-20 p-8 transition-all duration-500 ease-in-out z-[998] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `text-3xl font-bold tracking-wide transition-all duration-300 transform hover:scale-110 ${isActive ? 'text-unisem-orange' : 'text-gray-800 hover:text-unisem-orange'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
            
            {/* Servicios en móvil */}
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-unisem-blue-navy">Servicios</h3>
              <div className="space-y-4">
                {servicesDropdownItems.map((item) => (
                  <button
                    key={item.to}
                    onClick={() => {
                      setIsOpen(false);
                      handleServicesDropdownItemClick(item);
                    }}
                    className="block w-full px-6 py-3 text-lg font-semibold text-gray-700 transition-all duration-300 transform bg-white/50 rounded-xl hover:bg-unisem-orange hover:text-white hover:scale-105"
                  >
                    {item.icon} {item.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Planes en móvil */}
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-unisem-blue-navy">Planes</h3>
              <div className="space-y-4">
                {planesDropdownItems.map((item) => (
                  <button
                    key={item.to}
                    onClick={() => {
                      setIsOpen(false);
                      handlePlanesDropdownItemClick(item);
                    }}
                    className="block w-full px-6 py-3 text-lg font-semibold text-gray-700 transition-all duration-300 transform bg-white/50 rounded-xl hover:bg-unisem-orange hover:text-white hover:scale-105"
                  >
                    {item.icon} {item.text}
                  </button>
                ))}
              </div>
            </div>

            <Link 
              to="/contacto" 
              className="px-8 py-4 text-xl font-bold text-white transition-all duration-300 transform border-2 rounded-xl bg-gradient-to-r from-unisem-blue-dark to-unisem-blue-navy border-unisem-blue-dark hover:shadow-xl hover:scale-105" 
              onClick={() => setIsOpen(false)}
            >
              📞 Contacto
            </Link>
            <button 
              className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white transition-all duration-300 transform shadow-xl bg-gradient-to-r from-red-600 to-red-500 hover:shadow-2xl rounded-xl hover:scale-105"
              onClick={() => {
                onEmergencyClick();
                setIsOpen(false);
              }}
            >
              🚨 EMERGENCIA
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
