import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Cómo verifico que mi hijo realmente asistió a clase mediante la app?",
      answer:
        "RatApp utiliza tecnología de geolocalización y verificación biométrica para confirmar que el estudiante está físicamente presente en el aula. Recibirás una notificación con la hora exacta de entrada y salida, junto con la confirmación de presencia real verificada por nuestro sistema.",
    },
    {
      question: "¿Qué necesito para que mi institución educativa pueda comenzar a usar RatApp?",
      answer:
        "Solo necesitas dispositivos móviles o tablets para el registro, conexión a internet estable, y nuestro equipo se encarga de toda la configuración. Proporcionamos capacitación completa al personal y soporte técnico durante la implementación. El proceso de instalación toma menos de una semana.",
    },
    {
      question: "¿La aplicación tiene costo para los padres o solo para la academia?",
      answer:
        "La aplicación es completamente gratuita para los padres de familia. Solo las academias pagan una suscripción mensual basada en el número de estudiantes. Los padres pueden descargar la app y recibir todas las notificaciones sin ningún costo adicional.",
    },
    {
      question: "¿Qué tan segura es la información de los estudiantes?",
      answer:
        "RatApp cumple con los más altos estándares de seguridad y privacidad. Todos los datos están encriptados, almacenados en servidores seguros y respaldados por el gobierno. Solo el personal autorizado de la academia y los padres pueden acceder a la información de cada estudiante.",
    },
    {
      question: "¿Funciona sin conexión a internet?",
      answer:
        "RatApp puede funcionar temporalmente sin conexión, almacenando los registros localmente y sincronizándolos automáticamente cuando se restablezca la conexión. Sin embargo, las notificaciones en tiempo real requieren conexión a internet.",
    },
    {
      question: "¿Qué pasa si un estudiante olvida su dispositivo?",
      answer:
        "Las academias pueden registrar manualmente la asistencia en casos excepcionales. El sistema permite registros manuales con justificación, manteniendo la integridad de los datos y notificando a los padres sobre el método de registro utilizado.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre RatApp y su implementación.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
