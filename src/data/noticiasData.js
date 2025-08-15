// ========================================
// DATOS DE NOTICIAS - UNISEM
// ========================================
// 
// CÓMO CAMBIAR LAS IMÁGENES:
// 
// OPCIÓN 1 - URLs de Unsplash (actual):
// imagen: 'https://images.unsplash.com/photo-XXXXX?w=400&h=250&fit=crop',
// 
// OPCIÓN 2 - Imágenes locales:
// 1. Agregar imagen a: src/assets/noticias/
// 2. Importar arriba: import miImagen from '../assets/noticias/mi-imagen.jpg';
// 3. Usar: imagen: miImagen,
//
// ========================================

export const noticiasData = [
  {
    id: 'nuevo-servicio-kinesiologia',
    titulo: 'Nuevo Servicio: Kinesiología a Domicilio',
    descripcion: 'Lanzamos nuestro servicio de kinesiología domiciliaria para mayor comodidad de nuestros afiliados. Un profesional efectuará las prácticas de rehabilitación para trastornos en el aparato respiratorio, locomotor, circulatorio, o neurológico.',
    fecha: '15 Diciembre, 2024',
    autor: 'Equipo UNISEM',
    categoria: 'Nuevos Servicios',
    categoriaColor: 'bg-unisem-orange',
    categoriaTextColor: 'text-white',
    // CAMBIAR ESTA IMAGEN:
    imagen: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
    enlace: '/noticias/nuevo-servicio-kinesiologia',
    icono: '🏥'
  },
  {
    id: 'consejos-vida-saludable-2025',
    titulo: 'Consejos para una Vida Saludable en 2025',
    descripcion: 'Comienza el año con hábitos saludables. Te compartimos consejos prácticos para mantener tu bienestar físico y mental, incluyendo rutinas de ejercicio, alimentación balanceada y técnicas de relajación.',
    fecha: '10 Diciembre, 2024',
    autor: 'Dr. María González',
    categoria: 'Consejos de Salud',
    categoriaColor: 'bg-unisem-blue-sky',
    categoriaTextColor: 'text-unisem-blue-navy',
    // CAMBIAR ESTA IMAGEN:
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
    enlace: '/noticias/consejos-vida-saludable-2025',
    icono: '💪'
  },
  {
    id: 'expansion-cobertura-localidades',
    titulo: 'UNISEM Expande Cobertura a Nuevas Localidades',
    descripcion: 'Nos complace anunciar la expansión de nuestros servicios a nuevas localidades de la provincia. Ahora más familias pueden acceder a nuestra cobertura médica de calidad con atención las 24 horas.',
    fecha: '05 Diciembre, 2024',
    autor: 'Dirección UNISEM',
    categoria: 'Logros y Reconocimientos',
    categoriaColor: 'bg-unisem-blue-dark',
    categoriaTextColor: 'text-white',
    // CAMBIAR ESTA IMAGEN:
    imagen: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
    enlace: '/noticias/expansion-cobertura-localidades',
    icono: '🏆'
  }
];

export const categoriasNoticias = [
  {
    id: 'nuevos-servicios',
    nombre: 'Nuevos Servicios',
    color: 'bg-unisem-orange',
    textColor: 'text-white',
    icono: '🏥'
  },
  {
    id: 'consejos-salud',
    nombre: 'Consejos de Salud',
    color: 'bg-unisem-blue-sky',
    textColor: 'text-unisem-blue-navy',
    icono: '💪'
  },
  {
    id: 'logros-reconocimientos',
    nombre: 'Logros y Reconocimientos',
    color: 'bg-unisem-blue-dark',
    textColor: 'text-white',
    icono: '🏆'
  },
  {
    id: 'comunidad',
    nombre: 'Comunidad',
    color: 'bg-unisem-blue-medium',
    textColor: 'text-white',
    icono: '🤝'
  },
  {
    id: 'innovacion-medica',
    nombre: 'Innovación Médica',
    color: 'bg-unisem-blue-navy',
    textColor: 'text-white',
    icono: '🔬'
  }
];
