export const services = [
  {
    slug: 'mantenimiento/urgencias-24h', // La URL exacta
    title: 'Urgencias Eléctricas 24h',
    subtitle: 'Respuesta Inmediata en Madrid',
    icon: 'ti-bolt',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2000&auto=format&fit=crop',
    description: 'Sabemos que una avería eléctrica no avisa. Nuestro servicio de urgencias está operativo 24/7 para solucionar apagones, cortocircuitos y fallos críticos en menos de 1 hora.',
    features: [
      'Disponibilidad 365 días al año',
      'Llegada en < 1 hora garantizada',
      'Detectamos la avería o no cobramos',
      'Vehículos taller con repuestos'
    ],
    commonProblems: [
      { title: 'Apagón Total', desc: 'Cortes de luz repentinos sin causa aparente.' },
      { title: 'Olor a Quemado', desc: 'Cables sobrecalentados o enchufes defectuosos.' },
      { title: 'Saltos de Diferencial', desc: 'El cuadro salta constantemente al encender un equipo.' },
      { title: 'Averías en Negocios', desc: 'Paradas de producción o falta de luz en locales.' }
    ],
    process: [
      { step: '01', title: 'Aviso', desc: 'Nos llamas y un técnico evalúa la gravedad al instante.' },
      { step: '02', title: 'Desplazamiento', desc: 'La unidad móvil más cercana se dirige a tu ubicación.' },
      { step: '03', title: 'Diagnóstico', desc: 'Localizamos el fallo con equipos de medición avanzados.' },
      { step: '04', title: 'Solución', desc: 'Reparamos la avería y verificamos la seguridad.' }
    ]
  },
  {
    slug: 'instalaciones/viviendas',
    title: 'Instalaciones Eléctricas',
    subtitle: 'Reformas y Obra Nueva',
    icon: 'ti-home',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?q=80&w=2000&auto=format&fit=crop',
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
  // ... Puedes añadir aquí el resto de servicios (Placas, Cargadores, etc.)
  {
    slug: 'renovables/placas-solares',
    title: 'Placas Solares',
    subtitle: 'Autoconsumo Fotovoltaico',
    icon: 'ti-sun',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop',
    description: 'Ahorra hasta un 70% en tu factura de la luz generando tu propia energía. Nos encargamos de todo: estudio, instalación y legalización.',
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
      slug: 'renovables/cargadores-ve',
      title: 'Cargadores Vehículo',
      subtitle: 'Movilidad Eléctrica',
      icon: 'ti-car',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop',
      description: 'Instalamos puntos de recarga (Wallbox) en garajes comunitarios y viviendas unifamiliares. Carga tu coche mientras duermes.',
      features: ['Plan MOVES III', 'Garajes comunitarios', 'Control dinámico de potencia', 'Instaladores certificados'],
      commonProblems: [
        { title: 'Carga Lenta', desc: 'Cargar en enchufe normal es eterno.' },
        { title: 'Comunidad', desc: 'Dudas sobre permisos en garaje compartido.' },
        { title: 'Seguridad', desc: 'Riesgo de sobrecalentamiento en cables normales.' },
        { title: 'Coste', desc: 'Aprovechar tarifas nocturnas baratas.' }
      ],
      process: [
        { step: '01', title: 'Asesoría', desc: 'Elegimos el mejor cargador para tu coche.' },
        { step: '02', title: 'Permisos', desc: 'Informamos a la comunidad (si aplica).' },
        { step: '03', title: 'Instalación', desc: 'Cableado desde contador hasta tu plaza.' },
        { step: '04', title: 'Puesta en Marcha', desc: 'Te enseñamos a usar la App de carga.' }
      ]
  },
  {
      slug: 'mantenimiento/cuadros-electricos',
      title: 'Cuadros Eléctricos',
      subtitle: 'Seguridad y Normativa',
      icon: 'ti-box',
      image: 'https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=2000&auto=format&fit=crop',
      description: 'Actualizamos cuadros antiguos, saneamos cableado y aumentamos potencia. El corazón de tu instalación debe estar sano.',
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
  }
];