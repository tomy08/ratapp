import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Helper pequeño para combinar clases CSS.
// - `clsx` resuelve valores condicionales y concatena strings ignorando falsy.
// - `twMerge` deduplica/mergea clases específicas de Tailwind (p. ej. "p-2 p-3" → "p-3").
// Orden: primero `clsx` para resolver condiciones, luego `twMerge` para arreglar conflictos
// entre utilidades de Tailwind. Usar `cn(...)` en componentes para juntar clases
// provenientes de variantes + props.user (p. ej. `cn(buttonVariants(...), className)`).
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
