'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MapPin, Download } from 'lucide-react'
import { toast } from 'sonner' // Notificaciones tipo toast

export function ContactSection() {
  // Estado del formulario
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    studentsRange: '',
    message: '',
  })
  // Estado de carga al enviar
  const [loading, setLoading] = useState(false)

  // Manejar envío del formulario
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email) {
      toast.error('El nombre y email son obligatorios') //Toast de error si faltan campos obligatorios
      return
    }
    setLoading(true)
    try {
      // Enviar datos a Formspree
      const endpoint = `https://formspree.io/f/mpwygjnz`
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        toast.success('Solicitud enviada correctamente. ¡Gracias!') // Toast de éxito
        setForm({
          name: '',
          email: '',
          phone: '',
          institution: '',
          studentsRange: '',
          message: '',
        })
      } else {
        toast.error(
          data.error || 'Error al enviar vía Formspree. Intenta nuevamente.'
        )
      }
    } catch (err) {
      toast.error('Error de red. Intenta nuevamente más tarde.')
    } finally {
      setLoading(false) // Terminar estado de carga
    }
  }

  return (
    <section id="contacto" className="py-8">
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
                      +54 11 62688712
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+54 11 62688712"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution">Tipo de institución</Label>
                    <select
                      id="institution"
                      value={form.institution}
                      onChange={(e) =>
                        setForm({ ...form, institution: e.target.value })
                      }
                      className="w-full border border-border rounded-md px-3 py-2 bg-input text-foreground"
                    >
                      <option value="">Seleccionar</option>
                      <option value="academy">Academia privada</option>
                      <option value="school">Colegio público</option>
                      <option value="university">Universidad</option>
                      <option value="institute">Instituto técnico</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="students">
                    Número aproximado de estudiantes
                  </Label>
                  <select
                    id="students"
                    value={form.studentsRange}
                    onChange={(e) =>
                      setForm({ ...form, studentsRange: e.target.value })
                    }
                    className="w-full border border-border rounded-md px-3 py-2 bg-input text-foreground"
                  >
                    <option value="">Seleccionar rango</option>
                    <option value="1-100">1 - 100 estudiantes</option>
                    <option value="101-500">101 - 500 estudiantes</option>
                    <option value="501-1000">501 - 1,000 estudiantes</option>
                    <option value="1000+">Más de 1,000 estudiantes</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Cuéntanos sobre tus necesidades específicas..."
                    rows={4}
                  />
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Enviando...' : 'Enviar Solicitud'}
                </Button>
              </form>

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
