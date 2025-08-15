import React from "react";
import { Link } from "react-router-dom";
import { planesDetalle } from "../data/planesData.js";

const DetallePlanes = () => {
  return (
    <div className="py-20">
      {planesDetalle.map((plan) => (
        <section
          key={plan.id}
          id={`detalle-${plan.id}`}
          className={`py-20 ${plan.bgColor} relative overflow-hidden`}
        >
          {/* Efecto de fondo decorativo */}
          <div className="absolute inset-0 opacity-10">
            <div
              className={`absolute top-10 left-10 w-32 h-32 ${plan.primaryColor} rounded-full blur-3xl`}
            ></div>
            <div
              className={`absolute bottom-10 right-10 w-40 h-40 ${plan.accentColor} rounded-full blur-3xl`}
            ></div>
          </div>

          <div className="container relative z-10 px-4 mx-auto">
            {/* Header del plan */}
            <div className="mb-16 text-center" data-aos="fade-up">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 ${plan.primaryColor} rounded-2xl mb-6 shadow-lg`}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
                </svg>
              </div>
              <h2 className={`text-5xl font-bold ${plan.textColor} mb-4`}>
                {plan.nombre}
              </h2>
              <p className="max-w-2xl mx-auto mb-6 text-xl text-gray-600">
                {plan.descripcion}
              </p>
              <div
                className={`inline-flex items-center ${plan.primaryColor} text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg`}
              >
                <span className="mr-2 text-3xl font-bold">{plan.precio}</span>
                <span className="text-sm opacity-90">por mes</span>
              </div>
            </div>

            {/* Características en grid */}
            <div className="grid gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
              {plan.caracteristicas.map((caracteristica, idx) => (
                <div
                  key={idx}
                  className={`group ${plan.cardBg} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${plan.cardBorder}`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 ${plan.accentColor} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`text-lg font-bold ${plan.textColor} mb-3 group-hover:text-orange-600 transition-colors`}
                      >
                        {caracteristica.titulo}
                      </h4>
                      <p className="leading-relaxed text-gray-600">
                        {caracteristica.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center" data-aos="fade-up">
              <div
                className={`${plan.primaryColor} rounded-3xl p-8 shadow-2xl`}
              >
                <h3 className="mb-4 text-2xl font-bold text-white">
                  ¿Listo para proteger tu salud?
                </h3>
                <p className="max-w-2xl mx-auto mb-8 text-white opacity-90">
                  Únete a miles de familias que ya confían en UNISEM para su
                  protección médica
                </p>
                {/* Botón Neumórfico */}
                <div className="flex justify-center">
                  <Link to="/checkout" className="button2">
                    Afiliarme Ahora
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default DetallePlanes;
