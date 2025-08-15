import React from 'react';
import { noticiasData } from '../data/noticiasData';

const Noticias = () => {
  const handleNoticiaClick = (enlace) => {
    // Por ahora solo muestra un alert, pero aquí se puede implementar navegación
    alert(`Navegando a: ${enlace}`);
  };

  return (
    <section id="noticias" className="py-20 bg-unisem-blue-navy relative overflow-hidden">
      {/* Efectos de fondo decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-unisem-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-unisem-blue-sky rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-unisem-blue-dark rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header de la sección */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-white">
            Noticias y Novedades
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-white/80">
            Mantente informado sobre nuestros servicios, novedades en salud y consejos para tu bienestar
          </p>
        </div>

        {/* Grid de noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticiasData.map((noticia, index) => (
            <div
              key={noticia.id}
              className="group bg-white/95 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Imagen de la noticia */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay con categoría */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${noticia.categoriaColor} ${noticia.categoriaTextColor} shadow-lg`}>
                    <span className="mr-1">{noticia.icono}</span>
                    {noticia.categoria}
                  </span>
                </div>
              </div>

              {/* Contenido de la noticia */}
              <div className="p-6">
                {/* Fecha y autor */}
                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {noticia.fecha}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    {noticia.autor}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-unisem-blue-navy mb-3 group-hover:text-unisem-orange transition-colors duration-300 line-clamp-2">
                  {noticia.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {noticia.descripcion}
                </p>

                {/* Botón Leer Más */}
                <button
                  onClick={() => handleNoticiaClick(noticia.enlace)}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-unisem-blue-dark to-unisem-blue-navy text-white font-semibold rounded-xl hover:from-unisem-blue-navy hover:to-unisem-blue-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-xl"
                >
                  <span>Leer más</span>
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Todas las Noticias */}
        <div className="text-center mt-12" data-aos="fade-up">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-unisem-orange to-orange-500 text-white font-bold rounded-2xl hover:from-orange-500 hover:to-unisem-orange transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <span>Ver todas las noticias</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Noticias;
