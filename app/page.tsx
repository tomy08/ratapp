import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { BenefitsSection } from '@/components/benefits-section'
import { FeaturesSection } from '@/components/features-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FAQSection } from '@/components/faq-section'
import { NewsSection } from '@/components/news-section'

import { MultimediaSection } from '@/components/multimedia-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <NewsSection />
        <MultimediaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
