import planSaludActiva from '../assets/planes/plan-salud-activa.webp';
import planVidaPlena from '../assets/planes/plan-vida-plena.webp';
import planBienestarTotal from '../assets/planes/plan-bienestar-total.webp';
import planUnisemDistancia from '../assets/planes/plan-unisem-distancia.webp';

export const planesTarjeta = [
  {
    id: 'salud-activa',
    nombre: 'Salud Activa',
    edad: 'De 0 a 50 años',
    precio: '$2.500',
    imagen: planSaludActiva,
    caracteristicas: [
      'Emergencias médicas 24/7',
      'Médico a domicilio',
      'Videoconsultas'
    ],
    descripcion: 'Atención integral de emergencias médicas para personas de 0 a 50 años, con respuesta rápida pediátrica y médico a domicilio.'
  },
  {
    id: 'vida-plena',
    nombre: 'Vida Plena 50+',
    edad: 'A partir de los 50 años',
    precio: '$3.200',
    imagen: planVidaPlena,
    caracteristicas: [
      'Emergencias médicas 24/7',
      'Médico a domicilio',
      'Videoconsultas'
    ],
    descripcion: 'Cobertura especializada para mayores de 50 años, adaptada a las necesidades específicas de esta etapa de la vida.'
  },
  {
    id: 'bienestar-total',
    nombre: 'Bienestar Total',
    edad: 'Sin límite de edad',
    precio: '$5.800',
    imagen: planBienestarTotal,
    caracteristicas: [
      'Cobertura integral',
      'Todos los servicios',
      'Red SIEM nacional'
    ],
    descripcion: 'Cobertura integral sin límite de edad, incluyendo todos los servicios médicos y traslados programados.'
  },
  {
    id: 'unisem-distancia',
    nombre: 'Unisem a Distancia',
    edad: 'Cobertura remota',
    precio: '$1.800',
    imagen: planUnisemDistancia,
    caracteristicas: [
      'Videoconsultas',
      'Descuentos en medicamentos',
      'Red SIEM'
    ],
    descripcion: 'Cobertura remota ideal para quienes buscan atención médica a distancia con descuentos en medicamentos.'
  }
];

