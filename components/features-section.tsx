import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Bell, MapPin, BarChart3 } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section id="funciones" className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Funciones Principales
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Descubre las características que hacen de RatApp la solución más
            completa para el control de asistencia educativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">
                Registro Diario de Asistencia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sistema automatizado que registra la entrada y salida de cada
                estudiante con precisión, eliminando la necesidad de listas
                manuales y reduciendo errores.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-lg">
                Notificación Automática a Padres
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Los padres reciben alertas inmediatas por SMS, email o push
                notification cuando su hijo llega o se ausenta de clase,
                manteniéndolos siempre informados.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-chart-3" />
              </div>
              <CardTitle className="text-lg">
                Verificación de Presencia Real
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tecnología avanzada de geolocalización y biometría que confirma
                que el estudiante está físicamente presente en el aula, no solo
                registrado.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-chart-4/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-chart-4" />
              </div>
              <CardTitle className="text-lg">Reportes y Estadísticas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dashboards intuitivos con métricas de asistencia, tendencias y
                análisis que ayudan a las academias a tomar decisiones
                informadas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-chart-5/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-chart-5" />
              </div>
              <CardTitle className="text-lg">Integración Completa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Compatible con sistemas académicos existentes y fácil
                implementación sin interrumpir las operaciones diarias de la
                institución.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Soporte 24/7</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Equipo de soporte técnico disponible las 24 horas para resolver
                cualquier inconveniente y garantizar el funcionamiento continuo
                del sistema.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
