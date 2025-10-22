import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, ArrowRight } from 'lucide-react'

export function NewsSection() {
  const news = [
    {
      date: '15 Enero 2025',
      title: 'RatApp 3.0: Nueva interfaz y funciones mejoradas',
      description:
        'Lanzamos la versión 3.0 con una interfaz más intuitiva, reportes avanzados y mejor integración con sistemas académicos existentes.',
      badge: 'Actualización',
    },
    {
      date: '8 Enero 2025',
      title: 'Integración con Microsoft Teams y Google Classroom',
      description:
        'Ahora RatApp se integra perfectamente con las plataformas educativas más utilizadas para una experiencia unificada.',
      badge: 'Nueva Función',
    },
    {
      date: '22 Diciembre 2024',
      title: 'Soporte para educación híbrida y clases virtuales',
      description:
        'Nueva funcionalidad que permite el control de asistencia tanto en clases presenciales como virtuales.',
      badge: 'Innovación',
    },
  ]

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Noticias y Actualizaciones
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Mantente al día con las últimas mejoras y funcionalidades de RatApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-shadow  group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {item.badge}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
