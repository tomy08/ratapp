import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Mail, Phone, MapPin, Download } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            ¿Listo para transformar la gestión de asistencia en tu academia?
            Contáctanos para una demo personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      Luis.manuel.rodriguez.0827@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-sm text-muted-foreground">
                      +54 11 62688712‬
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-chart-3/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-chart-3" />
                  </div>
                  <div>
                    <p className="font-medium">Oficina Principal</p>
                    <p className="text-sm text-muted-foreground">
                      Av. Lope de Vega, 2150
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-6">
              <h4 className="font-semibold mb-4 flex items-center">
                <Download className="w-5 h-5 mr-2 text-primary" />
                Descarga RatApp
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Disponible para dispositivos iOS y Android. Descarga gratuita
                para padres de familia.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1">Descargar para iOS</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Descargar para Android
                </Button>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Solicitar Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    placeholder="++54 11 62688712‬
"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="institution">Tipo de institución</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="academy">Academia privada</SelectItem>
                      <SelectItem value="school">Colegio público</SelectItem>
                      <SelectItem value="university">Universidad</SelectItem>
                      <SelectItem value="institute">
                        Instituto técnico
                      </SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="students">
                  Número aproximado de estudiantes
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar rango" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-100">1 - 100 estudiantes</SelectItem>
                    <SelectItem value="101-500">
                      101 - 500 estudiantes
                    </SelectItem>
                    <SelectItem value="501-1000">
                      501 - 1,000 estudiantes
                    </SelectItem>
                    <SelectItem value="1000+">
                      Más de 1,000 estudiantes
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos sobre tus necesidades específicas..."
                  rows={4}
                />
              </div>

              <Button className="w-full" size="lg">
                Enviar Solicitud
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Al enviar este formulario, aceptas nuestros términos de
                privacidad y autorizas que te contactemos para brindarte
                información sobre RatApp.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
