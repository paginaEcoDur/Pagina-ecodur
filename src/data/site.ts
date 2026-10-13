// Datos de contacto y generales de la empresa.
// Todo lo que el cliente quiera cambiar seguido (mails, teléfono, dirección) está acá.

export const site = {
  nombre: 'ECODUR S.A.',
  descripcion:
    'Metalización por proyección térmica, soldaduras especiales y hardfacing. Reparamos y fabricamos componentes mecánicos con recubrimientos metálicos, cerámicos y cermet. Planta propia en el Parque Industrial de Olavarría.',
  emails: ['ecodursa@gmail.com', 'ecodurargentina@gmail.com'],
  // Completar cuando el cliente los pase. Si quedan en null, no se muestran.
  telefono: null as string | null, // ej: '+54 2284 000000'
  whatsapp: null as string | null, // solo números, ej: '5492284000000'
  direccion: 'Parque Industrial de Olavarría',
  ciudad: 'Olavarría, Buenos Aires, Argentina',
  mapaQuery: 'Parque Industrial Olavarría, Buenos Aires',
  anios: '+12',
  superficie: '650 m²',
  materiales: '+100',
};

export const nav = [
  { href: '/empresa', label: 'Empresa' },
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/productos', label: 'Productos' },
  { href: '/trabajos', label: 'Trabajos' },
];

export const industrias = [
  'Minería y cementeras',
  'Oil & Gas',
  'Siderurgia',
  'Petroquímica y química',
  'Agroindustria',
  'Papel e imprenta',
  'Textil',
  'Energía eléctrica',
  'Aeronáutica',
  'Estructuras navales',
];
