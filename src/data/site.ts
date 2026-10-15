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
  // Link de Google Maps de la planta (el que da "Compartir" en Maps) o dirección exacta.
  // Mientras quede en null, la página de contacto no muestra mapa: una búsqueda genérica
  // hace que Google marque otro negocio.
  mapaQuery: null as string | null,
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

// Sectores que atiende ECODUR.
// Las fotos de cada sector van en src/assets/sectores/<carpeta>/ (jpg, png o webp).
// - El nombre del archivo se usa como descripción de la foto: "rotor-de-celda-de-carga.jpg".
// - Se ordenan por nombre: empezar con 1-, 2-, 3- para elegir el orden. La primera es la portada.
// - Si la carpeta está vacía, la tarjeta se ve en gris y no lleva a ninguna galería.
// `texto` es opcional: una o dos frases que se muestran arriba de la galería.
export type Sector = { nombre: string; carpeta: string; texto?: string; trabajos?: string[] };

export const sectores: Sector[] = [
  {
    nombre: 'Agricultura',
    carpeta: 'agricultura',
    texto:
      'Celda de carga rotativa para cáscara de maní, recubierta con ECODUR ULTRA HARD – AGRO PLUS: más de 1000 HV de dureza, aplicación en frío y espesor controlado para un balanceo mínimo o nulo.',
    trabajos: ['celda-mani'],
  },
  { nombre: 'Cementeras', carpeta: 'cementeras' },
  {
    nombre: 'Oil & Gas',
    carpeta: 'oil-gas',
    texto:
      'Re-babbitado de crucetas de compresores de gas, plungers de bomba y componentes de bombas protegidos con carburo de tungsteno y carburo de cromo por HVOF.',
    trabajos: ['cruceta-compresor', 'bombas-hvof'],
  },
  { nombre: 'Siderurgia', carpeta: 'siderurgia' },
  { nombre: 'Petroquímica y química', carpeta: 'petroquimica' },
  {
    nombre: 'Papel e imprenta',
    carpeta: 'papel-imprenta',
    texto:
      'Rodillos de arrastre y de tracción, rolos, camisas y manguitos recubiertos para máquinas papeleras, y restauración dimensional de cilindros secadores Yankee.',
    trabajos: ['rodillo-arrastre-wcco', 'yankee', 'camisa-300'],
  },
  { nombre: 'Textil', carpeta: 'textil' },
  {
    nombre: 'Industria eléctrica',
    carpeta: 'industria-electrica',
    texto:
      'Recuperación de puntas de eje, chaveteros y apoyos de inducidos de motores eléctricos con ECODUR REBUILD M, a diámetro OEM y sin afectar el material base.',
    trabajos: ['punta-eje-motor', 'inducido'],
  },
  { nombre: 'Aeronáutica', carpeta: 'aeronautica' },
  { nombre: 'Estructuras navales', carpeta: 'navales' },
];

export const industrias = sectores.map((s) => s.nombre);
