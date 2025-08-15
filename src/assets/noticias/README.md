# Imágenes de Noticias

Esta carpeta contiene las imágenes para las noticias de UNISEM.

## Estructura recomendada:
```
noticias/
├── kinesiologia-domicilio.jpg
├── vida-saludable-2025.jpg
├── expansion-cobertura.jpg
└── README.md
```

## Cómo usar imágenes locales:

1. **Agregar la imagen** a esta carpeta
2. **Importar en noticiasData.js:**
   ```javascript
   import kinesiologiaImg from '../assets/noticias/kinesiologia-domicilio.jpg';
   
   // Luego usar:
   imagen: kinesiologiaImg,
   ```

## Formatos recomendados:
- **JPG/JPEG:** Para fotografías
- **PNG:** Para imágenes con transparencia
- **WebP:** Para mejor compresión
- **Tamaño:** 400x250px o 800x500px
