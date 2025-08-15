import React from 'react';
import useServices from '../hooks/useServices';
import useSmoothScroll from '../hooks/useSmoothScroll';
import { serviciosPersonas, serviciosEmpresas, serviciosObrasSociales } from '../data/serviciosData.jsx';
import ambulanciaImage from '../assets/ambulancia01.png';

const ServiciosPage = () => {
  const { toggleService, isServiceExpanded } = useServices();
  useSmoothScroll(); // Hook para scroll suave

  const ServiceCard = ({ service }) => {
    const isExpanded = isServiceExpanded(service.id);
    
    return (
      <div className="transition-all duration-300 bg-white border shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-1 border-unisem-gray-light service-card">
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-unisem-orange">
              {service.icon}
            </div>
            <button 
              className="transition-colors service-toggle text-unisem-orange hover:text-unisem-blue-navy"
              onClick={() => toggleService(service.id)}
            >
              <svg 
                className={`w-6 h-6 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-unisem-blue-navy">{service.title}</h3>
          <div className={`service-content transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <p className="leading-relaxed text-gray-600">{service.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Sección Hero con imagen de fondo */}
      <section 
        id="hero" 
        className="relative flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${ambulanciaImage})` }}
      >
        {/* Capa oscura semitransparente para mejorar el contraste del texto */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Servicios de Salud de Excelencia</h1>
            <p className="max-w-3xl mx-auto mb-8 text-xl md:text-2xl">Nuestros servicios están diseñados para brindarte la mejor atención médica cuando más la necesitás</p>
            <a 
              href="#servicios" 
              className="px-8 py-3 text-lg font-bold text-white transition duration-300 rounded-full bg-unisem-orange hover:bg-orange-600"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          
          {/* Sección PERSONAS */}
          <div id="personas" className="mb-32 scroll-mt-32" data-aos="fade-up">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-unisem-blue-navy">PERSONAS</h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-600">Encontrá la cobertura médica pensada para vos y tu familia con planes a tu medida.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {serviciosPersonas.map((service, index) => (
                <div key={service.id} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>

          {/* Sección EMPRESAS */}
          <div id="empresas" className="mb-32 scroll-mt-32" data-aos="fade-up">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-unisem-blue-navy">EMPRESAS Y COMERCIOS</h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-600">Tenemos un plan a la medida de tu empresa o comercio.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {serviciosEmpresas.map((service, index) => (
                <div key={service.id} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>

          {/* Sección OBRAS SOCIALES */}
          <div id="obras-sociales" className="mb-32 scroll-mt-32" data-aos="fade-up">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-unisem-blue-navy">OBRAS SOCIALES Y PREPAGAS</h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-600">Contamos con beneficios exclusivos para entidades de salud.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {serviciosObrasSociales.map((service, index) => (
                <div key={service.id} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center" data-aos="fade-up">
              <p className="max-w-4xl mx-auto text-lg text-gray-600">
                Nuestro conocimiento y experiencia en el sector nos permite brindar una cobertura a la medida de cada organización.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ServiciosPage;
