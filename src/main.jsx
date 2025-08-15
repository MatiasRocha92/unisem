import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Importar estilos de Tailwind CSS
import './css/output.css';

// Crear el elemento raíz
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
