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

// Sectores que atiende ECODUR. Para sumar o cambiar una foto:
// copiar la imagen a public/img/sectores/ y poner su ruta en `foto`.
// Si `foto` queda vacío, la tarjeta se muestra en gris con el nombre del sector.
export type Sector = { nombre: string; foto?: string; alt?: string };

export const sectores: Sector[] = [
  { nombre: 'Agricultura', foto: '/img/sectores/agricultura.jpg', alt: 'Rotor de una celda de carga de cáscara de maní recubierto' },
  { nombre: 'Cementeras' },
  { nombre: 'Oil & Gas', foto: '/img/sectores/oil-gas.jpg', alt: 'Cruceta de compresor de gas re-babbitada' },
  { nombre: 'Siderurgia' },
  { nombre: 'Petroquímica y química' },
  { nombre: 'Papel e imprenta', foto: '/img/sectores/papel.jpg', alt: 'Cilindro secador Yankee de una máquina papelera' },
  { nombre: 'Textil' },
  { nombre: 'Industria eléctrica', foto: '/img/sectores/electrica.jpg', alt: 'Inducido de 5000 kg en el torno durante la restauración de sus apoyos' },
  { nombre: 'Aeronáutica' },
  { nombre: 'Estructuras navales' },
];

export const industrias = sectores.map((s) => s.nombre);
