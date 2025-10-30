'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { GraduationCap, Menu, X } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">RatApp</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#inicio"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Inicio
          </a>
          <a
            href="#beneficios"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Beneficios
          </a>
          <a
            href="#funciones"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Funciones
          </a>
          <a
            href="#testimonios"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Testimonios
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contacto
          </a>
          <a
            href="#quienes-somos"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Quiénes somos
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex bg-transparent"
          >
            Solicitar Demo
          </Button>
          <Button size="sm">Descargar App</Button>
          <button
            className="md:hidden ml-2 p-2 rounded-md"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a
              href="#inicio"
              onClick={() => setOpen(false)}
              className="text-base"
            >
              Inicio
            </a>
            <a
              href="#beneficios"
              onClick={() => setOpen(false)}
              className="text-base"
            >
              Beneficios
            </a>
            <a
              href="#funciones"
              onClick={() => setOpen(false)}
              className="text-base"
            >
              Funciones
            </a>
            <a
              href="#testimonios"
              onClick={() => setOpen(false)}
              className="text-base"
            >
              Testimonios
            </a>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="text-base"
            >
              Contacto
            </a>
            <a
              href="/about"
              onClick={() => setOpen(false)}
              className="text-base"
            >
              Quiénes somos
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
