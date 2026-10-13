// Líneas de recubrimiento de ECODUR.
// Para agregar una línea nueva: copiar un bloque, cambiar el id y completar los datos.
// Los campos de `ficha` que no se conozcan se pueden borrar: la página solo muestra los que existen.

export type Producto = {
  id: string;
  nombre: string;
  uso: string; // para qué sirve, en una línea
  descripcion: string;
  ficha: { dato: string; valor: string }[];
  prestaciones: string[];
  aplicaciones?: string;
  imagen?: { src: string; alt: string };
};

export const productos: Producto[] = [
  {
    id: 'hcr',
    nombre: 'ECODUR HCR',
    uso: 'Reemplazo de cromo duro',
    descripcion:
      'Compuesto de carburo de cromo en matriz de níquel-cromo, aplicado por proyección térmica de alta velocidad (HVOF) y sellado final con MAS-S700. Es más denso que el cromo duro y no tiene su microfisuración, por eso protege mejor el sustrato contra la corrosión.',
    ficha: [
      { dato: 'Macrodureza', valor: '62–70 HRc (convertida)' },
      { dato: 'Microdureza', valor: '800–1200 HV100' },
      { dato: 'Adherencia', valor: '> 10.000 psi' },
      { dato: 'Porosidad', valor: '< 1 %' },
      { dato: 'Temperatura de servicio', valor: 'hasta 540 °C' },
      { dato: 'Acabado', valor: 'Pulido a superpulido, Ra certificada (logrado: 0,024 µm)' },
    ],
    prestaciones: [
      'Restauración dimensional sin afectar el sustrato original',
      'Resistencia a la abrasión y erosión en alta temperatura',
      'Mayor dureza que la pieza original',
      'Mayor resistencia a la corrosión que el cromo duro',
      'Entre 3 y 5 veces la vida útil del componente',
      'Menor desgaste de retenes y sellos por la baja rugosidad final',
    ],
    aplicaciones:
      'Vástagos de cilindros y amortiguadores, manguitos de bomba, rodillos, camisas. Usado en agro, papel e imprenta, textil, energía, aeronáutica, naval, cementeras, Oil & Gas, siderurgia, petroquímica y química.',
    imagen: { src: '/img/vastago-despues.jpg', alt: 'Vástago de amortiguador CAT 773G terminado con ECODUR HCR, superficie espejada' },
  },
  {
    id: 'wcm',
    nombre: 'ECODUR WCM',
    uso: 'Reemplazo de cromo duro por HVOF',
    descripcion:
      'Recubrimiento aplicado por HVOF para recuperar zonas de apoyo y sellos en ejes de alta exigencia, como ejes de turbina, donde el cromo duro no alcanza.',
    ficha: [{ dato: 'Proceso', valor: 'HVOF' }],
    prestaciones: [
      'Restauración dimensional de zonas de apoyo y sellos',
      'Mayor resistencia a la abrasión',
      'Entre 3 y 5 veces la vida útil del componente',
    ],
    aplicaciones: 'Ejes de turbina: zonas de apoyo y sellos.',
    imagen: { src: '/img/eje-turbina.jpg', alt: 'Eje de turbina con zonas de apoyo y sellos recuperadas' },
  },
  {
    id: 'rebuild-m',
    nombre: 'ECODUR REBUILD M',
    uso: 'Reconstrucción de grandes espesores',
    descripcion:
      'Pensado para piezas con mucho desgaste: permite aportar hasta 25 mm en el diámetro sin cambiar la metalurgia del material base.',
    ficha: [
      { dato: 'Aporte máximo', valor: '+25 mm en diámetro' },
      { dato: 'Acabado', valor: 'Pulido o superpulido a pedido, Ra certificada' },
    ],
    prestaciones: [
      'Restauración dimensional sin afectar el sustrato original',
      'Mayor dureza que la pieza original',
      'Mayor resistencia a la abrasión y a la corrosión',
    ],
    aplicaciones: 'Apoyos de inducidos y ejes de gran porte.',
    imagen: { src: '/img/taller-torno.jpg', alt: 'Inducido de 5000 kg en el torno durante la restauración de sus apoyos' },
  },
  {
    id: 'rebuild',
    nombre: 'ECODUR REBUILD / REBUILD ULTRA HARD',
    uso: 'Restauración de cilindros y superficies grandes',
    descripcion:
      'Recubrimiento de baja porosidad para reconstruir superficies extensas. En cilindros secadores tipo Yankee mejora además la transmisión de calor.',
    ficha: [{ dato: 'Acabado', valor: 'Pulido o superpulido a pedido, Ra certificada' }],
    prestaciones: [
      'Restauración dimensional sin afectar el sustrato original',
      'Mayor dureza y resistencia a la abrasión',
      'Mayor resistencia a la corrosión',
      'Baja porosidad final para mejor transmisión térmica',
    ],
    aplicaciones: 'Cilindros Yankee y superficies de gran diámetro.',
    imagen: { src: '/img/yankee.jpg', alt: 'Cilindro secador Yankee de máquina papelera' },
  },
  {
    id: 'c276-plus',
    nombre: 'ECODUR C276 PLUS',
    uso: 'Resistencia a la corrosión',
    descripcion:
      'Sistema anticorrosivo que combina una aleación tipo C276 con una aleación de NiCrB, aplicado por proyección térmica y sellado con MAS-S700. Resiste oxidantes fuertes y atmósferas agresivas a alta temperatura.',
    ficha: [
      { dato: 'Macrodureza', valor: '48–52 HRc (convertida)' },
      { dato: 'Adherencia', valor: '> 9.000 psi' },
      { dato: 'Temperatura de servicio', valor: 'hasta 982 °C' },
      { dato: 'Acabado', valor: 'Pulido, Ra certificada' },
    ],
    prestaciones: [
      'Resiste cloruros férricos y cúpricos, cloro, ácidos fórmico y acético',
      'Apto para agua de mar y salmueras',
      'Resiste cloro gaseoso húmedo, hipoclorito y dióxido de cloro',
      'Apto para sistemas de desulfuración de gases de combustión',
      'Restauración dimensional sin afectar el sustrato original',
    ],
    aplicaciones: 'Industria química y petroquímica, desulfuración de gases, equipos en contacto con agua de mar o salmuera.',
    imagen: { src: '/img/micro-c276.jpg', alt: 'Microestructura del recubrimiento ECODUR C276 PLUS' },
  },
  {
    id: 'gripping-hard',
    nombre: 'ECODUR GRIPPING HARD',
    uso: 'Tracción de largo plazo',
    descripcion:
      'Mantiene un perfil de rugosidad medio a alto en rodillos de tracción y superficies que necesitan agarre bajo carga. Los carburos de tungsteno y de cromo dispersos en una matriz tenaz le dan además alta resistencia a la abrasión.',
    ficha: [
      { dato: 'Macrodureza', valor: '55–68 HRc (convertida)' },
      { dato: 'Adherencia', valor: '> 9.000 psi' },
      { dato: 'Acabado', valor: 'Rugosidad según especificación del cliente' },
    ],
    prestaciones: [
      'Mantiene el perfil de rugosidad para sostener la tracción',
      'Restauración dimensional sin afectar el sustrato original',
      'Mayor dureza que la pieza original',
    ],
    aplicaciones: 'Rodillos de tracción y piezas que necesitan agarre bajo carga.',
    imagen: { src: '/img/gripping.jpg', alt: 'Rodillo con recubrimiento ECODUR GRIPPING HARD de superficie mate' },
  },
  {
    id: 'ultra-hard',
    nombre: 'ECODUR ULTRA HARD – AGRO PLUS',
    uso: 'Antidesgaste extremo',
    descripcion:
      'Recubrimiento de muy alta dureza para piezas sometidas a abrasión y erosión severas. Se aplica en frío, así que no deforma el componente, y con espesor controlado, lo que reduce o elimina el balanceo posterior.',
    ficha: [
      { dato: 'Dureza', valor: '> 1000 HV' },
      { dato: 'Aplicación', valor: 'Metalúrgicamente fría, sin deformación' },
    ],
    prestaciones: [
      'Dura de 3 a 5 veces más que una chapa antidesgaste tipo Hardox o el cromo duro',
      'Restauración dimensional de cuerpos, tapas y rotores',
      'Balanceo mínimo o nulo después de aplicar',
    ],
    aplicaciones: 'Celdas de carga y piezas expuestas a abrasión severa, como en el procesamiento de maní.',
    imagen: { src: '/img/celda-mani-rotor.jpg', alt: 'Rotor de celda de carga de cáscara de maní recubierto con ECODUR ULTRA HARD' },
  },
  {
    id: 'babbitt',
    nombre: 'Babbitt (metal blanco)',
    uso: 'Re-babbitado de cojinetes y crucetas',
    descripcion:
      'Recuperación de superficies antifricción en crucetas y cojinetes con metal blanco certificado.',
    ficha: [{ dato: 'Material', valor: 'Certificado, supera ASTM B23 Grado 2' }],
    prestaciones: [
      'Restauración dimensional del diámetro',
      'Mayor resistencia al desgaste adhesivo',
    ],
    aplicaciones: 'Crucetas de compresores de gas, cojinetes de deslizamiento.',
    imagen: { src: '/img/cruceta-babbitt.jpg', alt: 'Cruceta de fundición de compresor de gas re-babbitada' },
  },
];

export const otrasLineas = ['ECO Al 1100', 'ECODUR 9091', 'ECODUR REBUILD C', 'ECODUR REBUILD PLUS'];

export const materiales = [
  'WC-NiCr (carburo de tungsteno)',
  'CrC-NiCr (carburo de cromo)',
  '(FeCr)Cr-NiCr',
  'Cerámico de óxido de cromo',
  'Cerámico de óxido de aluminio',
  'Aleaciones tipo Inconel',
  'Aleaciones tipo Hastelloy',
  'Aleaciones Tribaloy',
  'Aceros inoxidables',
  'Aleaciones FeCrNi',
  'Aleaciones autofundentes',
];
