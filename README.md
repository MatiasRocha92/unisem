# UNISEM S.A. - Aplicación React

## Descripción

Rediseño forntend de pagina https://www.unisem.com.ar/

Demo: https://unisem.vercel.app/

Aplicación web moderna de React para UNISEM S.A., empresa de servicios médicos de emergencia. Esta aplicación migra el sitio web original (HTML, CSS, JS) a una arquitectura moderna basada en componentes React.

## Características

- **Arquitectura de Componentes**: Componentes reutilizables y modulares
- **Enrutamiento**: Navegación SPA con React Router DOM
- **Custom Hooks**: Lógica reutilizable para funcionalidades específicas
- **Animaciones**: Integración con AOS (Animate On Scroll)
- **Estilos**: Tailwind CSS con paleta de colores personalizada
- **Responsive**: Diseño adaptativo para todos los dispositivos

## Tecnologías

- **React 19.1.1**: Framework principal
- **React Router DOM 7.8.0**: Enrutamiento del lado del cliente
- **Vite 5.2.0**: Bundler y servidor de desarrollo
- **Tailwind CSS 3.4.17**: Framework de estilos
- **AOS 2.3.4**: Animaciones de scroll

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx      # Header con logo y botón de emergencia
│   ├── Footer.jsx      # Footer con navegación
│   └── Layout.jsx      # Layout principal
├── hooks/              # Custom hooks
│   ├── useAos.js       # Inicialización de AOS
│   ├── useSmoothScroll.js # Scroll suave
│   ├── useEmergencyButton.js # Botón de emergencia
│   ├── useServices.js  # Lógica de servicios
│   ├── useModal.js     # Manejo de modales
│   └── index.js        # Exportaciones centralizadas
├── pages/              # Páginas principales
│   ├── HomePage.jsx    # Página principal
│   ├── ServiciosPage.jsx # Página de servicios
│   └── CheckoutPage.jsx # Página de afiliación
├── assets/             # Recursos estáticos
├── App.js              # Componente principal con rutas
└── main.jsx           # Punto de entrada
```

## Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone [url-del-repositorio]
   cd unisem-react
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Compilar Tailwind CSS**:
   ```bash
   npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css
   ```

4. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**:
   ```
   http://localhost:3000
   ```

## Scripts Disponibles

- `npm run dev`: Servidor de desarrollo
- `npm run build`: Construir para producción
- `npm run preview`: Vista previa de la build
- `npm run lint`: Linting del código

## Rutas

- `/`: Página principal (HomePage)
- `/servicios`: Página de servicios (ServiciosPage)
- `/checkout`: Página de afiliación (CheckoutPage)

## Custom Hooks

### useAos
Inicializa las animaciones de AOS para toda la aplicación.

### useSmoothScroll
Maneja el scroll suave con offset para enlaces internos.

### useEmergencyButton
Gestiona la funcionalidad del botón de emergencia.

### useServices
Maneja el estado de expansión/contracción de servicios.

### useModal
Gestiona el estado de modales reutilizables.

## Componentes

### Layout
Componente wrapper que incluye Header y Footer en todas las páginas.

### Header
Header simplificado con logo y botón de emergencia.

### Footer
Footer con navegación y información de contacto.

## Estilos

La aplicación utiliza Tailwind CSS con una paleta de colores personalizada:

- `unisem-orange`: #F38128
- `unisem-blue-navy`: #045494
- `unisem-blue-dark`: #0454A3
- `unisem-gray-light`: #E1D7D2
- `unisem-blue-sky`: #79A4CC
- `unisem-blue-medium`: #558BBB

## Desarrollo

### Agregar Nuevas Páginas

1. Crear componente en `src/pages/`
2. Agregar ruta en `src/App.js`
3. Agregar enlace en `src/components/Footer.jsx`

### Agregar Nuevos Hooks

1. Crear hook en `src/hooks/`
2. Exportar en `src/hooks/index.js`
3. Importar donde sea necesario

### Agregar Nuevos Componentes

1. Crear componente en `src/components/`
2. Importar en las páginas correspondientes
3. Documentar props y funcionalidad

## Producción

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`.

## Contribución

1. Fork el proyecto
2. Crear rama para feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## Licencia

Este proyecto es propiedad de UNISEM S.A.
