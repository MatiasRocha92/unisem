import React from 'react';
import ambulanciaImage from '../assets/ambulancia.png';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Imagen de fondo con parallax CSS puro */}
      <div 
        className="absolute inset-0 parallax-css-pure"
        style={{ 
          backgroundImage: `url(${ambulanciaImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Capa oscura semitransparente para mejorar el contraste del texto */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido del Hero */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="text-center text-white p-4" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Tu Salud, Nuestra Prioridad
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Ofrecemos planes de cobertura médica diseñados para protegerte a vos y a tu familia en todo momento.
          </p>
          <a 
            href="#planes" 
            className="bg-unisem-orange text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105"
          >
            Ver Planes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

