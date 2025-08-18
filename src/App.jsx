import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Importar el Layout

// Importar páginas
import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactoPage from './pages/ContactoPage'; // Importar la nueva página

// Importar hooks
import useAos from './hooks/useAos';

// Componente interno que usa useScrollToTop
import useScrollToTop from './hooks/useScrollToTop';

function AppContent() {
  // Hacer scroll al inicio de cada página
  useScrollToTop();

  return (
    <Layout> {/* Envolver las rutas con el Layout */}
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<HomePage />} />
        
        {/* Ruta de servicios */}
        <Route path="/servicios" element={<ServiciosPage />} />
        
        {/* Ruta de checkout/afiliación */}
        <Route path="/checkout" element={<CheckoutPage />} />
        
        {/* Ruta de contacto */}
        <Route path="/contacto" element={<ContactoPage />} />
        
        {/* Ruta de fallback - redirigir a home si no existe */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

function App() {
  // Inicializar AOS para toda la aplicación
  useAos();

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
