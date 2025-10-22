import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Heart } from 'lucide-react'

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            ¿Qué es RatApp?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            RatApp es una aplicación innovadora de asistencia educativa que
            utiliza tecnología de verificación de presencia para garantizar que
            los estudiantes realmente asistan a clases. Nuestra plataforma
            conecta academias, padres y estudiantes en un ecosistema
            transparente y confiable respaldado por el gobierno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">
                Beneficios para Academias
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Control automatizado de asistencia sin intervención manual
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Reportes detallados y estadísticas de asistencia en tiempo
                  real
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Reducción de costos administrativos y errores humanos
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Mayor transparencia y confianza con los padres de familia
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-xl">Beneficios para Padres</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Notificaciones instantáneas sobre la asistencia de sus hijos
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Verificación real de que su hijo está presente en clase
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Historial completo de asistencia accesible desde cualquier
                  dispositivo
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Tranquilidad y confianza en la educación de sus hijos
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
