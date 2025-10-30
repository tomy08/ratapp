'use client'

/*
Componente cliente para el Toaster de notificaciones
Es importante que este componente sea cliente para que
las notificaciones funcionen correctamente en el navegador.
*/

import { Toaster } from 'sonner'

export default function ToasterClient() {
  return <Toaster position="bottom-center" />
}
