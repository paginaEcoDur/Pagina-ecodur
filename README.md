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

## Pendientes con el cliente

- **Logo original en vector** (.svg/.ai/.eps). El actual está redibujado a partir del PDF.
- **Fotos en buena resolución.** Las del PDF son chicas (300–1000 px) y se ven blandas en pantallas grandes.
- **Teléfono / WhatsApp** y dirección exacta dentro del Parque Industrial.
- Confirmar correcciones hechas al volcar el PDF:
  - Adherencia figuraba como "< 10000 psi" / "< 9000 psi"; se publicó como **mayor a** (>), que es lo que tiene sentido técnico.
  - En la comparación con cromo decía "hay poros interconectados"; se publicó como que **no** están interconectados.
  - "ASTM 23 Grado 2" para el babbitt se publicó como **ASTM B23 Grado 2**.
  - Vástagos CAT: el texto decía Ra < 0,02 µm pero la foto del rugosímetro marca 0,024 µm; se publicó **0,024 µm**.
  - Ficha técnica de ECODUR WCM, REBUILD y las líneas sin datos (ECO Al 1100, 9091, REBUILD C, REBUILD PLUS).
