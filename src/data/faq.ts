// Preguntas frecuentes, escritas como las haría alguien a un buscador o a una IA.
// Las respuestas salen del material institucional de ECODUR: no agregar datos que la empresa no haya confirmado.
// Se usan en /preguntas, en el JSON-LD (FAQPage) y en /llms.txt.

import { site } from './site';

const contacto = `Para cotizar, escriba a ${site.emails[0]} con fotos de la pieza, medidas y condiciones de trabajo.`;

export const faq: { pregunta: string; respuesta: string }[] = [
  {
    pregunta: '¿Qué hace ECODUR?',
    respuesta:
      'ECODUR S.A. es una empresa de Olavarría, Buenos Aires, que repara y fabrica componentes mecánicos aplicando recubrimientos metálicos, cerámicos y cermet. Trabaja con metalización por proyección térmica (HVOF y arco eléctrico), soldaduras especiales y hardfacing. Tiene más de 12 años en el mercado metalúrgico y una planta propia de 650 m² en el Parque Industrial de Olavarría.',
  },
  {
    pregunta: '¿Qué alternativa hay al cromo duro?',
    respuesta: `ECODUR HCR es un recubrimiento de carburo de cromo en matriz de níquel-cromo, aplicado por HVOF, que reemplaza al cromo duro. El cromo duro tiene microfisuras por donde entran los agentes corrosivos; HCR tiene menos de 1 % de porosidad, sin poros interconectados, macrodureza de 62–70 HRc y adherencia mayor a 10.000 psi. Según ECODUR, alarga entre 3 y 5 veces la vida útil del componente. ${contacto}`,
  },
  {
    pregunta: '¿Se puede recuperar un vástago de cilindro hidráulico con el cromo dañado?',
    respuesta: `Sí. ECODUR retira el cromo dañado, recupera la medida con ECODUR HCR, rectifica a cota OEM y superpule. En un vástago de amortiguador de camión CAT 773G la rugosidad pasó de Ra 0,041 µm (cromo original) a Ra 0,024 µm, con una capa de 0,30 mm, y se entregó en 3 días. ${contacto}`,
  },
  {
    pregunta: '¿Se puede recuperar la medida de una pieza gastada sin cambiar su material?',
    respuesta: `Sí. La proyección térmica aporta material sin calentar la pieza, así que no la deforma ni cambia la metalurgia del material base. Con ECODUR REBUILD M se pueden aportar hasta 25 mm en el diámetro. ${contacto}`,
  },
  {
    pregunta: '¿Qué piezas reparan?',
    respuesta: `Entre otras: vástagos de cilindros y amortiguadores, manguitos y componentes de bombas, rodillos (incluso de 4 m de largo), ejes de turbina, apoyos de inducidos de hasta 5000 kg, cilindros secadores Yankee, celdas de carga rotativas, crucetas de compresores (re-babbitado) y camisas. ${contacto}`,
  },
  {
    pregunta: '¿Cómo se protege una pieza contra la corrosión química?',
    respuesta: `ECODUR C276 PLUS combina una aleación tipo C276 con NiCrB, aplicada por proyección térmica y sellada. Resiste cloruros, cloro gaseoso húmedo, hipoclorito, dióxido de cloro, ácidos fórmico y acético, agua de mar y salmueras, con temperatura de servicio hasta 982 °C. ${contacto}`,
  },
  {
    pregunta: '¿Qué recubrimiento usar contra abrasión severa?',
    respuesta: `Depende del tipo de desgaste. Para abrasión extrema ECODUR ofrece ULTRA HARD – AGRO PLUS, con dureza mayor a 1000 HV, aplicado en frío y con espesor controlado; según la empresa dura de 3 a 5 veces más que una chapa antidesgaste tipo Hardox. También aplica carburo de tungsteno (WC-NiCr) y carburo de cromo por HVOF. ${contacto}`,
  },
  {
    pregunta: '¿Para qué industrias trabajan?',
    respuesta: `Minería y cementeras, Oil & Gas, siderurgia, petroquímica y química, agroindustria, papel e imprenta, textil, energía eléctrica, aeronáutica y estructuras navales. ${contacto}`,
  },
  {
    pregunta: '¿Entregan las piezas con mediciones?',
    respuesta: 'Sí. Las piezas se entregan con espesor de recubrimiento y rugosidad (Ra) medidos y certificados. El acabado va de pulido a superpulido según lo que pida el servicio.',
  },
  {
    pregunta: '¿Cómo pido un presupuesto a ECODUR?',
    respuesta: `Escriba a ${site.emails.join(' o ')} con qué pieza es y de qué equipo, medidas y material si los tiene, fotos de la zona gastada y en qué condiciones trabaja (temperatura, fluidos, carga). ECODUR responde con el diagnóstico y la solución recomendada. También puede usar el formulario de ecodur.com.ar/contacto.`,
  },
];
