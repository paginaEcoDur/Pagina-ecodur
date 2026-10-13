# ECODUR — sitio web institucional

Sitio estático hecho con [Astro](https://astro.build). Seis páginas: Inicio, Empresa, Soluciones, Productos, Trabajos y Contacto, armadas a partir del PDF institucional de ECODUR S.A.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
npm run preview  # sirve /dist
```

## Dónde se edita cada cosa

| Qué | Archivo |
| --- | --- |
| Mails, teléfono, WhatsApp, dirección | `src/data/site.ts` |
| Líneas de recubrimiento (fichas técnicas) | `src/data/productos.ts` |
| Casos de trabajo y sus mediciones | `src/data/trabajos.ts` |
| Fotos | `public/img/` |
| Colores y tipografía | `src/styles/global.css` |
| Logo | `src/components/Logo.astro` |

Para sumar un trabajo o un producto nuevo alcanza con copiar un bloque en el archivo de datos y subir la foto a `public/img/`. No hace falta tocar el diseño.

## Publicación en Cloudflare Pages

1. En Cloudflare → Workers & Pages → Create → Pages → conectar este repo.
2. Configuración de build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
3. Variable de entorno (opcional, para el formulario): `PUBLIC_WEB3FORMS_KEY` con la clave de [web3forms.com](https://web3forms.com), creada con el mail que va a recibir las consultas. Sin la clave, la página de contacto muestra los mails en lugar del formulario.
4. Cada push a `main` publica la web automáticamente.

### Dominio propio (ecodur.com.ar)

1. Registrar `ecodur.com.ar` en [nic.ar](https://nic.ar) a nombre de la empresa.
2. Agregar el dominio a Cloudflare (plan Free) y copiar los dos nameservers que asigna.
3. En nic.ar → el dominio → Delegaciones: cargar esos nameservers.
4. En el proyecto de Pages → Custom domains: agregar `ecodur.com.ar` y `www.ecodur.com.ar`.
5. Opcional: Email Routing de Cloudflare para tener `contacto@ecodur.com.ar` reenviando al Gmail.

Si el dominio final es otro, cambiar `site` en `astro.config.mjs` y la línea `Sitemap` de `public/robots.txt`.

## Pensado para asistentes de IA

El objetivo es que si alguien le pregunta a ChatGPT, Claude, Perplexity o Gemini quién repara o recubre piezas industriales, la IA entienda qué hace ECODUR y pase sus datos de contacto.

- **HTML estático:** los rastreadores de IA casi nunca ejecutan JavaScript; acá todo el texto ya está en el HTML.
- **`/llms.txt` y `/llms-full.txt`:** resumen y contenido completo en Markdown, generados desde `src/data/`. Se actualizan solos.
- **`/preguntas`:** preguntas frecuentes redactadas como las hace la gente, con respuestas que incluyen cómo contactar. Se editan en `src/data/faq.ts`.
- **Datos estructurados (schema.org):** ficha de la empresa con servicios, especialidades y contacto en todas las páginas, más `FAQPage` en preguntas.
- **`robots.txt`:** permite explícitamente a los rastreadores de IA.
- **Si se publica en Cloudflare:** en el panel del dominio, revisar *Security → Bots* y desactivar el bloqueo de bots de IA, que Cloudflare activa por defecto en dominios nuevos.

Todo el contenido es visible para las personas. No usar texto oculto ni instrucciones dirigidas a la IA: los buscadores lo penalizan y los asistentes lo filtran.

Lo que más pesa fuera del sitio: perfil de Google Business con dirección y fotos, y menciones en directorios industriales, LinkedIn o notas de clientes. Las IAs confían más en una empresa que aparece en varias fuentes.

## Pendientes con el cliente

- **Logo original en vector** (.svg/.ai/.eps). El actual está redibujado a partir del PDF.
- **Fotos en buena resolución.** Las del PDF son chicas (300–1000 px) y se ven blandas en pantallas grandes.
- **Teléfono / WhatsApp** y dirección exacta dentro del Parque Industrial.
- **Zona de cobertura:** ¿reciben piezas de todo el país? Si es así, agregarlo a `src/data/faq.ts` y a la descripción; es una de las primeras cosas que una IA necesita para recomendarlos.
- Confirmar correcciones hechas al volcar el PDF:
  - Adherencia figuraba como "< 10000 psi" / "< 9000 psi"; se publicó como **mayor a** (>), que es lo que tiene sentido técnico.
  - En la comparación con cromo decía "hay poros interconectados"; se publicó como que **no** están interconectados.
  - "ASTM 23 Grado 2" para el babbitt se publicó como **ASTM B23 Grado 2**.
  - Vástagos CAT: el texto decía Ra < 0,02 µm pero la foto del rugosímetro marca 0,024 µm; se publicó **0,024 µm**.
  - Ficha técnica de ECODUR WCM, REBUILD y las líneas sin datos (ECO Al 1100, 9091, REBUILD C, REBUILD PLUS).
- Confirmar textos que no están en el PDF y se redactaron para la web:
  - "Cómo trabajamos una pieza" en Soluciones (diagnóstico → elección → aplicación → rectificado → medición).
  - Que responden cada consulta con diagnóstico y solución recomendada (Contacto, Preguntas frecuentes).
  - Las descripciones de qué es cada proceso (soldaduras especiales, hardfacing) y de cada tipo de mejora.
