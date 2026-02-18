export const services = [
  {
    // CAMBIO: Slug corregido para que el filtro funcione
    slug: 'instalaciones/electricas',
    title: 'Instalaciones Eléctricas',
    subtitle: 'Reformas y Obra Nueva',
    // CAMBIO: Nombre de icono corregido
    icon: 'tabler:home', 
    image: '/img/instalaciones-electricas.webp',
    description: 'Realizamos instalaciones eléctricas completas para viviendas y locales comerciales, cumpliendo estrictamente con el REBT y garantizando la máxima seguridad.',
    features: ['Boletines Eléctricos (CIE)', 'Cambios de tensión', 'Iluminación LED', 'Domótica básica'],
    commonProblems: [
      { title: 'Instalación Antigua', desc: 'Cableado obsoleto y peligroso.' },
      { title: 'Reformas Integrales', desc: 'Necesidad de mover puntos de luz y enchufes.' },
      { title: 'Potencia Insuficiente', desc: 'Saltos por conectar demasiados aparatos.' },
      { title: 'Seguridad', desc: 'Falta de toma de tierra o protecciones.' }
    ],
    process: [
      { step: '01', title: 'Visita', desc: 'Analizamos las necesidades in situ.' },
      { step: '02', title: 'Diseño', desc: 'Planteamos la distribución más eficiente.' },
      { step: '03', title: 'Ejecución', desc: 'Rozas, tubo y cableado con mínima molestia.' },
      { step: '04', title: 'Certificación', desc: 'Emisión del boletín oficial.' }
    ]
  },
  {
    // CAMBIO: Movido a la categoría "renovables"
    slug: 'renovables/fotovoltaicas',
    title: 'Instalaciones Fotovoltaicas',
    subtitle: 'Autoconsumo Solar',
    icon: 'tabler:sun',
    image: '/img/instalaciones-fotovoltaicas.webp',
    description: 'Ahorra hasta un 70% en tu factura de la luz generando tu propia energía. Nos encargamos de todo: estudio, instalación y legalización de tu sistema fotovoltaico.',
    features: ['Estudio de ahorro gratuito', 'Legalización y subvenciones', 'Baterías y almacenamiento', 'App de monitorización'],
    commonProblems: [
      { title: 'Factura Alta', desc: 'Costes de electricidad inasumibles.' },
      { title: 'Sostenibilidad', desc: 'Deseo de reducir la huella de carbono.' },
      { title: 'Independencia', desc: 'Menor dependencia de las compañías eléctricas.' },
      { title: 'Subvenciones', desc: 'Aprovechar ayudas europeas actuales.' }
    ],
    process: [
      { step: '01', title: 'Estudio', desc: 'Cálculo de producción y ahorro estimado.' },
      { step: '02', title: 'Instalación', desc: 'Montaje de paneles e inversor en 1-2 días.' },
      { step: '03', title: 'Legalización', desc: 'Trámites con Industria y Ayuntamiento.' },
      { step: '04', title: 'Ahorro', desc: 'Empiezas a generar desde el primer día.' }
    ]
  },
  {
    // CAMBIO: Movido a la categoría "mantenimiento"
    slug: 'mantenimiento/cuadros-electricos',
    title: 'Cuadros Eléctricos',
    subtitle: 'Seguridad y Normativa',
    icon: 'tabler:box',
    image: '/img/cuadros-electricos.webp',
    description: 'Actualizamos cuadros antiguos, saneamos cableado y aumentamos potencia. El corazón de tu instalación debe estar sano y cumplir con la normativa vigente.',
    features: ['Protección sobretensiones', 'Diferenciales rearmables', 'Ampliación de potencia', 'Normativa actual'],
    commonProblems: [
      { title: 'Saltos', desc: 'El ICP salta al poner la lavadora.' },
      { title: 'Peligro', desc: 'Cuadros de madera o sin tapa.' },
      { title: 'Ampliación', desc: 'Necesitas más circuitos para aire acondicionado.' },
      { title: 'Ruidos', desc: 'Zumbidos en los automáticos.' }
    ],
    process: [
      { step: '01', title: 'Revisión', desc: 'Chequeamos el estado actual.' },
      { step: '02', title: 'Presupuesto', desc: 'Valoramos materiales y mano de obra.' },
      { step: '03', title: 'Cambio', desc: 'Sustitución rápida (corte de luz mínimo).' },
      { step: '04', title: 'Test', desc: 'Comprobación de disparo y tierras.' }
    ]
  },
  {
    slug: 'instalaciones/reformas-electricas',
    title: 'Reformas Eléctricas',
    subtitle: 'Adecuación y Mejora',
    icon: 'tabler:tools',
    image: '/img/reformas-electricas.webp',
    description: 'Adaptamos y modernizamos la instalación eléctrica de tu vivienda o local durante una reforma, garantizando seguridad, eficiencia y cumplimiento del REBT.',
    features: ['Adecuación al REBT', 'Coordinación con otros gremios', 'Nuevos puntos de luz y enchufes', 'Certificado final de obra'],
    commonProblems: [
      { title: 'Reforma Integral', desc: 'Cambio completo de la instalación existente.' },
      { title: 'Cableado Obsoleto', desc: 'Cables sin aislamiento adecuado o sin tubo.' },
      { title: 'Redistribución', desc: 'Cambio de tabiques que afecta a la instalación.' },
      { title: 'Ampliación', desc: 'Más puntos eléctricos para nuevos equipos.' }
    ],
    process: [
      { step: '01', title: 'Planificación', desc: 'Coordinamos con la reforma para ejecutar en el momento óptimo.' },
      { step: '02', title: 'Rozas', desc: 'Apertura de rozas y tendido de tubo corrugado.' },
      { step: '03', title: 'Cableado', desc: 'Instalación de conductores y mecanismos.' },
      { step: '04', title: 'Certificación', desc: 'Emisión del boletín eléctrico oficial.' }
    ]
  },
  {
    slug: 'instalaciones/climatizacion',
    title: 'Instalaciones de Climatización',
    subtitle: 'Frío y Calor Eficiente',
    icon: 'tabler:wind',
    image: '/img/instalaciones-climatizacion.webp',
    description: 'Instalamos y mantenemos sistemas de climatización para viviendas y locales comerciales. Equipos de alta eficiencia energética adaptados a tus necesidades.',
    features: ['Aire acondicionado Split', 'Sistemas multi-split', 'Bomba de calor', 'Mantenimiento anual'],
    commonProblems: [
      { title: 'Calor en Verano', desc: 'Vivienda o local sin climatización adecuada.' },
      { title: 'Eficiencia', desc: 'Equipos antiguos con alto consumo eléctrico.' },
      { title: 'Varios Ambientes', desc: 'Necesidad de climatizar diferentes zonas.' },
      { title: 'Avería', desc: 'El equipo no enfría o no calienta correctamente.' }
    ],
    process: [
      { step: '01', title: 'Estudio', desc: 'Calculamos la potencia necesaria según el espacio.' },
      { step: '02', title: 'Selección', desc: 'Elegimos el equipo más eficiente para tu caso.' },
      { step: '03', title: 'Instalación', desc: 'Montaje de unidades interior y exterior.' },
      { step: '04', title: 'Puesta en Marcha', desc: 'Pruebas y configuración de todos los modos.' }
    ]
  },
  {
    slug: 'instalaciones/cctv-antenas',
    title: 'CCTV y Antenas',
    subtitle: 'Seguridad y Señal',
    icon: 'tabler:device-cctv',
    image: '/img/cctv-antenas.webp',
    description: 'Instalamos sistemas de videovigilancia CCTV y antenas de TV para viviendas y negocios. Protege tu propiedad y disfruta de la mejor señal en todos tus dispositivos.',
    features: ['Cámaras HD y 4K', 'Visión nocturna', 'Antenas TDT y satélite', 'Acceso remoto desde móvil'],
    commonProblems: [
      { title: 'Seguridad', desc: 'Necesidad de vigilar el acceso a vivienda o local.' },
      { title: 'Mala Señal', desc: 'Interferencias o pérdida de canales de televisión.' },
      { title: 'Grabación', desc: 'Registrar y revisar actividad en tu propiedad.' },
      { title: 'Cobertura', desc: 'Puntos ciegos sin señal de antena en la vivienda.' }
    ],
    process: [
      { step: '01', title: 'Análisis', desc: 'Estudiamos los puntos clave a vigilar o cubrir.' },
      { step: '02', title: 'Diseño', desc: 'Planificamos la ubicación óptima de cámaras y antenas.' },
      { step: '03', title: 'Instalación', desc: 'Montaje de equipos y cableado.' },
      { step: '04', title: 'Configuración', desc: 'Ajuste de imagen, grabación y acceso remoto.' }
    ]
  }
];