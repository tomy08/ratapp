import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, Building2, Users, Award } from 'lucide-react'

export function MultimediaSection() {
  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Conoce Mistacorp
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Descubre las instalaciones y el equipo detrás de RatApp, la empresa
            líder en soluciones educativas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <img
                  src="/modern-office-building-corporate-headquarters.jpg"
                  alt="Instalaciones de Mistacorp"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-16 h-16 p-0">
                    <Play className="w-6 h-6 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sobre Mistacorp</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mistacorp es una empresa líder en desarrollo de soluciones
                tecnológicas para el sector educativo, con más de 10 años de
                experiencia transformando la gestión académica en América
                Latina. Nuestro compromiso es crear herramientas que mejoren la
                calidad educativa y fortalezcan la comunicación entre
                instituciones, estudiantes y familias.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">
                  Años de experiencia
                </div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">
                  Especialistas
                </div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-chart-3" />
                </div>
                <div className="text-2xl font-bold text-chart-3">15+</div>
                <div className="text-sm text-muted-foreground">
                  Países atendidos
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="outline" size="lg">
                Ver video completo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
