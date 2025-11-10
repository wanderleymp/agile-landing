'use client'

import { useState } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import * as analytics from '@/lib/analytics'

export default function CTAFinalHamburgueria() {
  const [isHovered, setIsHovered] = useState(false)

  const handleScheduleClick = () => {
    analytics.trackWhatsAppClick('CTA Final Hamburgueria - Schedule Button')
    const message = "Olá! Gostaria de agendar uma demonstração gratuita do Sistema Colibri para minha hamburgueria."
    window.open(`https://wa.me/5569984049494?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section className="py-20 bg-cinza-claro">
      <div className="section-container">
        <div className="bg-gradient-to-br from-azul-confianca to-verde-sucesso rounded-2xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-6">
            Não seja uma estatística. Tome o controle.
          </h2>
          
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Peça uma demonstração gratuita e veja como a Agile + Colibri podem garantir o lucro e a sobrevivência do seu negócio.
          </p>
          
          <button 
            onClick={handleScheduleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-amarelo-destaque hover:bg-yellow-400 text-azul-confianca font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center mx-auto text-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            AGENDAR MINHA DEMONSTRAÇÃO
            <ArrowRight 
              className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                isHovered ? 'translate-x-1' : ''
              }`} 
            />
          </button>
        </div>
      </div>
    </section>
  )
}