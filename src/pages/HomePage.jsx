import React from 'react';
import Hero from '../components/Hero'; // Importar el nuevo componente Hero
import Planes from '../components/Planes';
import DetallePlanes from '../components/DetallePlanes';

// El componente Hero ahora se importa desde ../components/Hero

// El componente Planes ahora se importa desde ../components/Planes

const Noticias = () => (
  <section id="noticias" className="py-20 bg-unisem-gray-light">
    <div className="container px-4 mx-auto">
      <div className="mb-16 text-center" data-aos="fade-up">
        <h2 className="mb-4 text-4xl font-bold text-unisem-blue-navy">Noticias y Novedades</h2>
        <p className="max-w-2xl mx-auto text-xl text-gray-600">Mantente informado sobre nuestros servicios y novedades en salud</p>
      </div>
      <div className="text-center">
        <p>Componente Noticias - Se implementará en el siguiente paso</p>
      </div>
    </div>
  </section>
);

const Contacto = () => (
  <section id="contacto" className="py-20 bg-white">
    <div className="container px-4 mx-auto">
      <div className="mb-16 text-center" data-aos="fade-up">
        <h2 className="mb-4 text-4xl font-bold text-unisem-blue-navy">Contacto</h2>
        <p className="max-w-2xl mx-auto text-xl text-gray-600">Estamos disponibles 24/7 para atenderte</p>
      </div>
      <div className="text-center">
        <p>Componente Contacto - Se implementará en el siguiente paso</p>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  return (
    <>
      <Hero />
      <Planes />
      <DetallePlanes />
      <Noticias />
      <Contacto />
    </>
  );
};

export default HomePage;
