import type { APIRoute } from 'astro';
import { completo } from '../lib/markdown';

// Todo el contenido del sitio en un solo Markdown, para asistentes de IA.
export const GET: APIRoute = ({ site }) =>
  new Response(completo(site!), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
