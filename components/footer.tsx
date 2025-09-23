import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-foreground/10 rounded-lg">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">RatApp</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              La solución más avanzada para el control de asistencia educativa,
              respaldada por el gobierno y confiada por las mejores academias.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#funciones"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Funciones
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Documentación
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Tutoriales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Soporte Técnico
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Estado del Sistema
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Mistacorp</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">
                  contacto@mistacorp.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">
                  +54 911 1234-5678
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">
                  Av. Lope de Vega, 2150
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2025 Mistacorp. Todos los derechos reservados.
            </div>

            <div className="text-sm text-primary-foreground/80">
              <span className="font-medium">Equipo del Proyecto:</span>
              <span className="ml-2">Desarrollo: Equipo Mistacorp</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-2 md:space-y-0">
            <div className="flex space-x-6 text-xs text-primary-foreground/60">
              <a
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Términos de Servicio
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Cookies
              </a>
            </div>

            <div className="text-xs text-primary-foreground/60">
              Patrocinado oficialmente por el Gobierno Nacional
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
