'use client'

import { useState } from 'react'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import * as analytics from '@/lib/analytics'

export default function HeroHamburgueria() {
  const [isHovered, setIsHovered] = useState(false)

  const handleDemoClick = () => {
    analytics.trackWhatsAppClick('Hero Hamburgueria - Demo Button')
    const message = "Olá! Gostaria de agendar uma demonstração do Sistema Colibri para minha hamburgueria."
    window.open(`https://wa.me/5569984049494?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleWhatsAppClick = () => {
    analytics.trackWhatsAppClick('Hero Hamburgueria - WhatsApp Link')
    const message = "Olá! Gostaria de falar com um especialista sobre o Sistema Colibri para minha hamburgueria."
    window.open(`https://wa.me/5569984049494?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hamburgueria/v2/hero-hamburgueria-v2.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-azul-confianca/90 to-verde-sucesso/90"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-poppins font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
            Sua hamburgueria está no controle, ou na estatística dos 80% que fecham?
          </h1>
          
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            8 em cada 10 hamburguerias fecham por falta de controle. O Sistema Colibri te dá o controle exato da ficha técnica, custo por item e estoque, para você parar de 'pagar para trabalhar' e começar a lucrar de verdade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleDemoClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="bg-amarelo-destaque hover:bg-yellow-400 text-azul-confianca font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center text-lg"
            >
              QUERO UMA DEMONSTRAÇÃO AGORA
              <ArrowRight 
                className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                  isHovered ? 'translate-x-1' : ''
                }`} 
              />
            </button>
            
            <button 
              onClick={handleWhatsAppClick}
              className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-azul-confianca transition-all duration-300 flex items-center text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Especialista no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}