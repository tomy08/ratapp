import { Button } from "@/components/ui/button"
import { GraduationCap, Menu } from "lucide-react"

export function Header() {
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
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden md:inline-flex bg-transparent">
            Solicitar Demo
          </Button>
          <Button size="sm">Descargar App</Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
