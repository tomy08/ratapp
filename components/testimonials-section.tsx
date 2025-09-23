import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Directora, Academia San José",
      content:
        "RatApp ha transformado completamente nuestro sistema de asistencia. Los padres están más tranquilos y nosotros tenemos un control total. La implementación fue muy sencilla.",
      rating: 5,
      students: "450 estudiantes",
    },
    {
      name: "Carlos Mendoza",
      role: "Coordinador Académico, Instituto Tecnológico del Valle",
      content:
        "Desde que implementamos RatApp, hemos reducido un 85% los errores en el registro de asistencia. La verificación de presencia real es increíble.",
      rating: 5,
      students: "1,200 estudiantes",
    },
    {
      name: "Ana Patricia Ruiz",
      role: "Directora, Colegio Bilingüe Internacional",
      content:
        "Los padres de familia valoran mucho la transparencia que ofrece RatApp. Las notificaciones automáticas han mejorado significativamente la comunicación.",
      rating: 5,
      students: "800 estudiantes",
    },
  ]

  return (
    <section id="testimonios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Testimonios y Casos de Éxito</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Descubre cómo las academias líderes están transformando su gestión de asistencia con RatApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>

                <div className="border-t pt-4">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary font-medium mt-1">{testimonial.students}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>+50 academias activas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>+25,000 estudiantes registrados</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-chart-3 rounded-full" />
              <span>99.8% de precisión</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
