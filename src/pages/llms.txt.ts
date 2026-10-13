import type { APIRoute } from 'astro';
import { resumen } from '../lib/markdown';

// Resumen del sitio para asistentes de IA (formato llms.txt).
export const GET: APIRoute = ({ site }) =>
  new Response(resumen(site!), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
