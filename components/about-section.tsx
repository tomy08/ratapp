import React from 'react'
import { Card, CardContent } from './ui/card'
import { Users, Target, Eye } from 'lucide-react'

export function AboutSection() {
  return (
    <section
      id="quienes-somos"
      className="py-28 bg-gradient-to-b from-background/0 to-background/5"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Quiénes somos</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
            Mistacorp es una empresa dedicada a crear soluciones tecnológicas
            para el sector educativo. Nos enfocamos en diseñar herramientas que
            mejoren la gestión escolar y la comunicación entre instituciones,
            familias y estudiantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="border-0 shadow-md p-6 flex flex-col items-start">
            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Misión</h3>
            <CardContent className="p-0 mt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proveer herramientas tecnológicas que permitan a instituciones
                educativas y familias garantizar la asistencia y seguridad de
                los estudiantes, mejorando transparencia y eficiencia.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md p-6 flex flex-col items-start">
            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 mb-4">
              <Users className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visión</h3>
            <CardContent className="p-0 mt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ser la plataforma líder en Latinoamérica para el control y la
                gestión de asistencia educativa, impulsando una educación más
                segura y confiable.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md p-6 flex flex-col items-start">
            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-foreground/5 mb-4">
              <Eye className="w-7 h-7 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Valores</h3>
            <CardContent className="p-0 mt-0">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>
                  <strong>Transparencia:</strong> Información clara para padres
                  e instituciones.
                </li>
                <li>
                  <strong>Innovación:</strong> Soluciones prácticas y seguras.
                </li>
                <li>
                  <strong>Compromiso:</strong> Soporte y mejoras continuas.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Sobre Mistacorp</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              Mistacorp es una empresa líder en desarrollo de soluciones
              tecnológicas para el sector educativo, con más de 10 años de
              experiencia transformando la gestión académica en América Latina.
              Nuestro compromiso es crear herramientas que mejoren la calidad
              educativa y fortalezcan la comunicación entre instituciones,
              estudiantes y familias.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 21V7a2 2 0 012-2h3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 3v4h10V3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">
                  Años de experiencia
                </div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">
                  Especialistas
                </div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-chart-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-chart-3">15+</div>
                <div className="text-sm text-muted-foreground">
                  Países atendidos
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/5 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Nuestro equipo</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl">
              Un equipo multidisciplinario con experiencia en educación, UX y
              desarrollo de software que trabaja para entregar soluciones de
              impacto.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
