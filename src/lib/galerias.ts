// Junta las fotos de cada sector desde src/assets/sectores/<carpeta>/.
// No hace falta tocar este archivo para sumar fotos: alcanza con copiarlas a la carpeta.
import type { ImageMetadata } from 'astro';
import { sectores, type Sector } from '../data/site';

const archivos = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/sectores/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

export type Foto = { src: ImageMetadata; alt: string };

// "2-tapa-interior_de la celda.jpg" → "Tapa interior de la celda"
function descripcion(nombreArchivo: string) {
  const base = nombreArchivo.replace(/\.[^.]+$/, '').replace(/^\d+\s*[-_.]\s*/, '');
  const texto = base.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export function fotosDe(carpeta: string): Foto[] {
  return Object.entries(archivos)
    .filter(([ruta]) => ruta.split('/').at(-2) === carpeta)
    .sort(([a], [b]) => a.localeCompare(b, 'es', { numeric: true }))
    .map(([ruta, mod]) => ({ src: mod.default, alt: descripcion(ruta.split('/').at(-1)!) }));
}

export type SectorConFotos = Sector & { fotos: Foto[]; url: string | null };

export const sectoresConFotos: SectorConFotos[] = sectores.map((s) => {
  const fotos = fotosDe(s.carpeta);
  return { ...s, fotos, url: fotos.length ? `/sectores/${s.carpeta}` : null };
});
