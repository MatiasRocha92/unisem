import React from 'react';
import useServices from '../hooks/useServices';
import useSmoothScroll from '../hooks/useSmoothScroll';
import { serviciosPersonas, serviciosEmpresas, serviciosObrasSociales } from '../data/serviciosData.jsx';

const ServiciosPage = () => {
  const { toggleService, isServiceExpanded } = useServices();
  useSmoothScroll(); // Hook para scroll suave

  const ServiceCard = ({ service }) => {
    const isExpanded = isServiceExpanded(service.id);
    
    return (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-unisem-gray-light service-card">
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-unisem-orange rounded-lg flex items-center justify-center">
              {service.icon}
            </div>
            <button 
              className="service-toggle text-unisem-orange hover:text-unisem-blue-navy transition-colors"
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
          <h3 className="text-xl font-semibold text-unisem-blue-navy mb-2">{service.title}</h3>
          <div className={`service-content transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Sección Hero */}
      <section id="hero" className="relative pt-32 pb-20 bg-gradient-to-r from-unisem-blue-navy to-unisem-blue-dark">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Servicios de Salud de Excelencia</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Nuestros servicios están diseñados para brindarte la mejor atención médica cuando más la necesitás</p>
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Sección PERSONAS */}
          <div id="personas" className="mb-32 scroll-mt-32" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-unisem-blue-navy mb-4">PERSONAS</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Encontrá la cobertura médica pensada para vos y tu familia con planes a tu medida.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviciosPersonas.map((service, index) => (
                <div key={service.id} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>

          {/* Sección EMPRESAS */}
          <div id="empresas" className="mb-32 scroll-mt-32" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-unisem-blue-navy mb-4">EMPRESAS Y COMERCIOS</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Tenemos un plan a la medida de tu empresa o comercio.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviciosEmpresas.map((service, index) => (
                <div key={service.id} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>

          {/* Sección OBRAS SOCIALES */}
          <div id="obras-sociales" className="mb-32 scroll-mt-32" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-unisem-blue-navy mb-4">OBRAS SOCIALES Y PREPAGAS</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Contamos con beneficios exclusivos para entidades de salud.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviciosObrasSociales.map((service, index) => (
                <div key={service.id} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12" data-aos="fade-up">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
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
