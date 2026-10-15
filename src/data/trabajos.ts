// Casos de trabajo. Para sumar uno nuevo, copiar un bloque y completar.
// `lecturas` son mediciones reales (rugosímetro, medidor de espesor, etc.).

export type Trabajo = {
  id: string;
  titulo: string;
  linea: string; // línea o proceso usado
  resumen: string;
  detalles: string[];
  lecturas?: { dato: string; valor: string }[];
  fotos: { src: string; alt: string }[];
};

export const trabajos: Trabajo[] = [
  {
    id: 'vastago-cat-773g',
    titulo: 'Vástago de amortiguador trasero, camión CAT 773G',
    linea: 'ECODUR HCR',
    resumen:
      'El vástago llegó con el cromo duro dañado en la zona de trabajo. Se retiró el cromo completo, se recuperó la medida y se rectificó a cota OEM.',
    detalles: [
      'Restauración dimensional de la zona de trabajo y reparación de la zona dañada',
      'Rectificado a medida OEM y superpulido',
      'Entre 3 y 5 veces la vida útil del componente OEM',
      'Menor desgaste de retenes y sellos por la baja rugosidad final',
      'Entrega en 3 días',
    ],
    lecturas: [
      { dato: 'Espesor cromo original', valor: '0,183 mm' },
      { dato: 'Espesor ECODUR HCR', valor: '0,30 mm' },
      { dato: 'Ra cromo original', valor: '0,041 µm' },
      { dato: 'Ra ECODUR HCR', valor: '0,024 µm' },
    ],
    fotos: [
      { src: '/img/vastago-antes.jpg', alt: 'Vástago CAT 773G antes de la reparación, con el cromo dañado' },
      { src: '/img/vastago-proceso.jpg', alt: 'Vástago en el torno con el recubrimiento recién aplicado, antes del rectificado' },
      { src: '/img/vastago-despues.jpg', alt: 'Vástago CAT 773G terminado con ECODUR HCR' },
      { src: '/img/ra-hcr.jpg', alt: 'Rugosímetro marcando Ra 0,024 µm sobre el vástago terminado' },
    ],
  },
  {
    id: 'manguitos-bomba',
    titulo: 'Manguitos para bomba',
    linea: 'ECODUR HCR',
    resumen: 'Manguitos recuperados con HCR en lugar de cromo duro, con acabado superpulido y rugosidad certificada.',
    detalles: ['Restauración dimensional', 'Mayor resistencia a la abrasión', 'Entre 3 y 5 veces la vida útil'],
    lecturas: [{ dato: 'Ra final', valor: '0,028 µm' }],
    fotos: [
      { src: '/img/manguitos.jpg', alt: 'Tres manguitos de bomba terminados con superficie espejada' },
      { src: '/img/ra-manguito.jpg', alt: 'Rugosímetro marcando Ra 0,028 µm sobre un manguito' },
    ],
  },
  {
    id: 'rodillo-4m',
    titulo: 'Rodillo de 4 metros',
    linea: 'ECODUR HCR',
    resumen: 'Reemplazo del cromo duro en un rodillo de 4 m de largo, con restauración dimensional.',
    detalles: ['Restauración dimensional y resistencia a la abrasión', 'Entre 3 y 5 veces la vida útil'],
    fotos: [{ src: '/img/rodillo-4m.jpg', alt: 'Rodillo de 4 metros terminado, montado en el torno' }],
  },
  {
    id: 'vastagos-cat',
    titulo: 'Vástagos de cilindros CAT',
    linea: 'ECODUR HCR',
    resumen: 'Vástagos recuperados por proyección térmica y superpulidos, en reemplazo del cromo duro.',
    detalles: ['Restauración dimensional', 'Mayor resistencia a la abrasión', 'Entre 3 y 5 veces la vida útil'],
    lecturas: [{ dato: 'Ra medido', valor: '0,024 µm' }],
    fotos: [
      { src: '/img/vastago-cat.jpg', alt: 'Vástago de cilindro CAT terminado sobre un pallet' },
      { src: '/img/proyeccion-hvof.jpg', alt: 'Aplicación del recubrimiento por proyección térmica sobre un vástago' },
    ],
  },
  {
    id: 'eje-turbina',
    titulo: 'Eje de turbina',
    linea: 'ECODUR WCM · HVOF',
    resumen: 'Recuperación de las zonas de apoyo y sellos de un eje de turbina por HVOF.',
    detalles: ['Restauración dimensional de apoyos y sellos', 'Reemplazo de cromo duro', 'Entre 3 y 5 veces la vida útil'],
    fotos: [{ src: '/img/eje-turbina.jpg', alt: 'Detalle de las zonas de apoyo y sellos recuperadas en el eje de turbina' }],
  },
  {
    id: 'bombas-hvof',
    titulo: 'Componentes de bombas',
    linea: 'Carburo de tungsteno y carburo de cromo · HVOF',
    resumen: 'Piezas de bombas protegidas con carburo de tungsteno y carburo de cromo aplicados por HVOF.',
    detalles: ['Temperatura de aplicación: 100 °C'],
    lecturas: [
      { dato: 'Dureza', valor: '62–72 HRc / 800–1300 HV0.3' },
      { dato: 'Adherencia', valor: '> 12.000 psi (83 MPa)' },
      { dato: 'Porosidad', valor: '< 1 %' },
      { dato: 'Espesor según se proyecta', valor: '0,02–0,05 mm' },
    ],
    fotos: [{ src: '/img/bomba-hvof.jpg', alt: 'Corte de una bomba centrífuga señalando las piezas recubiertas' }],
  },
  {
    id: 'celda-mani',
    titulo: 'Celda de carga de cáscara de maní',
    linea: 'ECODUR ULTRA HARD – AGRO PLUS',
    resumen: 'Cuerpo, tapas y rotor de una celda rotativa recubiertos para resistir la abrasión de la cáscara de maní.',
    detalles: [
      'Restauración dimensional de cuerpo, tapas y rotor',
      'Aplicación en frío, sin deformar el componente',
      'Espesor controlado: balanceo mínimo o nulo',
      'Dura de 3 a 5 veces más que chapa tipo Hardox o cromo duro',
    ],
    lecturas: [{ dato: 'Dureza', valor: '> 1000 HV' }],
    fotos: [
      { src: '/img/celda-mani-rotor.jpg', alt: 'Rotor de la celda de carga recubierto' },
      { src: '/img/celda-mani-tapa.jpg', alt: 'Tapa interior de la celda recubierta' },
      { src: '/img/celda-mani.jpg', alt: 'Celda de carga completa sobre un carro' },
    ],
  },
  {
    id: 'punta-eje-motor',
    titulo: 'Punta de eje y chavetero de motor eléctrico',
    linea: 'ECODUR REBUILD M',
    resumen: 'Recuperación de la punta de eje y la zona de chavetero de un inducido, llevando el diámetro a medida OEM.',
    detalles: [
      'Restauración dimensional sin afectar el sustrato original',
      'Mayor dureza que la pieza original',
      'Mayor resistencia a la abrasión y a la corrosión',
    ],
    fotos: [
      { src: '/img/punta-eje-antes.jpg', alt: 'Punta de eje y chavetero gastados, antes de la reparación' },
      { src: '/img/punta-eje-chavetero.jpg', alt: 'Punta de eje y chavetero recuperados' },
      { src: '/img/punta-eje-despues.jpg', alt: 'Punta de eje recuperada con ECODUR REBUILD M' },
    ],
  },
  {
    id: 'inducido',
    titulo: 'Apoyos de inducido de 5000 kg',
    linea: 'ECODUR REBUILD M',
    resumen: 'Restauración dimensional de los apoyos de un inducido de 5000 kg.',
    detalles: ['Restauración dimensional sin afectar el sustrato original'],
    fotos: [{ src: '/img/taller-torno.jpg', alt: 'Inducido de 5000 kg montado en el torno de Ecodur' }],
  },
  {
    id: 'eje-25mm',
    titulo: 'Eje con desgaste severo',
    linea: 'ECODUR REBUILD M',
    resumen: 'Reconstrucción de un eje aportando 25 mm en el diámetro, sin afectar el material base.',
    detalles: ['Mayor dureza que la pieza original', 'Mayor resistencia a la abrasión y la corrosión', 'Acabado pulido o superpulido a pedido, con rugosidad certificada'],
    lecturas: [{ dato: 'Aporte', valor: '+25 mm en diámetro' }],
    fotos: [{ src: '/img/rebuild-m-eje.jpg', alt: 'Eje antes y después de la reconstrucción' }],
  },
  {
    id: 'yankee',
    titulo: 'Cilindro Yankee',
    linea: 'ECODUR REBUILD / REBUILD ULTRA HARD',
    resumen: 'Restauración dimensional de un cilindro secador de máquina papelera, con baja porosidad para mejorar la transmisión térmica.',
    detalles: ['Mayor dureza y resistencia a la abrasión', 'Mayor resistencia a la corrosión'],
    fotos: [
      { src: '/img/yankee.jpg', alt: 'Cilindro Yankee' },
      { src: '/img/arco-spray.jpg', alt: 'Proyección térmica en marcha' },
    ],
  },
  {
    id: 'rodillo-arrastre-wcco',
    titulo: 'Rodillo de arrastre de 4 metros',
    linea: 'WCCo as sprayed',
    resumen: 'Restauración dimensional de un rodillo de arrastre de 4 m con carburo de tungsteno-cobalto, dejando la rugosidad del recubrimiento tal como se proyecta, según la especificación del cliente.',
    detalles: ['Resistencia a la abrasión con rugosidad final controlada', 'Entre 3 y 5 veces la vida útil del componente'],
    lecturas: [{ dato: 'Rugosidad final', valor: '13 µm ± 1 µm, certificada' }],
    fotos: [{ src: '/img/rodillo-arrastre-wcco.jpg', alt: 'Rodillo de arrastre de 4 metros recubierto con WCCo, montado en el torno' }],
  },
  {
    id: 'cruceta-compresor',
    titulo: 'Cruceta de compresor de gas',
    linea: 'Babbitt (metal blanco)',
    resumen: 'Re-babbitado de una cruceta de fundición con metal blanco certificado.',
    detalles: ['Restauración dimensional del diámetro', 'Mayor resistencia al desgaste adhesivo'],
    fotos: [{ src: '/img/cruceta-babbitt.jpg', alt: 'Cruceta de compresor de gas re-babbitada' }],
  },
  {
    id: 'camisa-300',
    titulo: 'Camisa de 300 mm y manguitos',
    linea: 'ECODUR HCR #1',
    resumen: 'Camisa de 300 mm de diámetro y manguitos de bomba terminados con HCR #1.',
    detalles: ['Pulido a superpulido con rugosidad certificada'],
    fotos: [
      { src: '/img/camisa-300.jpg', alt: 'Camisa de 300 mm de diámetro terminada' },
      { src: '/img/manguitos-hcr.jpg', alt: 'Manguitos de bomba terminados con HCR #1' },
    ],
  },
];
