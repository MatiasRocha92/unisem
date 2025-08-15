import React from 'react';
import { planesTarjeta } from '../data/planesData';

const Planes = () => {
  return (
    <section id="planes" className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container relative z-10 px-4 mx-auto">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-4xl font-bold text-white">Nuestros Planes</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">Pensados para todas las edades, con cobertura integral y atención personalizada</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4 justify-items-center max-w-7xl">
          {planesTarjeta.map((plan, index) => (
            <div 
              key={plan.id}
              className="group relative w-full max-w-[320px] h-[450px] cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Imagen Superior - Se desliza hacia arriba y se oculta en hover */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={plan.imagen} 
                  alt={`Imagen del plan ${plan.nombre}`}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:-translate-y-full"
                />
                {/* Precio en la esquina superior derecha */}
                <div className="absolute z-20 px-3 py-1 rounded-lg top-4 right-4 bg-white/90 backdrop-blur-sm">
                  <p className="text-lg font-bold text-gray-800">{plan.precio}</p>
                  <p className="text-xs text-gray-600">por mes</p>
                </div>
              </div>

              {/* Contenido Inferior */}
              <div className="relative p-6 bg-white">
                {/* Estado Normal - Se oculta en hover */}
                <div className="transition-all duration-500 group-hover:opacity-0 group-hover:transform group-hover:translate-y-2">
                  <h3 
                    className="mb-2 text-xl font-bold text-gray-800 transition-colors cursor-pointer hover:text-blue-600"
                    onClick={() => {
                      const element = document.getElementById(`detalle-${plan.id}`);
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }}
                  >
                    {plan.nombre}
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">{plan.edad}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 mr-2 bg-blue-500 rounded-full"></span>
                    <span>4.5 Excelente</span>
                  </div>
                </div>
              </div>

              {/* Estado Hover - Descripción y Botón ocupan toda la tarjeta */}
              <div className="absolute inset-0 flex flex-col justify-start p-6 transition-all duration-500 bg-white opacity-0 group-hover:opacity-100">
                <div className="mb-4">
                  <h3 
                    className="mb-3 text-xl font-bold text-gray-800 transition-colors cursor-pointer hover:text-blue-600"
                    onClick={() => {
                      const element = document.getElementById(`detalle-${plan.id}`);
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }}
                  >
                    {plan.nombre}
                  </h3>
                  <p className="mb-4 text-sm text-gray-800">{plan.descripcion}</p>
                  <ul className="mb-6 space-y-2 text-sm">
                    {plan.caracteristicas.map((caracteristica, idx) => (
                      <li key={idx} className="flex items-center text-gray-800">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full mt-auto">
                  <button 
                    onClick={() => {
                      const element = document.getElementById(`detalle-${plan.id}`);
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }}
                    className="w-full button2"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planes;
