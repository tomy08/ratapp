import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
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
              <a
                href="https://www.linkedin.com/in/luis-manuel-rodriguez-m%C3%A1rquez-b2208729b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/luismaxd27?igsh=MW5zYmUxb3ZtZmowMQ=="
                className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Mistacorp</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">
                  Luis.manuel.rodriguez.0827@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">
                  +54 11 62688712‬
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
