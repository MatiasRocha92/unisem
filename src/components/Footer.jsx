import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-unisem-blue-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">UNISEM S.A.</h3>
            <p className="text-gray-300">Protegemos la vida con servicios médicos de emergencia y atención domiciliaria 24/7.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/checkout" className="hover:text-white transition-colors">Afiliación</Link></li>
              <li><a href="/#planes" className="hover:text-white transition-colors">Planes</a></li>
              <li><a href="/#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Planes</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/#detalle-salud-activa" className="hover:text-white transition-colors">Salud Activa</a></li>
              <li><a href="/#detalle-vida-plena" className="hover:text-white transition-colors">Vida Plena 50+</a></li>
              <li><a href="/#detalle-bienestar-total" className="hover:text-white transition-colors">Bienestar Total</a></li>
              <li><a href="/#detalle-unisem-distancia" className="hover:text-white transition-colors">Unisem a Distancia</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Emergencias: (0342) 4552000</li>
              <li>Administración: (0342) 4553500</li>
              <li>9 de Julio 3601, Santa Fe</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Esto esta realizado por Matias Rocha.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





