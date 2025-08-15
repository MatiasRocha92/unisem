import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import unisemLogo from '../assets/logos/unisem-logo.webp';

const Header = ({ onEmergencyClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Inicializar el estado
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { to: '/', text: 'Inicio' },
    { to: '/servicios', text: 'Servicios' },
    { to: '/planes', text: 'Planes' },
  ];

  // Clases mejoradas para los enlaces
  const linkClass = "px-4 py-2 text-sm font-bold tracking-wide rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group";
  const activeLinkClass = "text-unisem-orange font-extrabold";

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
                    <div className="absolute inset-0 bg-gradient-to-r from-unisem-orange/20 to-unisem-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </NavLink>
                ))}
              </nav>

              <div className="flex items-center space-x-3">
                <button 
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-gradient-to-r from-red-600 to-red-500 shadow-lg hover:shadow-xl hover:from-red-500 hover:to-red-400 rounded-xl transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-red-300"
                  onClick={onEmergencyClick}
                >
                  <span className="relative z-10">🚨 EMERGENCIA</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
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
            <Link 
              to="/contacto" 
              className="px-8 py-4 text-xl font-bold text-white transition-all duration-300 border-2 rounded-xl bg-gradient-to-r from-unisem-blue-dark to-unisem-blue-navy border-unisem-blue-dark hover:shadow-xl transform hover:scale-105" 
              onClick={() => setIsOpen(false)}
            >
              📞 Contacto
            </Link>
            <button 
              className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-red-600 to-red-500 shadow-xl hover:shadow-2xl rounded-xl transform hover:scale-105"
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
