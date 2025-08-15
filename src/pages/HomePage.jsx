import React from 'react';
import Hero from '../components/Hero'; // Importar el nuevo componente Hero
import Planes from '../components/Planes';
import DetallePlanes from '../components/DetallePlanes';
import Noticias from '../components/Noticias';

// El componente Hero ahora se importa desde ../components/Hero

// El componente Planes ahora se importa desde ../components/Planes

const HomePage = () => {
  return (
    <>
      <Hero />
      <Planes />
      <DetallePlanes />
      <Noticias />
    </>
  );
};

export default HomePage;