export const planesDetalle = [
  {
    id: "salud-activa",
    nombre: "Plan Salud Activa",
    edad: "De 0 a 50 años",
    precio: "$2.500",
    color: "bg-blue-400",
    descripcion:
      "Atención integral de emergencias médicas para personas de 0 a 50 años, con respuesta rápida pediátrica y médico a domicilio.",
    caracteristicas: [
      {
        titulo: "Atención Integral de Emergencias Médicas",
        descripcion:
          "En situaciones de riesgo de vida nuestro equipo médico llega rápidamente, auxiliado con equipamiento de avanzada para lograr la estabilización del paciente o eventual traslado a una institución hospitalaria. Durante las 24hs., todos los días del año, Usted cuenta con la seguridad de sentirse protegido. Sin cargo adicional.",
      },
      {
        titulo: "Respuesta Rápida Pediátrica",
        descripcion:
          "Contá con especialistas que resolverán en tu propio hogar, desde una simple fiebre hasta una emergencia real. Abona Coseguro.",
      },
      {
        titulo: "Médico a Domicilio",
        descripcion:
          "Ante situaciones que no presentan riesgo de vida, ni evidencian necesidad de utilizar la infraestructura de un centro asistencial, nuestro servicio le proporciona un médico para realizar la consulta sin moverse de su domicilio. Abona Coseguro.",
      },
      {
        titulo: "Red SIEM",
        descripcion:
          "Cubrimos emergencias médicas y consultas domiciliarias en más de 700 localidades de Argentina, Chile, Uruguay, Brasil, Perú, Ecuador, y Venezuela. Sin cargo Adicional.",
      },
      {
        titulo: "Descuento en Medicamentos",
        descripcion:
          "Con tu Tarjeta Farmas, obtené importantes descuentos en todas aquellas farmacias adheridas al Colegio de Farmacéuticos.",
      },
      {
        titulo: "Atención Médica por Videollamada",
        descripcion:
          "Es un servicio que ofrece atención médica calificada e inmediata por un profesional médico, mediante videollamada, disponible las 24 horas, todos los días del año. Dos consultas sin cargo por mes.",
      },
    ],
    bgColor: ".bg-plan-salud-activa",
    textColor: "text-unisem-blue-navy",
    primaryColor: "bg-unisem-blue-dark",
    accentColor: "bg-unisem-blue-sky",
    cardBg: "bg-white",
    cardBorder: "border-unisem-blue-sky",
  },
  {
    id: "vida-plena",
    nombre: "Plan Vida Plena 50+",
    edad: "A partir de los 50 años",
    precio: "$3.200",
    color: "bg-blue-600",
    descripcion:
      "Cobertura especializada para mayores de 50 años, adaptada a las necesidades específicas de esta etapa de la vida.",
    caracteristicas: [
      {
        titulo: "Atención Integral de Emergencias Médicas",
        descripcion:
          "En situaciones de riesgo de vida nuestro equipo médico llega rápidamente, auxiliado con equipamiento de avanzada para lograr la estabilización del paciente o eventual traslado a una institución hospitalaria. Durante las 24hs., todos los días del año, Usted cuenta con la seguridad de sentirse protegido. Sin cargo adicional.",
      },
      {
        titulo: "Médico a Domicilio",
        descripcion:
          "Ante situaciones que no presentan riesgo de vida, ni evidencian necesidad de utilizar la infraestructura de un centro asistencial, nuestro servicio le proporciona un médico para realizar la consulta sin moverse de su domicilio. Contá con especialistas que resolverán en tu propio hogar, desde una simple fiebre hasta una emergencia real. Abona Coseguro.",
      },
      {
        titulo: "Descuentos en Medicamentos",
        descripcion:
          "Con tu Tarjeta Farmas, obtené importantes descuentos en todas aquellas farmacias adheridas al Colegio de Farmacéuticos.",
      },
      {
        titulo: "Atención Médica por Videollamada",
        descripcion:
          "Es un servicio que ofrece atención médica calificada e inmediata por un profesional médico, mediante videollamada, disponible las 24 horas, todos los días del año. Dos consultas sin cargo por mes.",
      },
    ],
    bgColor: "bg-unisem-gray-light",
    textColor: "text-unisem-blue-navy",
    primaryColor: "bg-unisem-blue-medium",
    accentColor: "bg-unisem-blue-dark",
    cardBg: "bg-white",
    cardBorder: "border-unisem-blue-medium",
  },
  {
    id: "bienestar-total",
    nombre: "Plan Bienestar Total",
    edad: "Sin límite de edad",
    precio: "$5.800",
    color: "bg-orange-500",
    descripcion:
      "Cobertura integral sin límite de edad, incluyendo todos los servicios médicos y traslados programados.",
    caracteristicas: [
      {
        titulo: "Atención Integral de Emergencias Médicas",
        descripcion:
          "En situaciones de riesgo de vida nuestro equipo de médico llega rápidamente, auxiliado con equipamiento de avanzada, para lograr la estabilización del paciente o eventual traslado a una institución hospitalaria. Durante las 24hs. de todos los días del año, Usted cuenta con la seguridad de sentirse protegido. Sin cargo adicional.",
      },
      {
        titulo: "Respuesta Rápida Pediátrica",
        descripcion:
          "Contá con especialistas que resolverán en tu propio hogar, desde una simple fiebre hasta una emergencia real. Abona Coseguro.",
      },
      {
        titulo: "Médico a Domicilio",
        descripcion:
          "Ante situaciones que no presentan riesgo de vida, ni evidencian la necesidad de utilizar la infraestructura de un centro asistencial, nuestro servicio le proporciona un médico para realizar la consulta sin moverse de su domicilio. Abona Coseguro.",
      },
      {
        titulo: "Llamando al Doctor",
        descripcion:
          "Servicio que ofrece una consulta de tipo orientativa, calificada e inmediata, realizada por un profesional médico, mediante videollamanda, disponible las 24hs los 365 días del año. Dos consultas gratis por mes por usuario.",
      },
      {
        titulo: "Enfermería a Domicilio",
        descripcion:
          "Las 24 horas del día. Con presentación de la prescripción médica.",
      },
      {
        titulo: "Red SIEM",
        descripcion:
          "Cobertura de emergencias médicas y consultas domiciliarias en más de 700 localidades de Argentina, Chile, Uruguay, Brasil, Perú, Ecuador y Venezuela. Consulte área de cobertura. Sin cargo adicional.",
      },
      {
        titulo: "Bioquímicos a Domicilio",
        descripcion:
          "Extraemos muestras y entregamos resultados. Servicio programado y se realiza con prescripción médica. Abona con una orden autorizada de su obra social ó arancel mínimo del Colegio de Bioquímicos.",
      },
      {
        titulo: "Traslados Programados",
        descripcion:
          "Urbanos e interurbanos, de alta o baja complejidad. Bajo prescripción médica. Por ser un servicio programado debe solicitarse con antelación y bajo prescripción médica. Abona aranceles mínimos.",
      },
      {
        titulo: "Auto Protegido",
        descripcion:
          'En caso de accidente del vehículo propiedad del beneficiario, en el radio urbano de Santa Fe y Santo Tomé, "UNISEM" extiende automáticamente su servicio a todas las personas involucradas, tanto pasajeros como los que estén en la vía pública, recibirán la atención médica de emergencia necesaria.',
      },
      {
        titulo: "Electrocardiografía a Domicilio",
        descripcion:
          "Disponé de un informe de exámen prequirurgico, tensión arterial, y exámen físico en la comodidad de tu casa. Servicio Programado. Abona coseguro.",
      },
      {
        titulo: "Ecografías a Domicilio",
        descripcion:
          "Un especialista en diagnóstico por imágenes acude a su domicilio con equipos de alta tecnología. Servicio programado. Abona coseguro.",
      },
      {
        titulo: "Descuentos en Medicamentos",
        descripcion:
          "Con tu tarjeta Dsalud obtené importantes descuentos en todas aquellas farmacias adheridas al Colegio de Farmecéuticos.",
      },
      {
        titulo: "Internación Domiciliaria",
        descripcion:
          "Cuando el caso así lo requiera, profesionales centralizados por una coordinación única, bajo protocolos definidos, administrarán las prestaciones en tu domicilio.",
      },
      {
        titulo: "Kinesiología a Domicilio",
        descripcion:
          "Un profesional efectuará las prácticas de rehabilitación para trastornos en el aparato respiratorio, locomotor, circulatorio o neurológico. Servicio Programado. Abona con orden autorizada o arancel mínimo.",
      },
      {
        titulo: "Psiquiatría a Domicilio",
        descripcion:
          "Cuando el paciente no pueda movilizarse, un profesional acudirá al domicilio para la debida atención. Servicio programado. Abona coseguro.",
      },
      {
        titulo: "Radiología a Domicilio",
        descripcion:
          "Servicio programado donde un técnico radiólogo acudirá para realizar la práctica y el revelado en su domicilio y en el acto. Abona coseguro.",
      },
      {
        titulo: "Neurología a Domicilio",
        descripcion:
          "Un profesional acudirá al domicilio para la debida atención. Servicio Programado. Abona coseguro.",
      },
    ],
    bgColor: "bg-unisem-gray-light",
    textColor: "text-unisem-blue-navy",
    primaryColor: "bg-unisem-orange",
    accentColor: "bg-unisem-blue-dark",
    cardBg: "bg-white",
    cardBorder: "border-unisem-orange",
  },
  {
    id: "unisem-distancia",
    nombre: "Plan Unisem a Distancia",
    edad: "Cobertura remota",
    precio: "$1.800",
    color: "bg-blue-800",
    descripcion:
      "Cobertura remota ideal para quienes buscan atención médica a distancia con descuentos en medicamentos.",
    caracteristicas: [
      {
        titulo: "Red SIEM",
        descripcion:
          "Cobertura de emergencias médicas y consultas domiciliarias en más de 700 localidades de Argentina, Chile, Uruguay, Brasil, Perú, Ecuador y Venezuela. Consulte área de cobertura. Sin cargo adicional.",
      },
      {
        titulo: "Llamando al Doctor",
        descripcion:
          "Servicio que ofrece una consulta de tipo orientativa, calificada e inmediata, realizada por un profesional médico, mediante videollamanda, disponible las 24hs los 365 días del año. Dos consultas gratis por mes por usuario.",
      },
      {
        titulo: "Descuentos en Medicamentos",
        descripcion:
          "Con tu tarjeta Dsalud obtené importantes descuentos en todas aquellas farmacias adheridas al Colegio de Farmecéuticos.",
      },
    ],
    bgColor: "bg-unisem-gray-light",
    textColor: "text-unisem-blue-navy",
    primaryColor: "bg-unisem-blue-sky",
    accentColor: "bg-unisem-blue-navy",
    cardBg: "bg-white",
    cardBorder: "border-unisem-blue-sky",
  },
];
