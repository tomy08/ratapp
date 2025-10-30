import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import ToasterClient from '@/components/toaster-client'

// Importa fuentes personalizadas con variables y pesos específicos
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

// Define los metadatos de la aplicación
export const metadata: Metadata = {
  title: 'Ratapp',
  description:
    'RatApp es una aplicación de asistencia educativa que utiliza tecnología.',
}

// Componente principal que envuelve toda la aplicación
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Renderiza los componentes hijos */}
        {children}
        {/* Incluye un cliente para notificaciones tipo toaster */}
        <ToasterClient />
      </body>
    </html>
  )
}
