import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Shield, Users } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="inicio" className="relative py-10 pt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            <Shield className="w-3 h-3 mr-1" />
            Patrocinado por el Gobierno
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            La asistencia estudiantil del futuro,
            <span className="text-primary"> hoy</span>
          </h1>

          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
            RatApp revoluciona el control de asistencia educativa con tecnología
            avanzada, proporcionando transparencia total para academias, padres
            y estudiantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-base px-8">
              Solicitar Demo Gratuita
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 bg-transparent"
            >
              Ver Video Explicativo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Verificación Real</h3>
              <p className="text-sm text-muted-foreground">
                Confirma la presencia física del estudiante en el aula
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Notificación Automática</h3>
              <p className="text-sm text-muted-foreground">
                Los padres reciben alertas instantáneas sobre la asistencia
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-chart-3" />
              </div>
              <h3 className="font-semibold mb-2">Respaldo Gubernamental</h3>
              <p className="text-sm text-muted-foreground">
                Plataforma confiable con el aval del gobierno
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
