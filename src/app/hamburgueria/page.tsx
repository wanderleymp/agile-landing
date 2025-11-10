import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroHamburgueria from '@/components/HeroHamburgueria'
import ControleTotalSection from '@/components/ControleTotalSection'
import ProvaSocialSection from '@/components/ProvaSocialSection'
import CTAFinalHamburgueria from '@/components/CTAFinalHamburgueria'
import WhatsAppButton from '@/components/WhatsAppButton'
import ImplantacaoSection from '@/components/ImplantacaoSection'

export default function HamburgueriaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroHamburgueria />
      <ControleTotalSection />
      <ImplantacaoSection />
      <ProvaSocialSection />
      <CTAFinalHamburgueria />
      <Footer />
      
      {/* WhatsApp Float Button */}
      <WhatsAppButton />
    </main>
  )
}