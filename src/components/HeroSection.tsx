'use client'

import { CheckCircle, Trophy, Target, BarChart3, MessageCircle } from 'lucide-react'
import OptimizedImage from './ImageManager'

export default function HeroSection() {
  const handleWhatsApp = () => {
    const message = "Olá! Quero agendar uma demonstração do sistema Colibri."
    const whatsappUrl = `https://wa.me/5569984049494?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleDemo = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  const benefits = [
    "Aumente 40% a agilidade no atendimento",
    "Controle total do estoque e vendas", 
    "Integração com principais plataformas de delivery",
    "Economia fiscal com planejamento tributário",
    "Suporte especializado em RO e AC"
  ]

  const badges = [
    {
      icon: Trophy,
      title: "Representante Oficial desde 2002",
      subtitle: "20 anos de experiência comprovada"
    },
    {
      icon: BarChart3,
      title: "Restaurantes Automatizados",
      subtitle: "Atendemos todo tipo de estabelecimento"
    },
    {
      icon: Target,
      title: "Líderes em RO e AC",
      subtitle: "Atendimento presencial e remoto"
    }
  ]

  return (
    <section id="inicio" className="bg-gradient-to-br from-azul-claro via-white to-verde-claro responsive-py">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cinza-escuro leading-tight mb-4 md:mb-6 animate-slide-up">
              Transforme Seu Restaurante com o{' '}
              <span className="text-azul-confianca">Sistema Colibri</span>{' '}
              + <span className="text-verde-sucesso">Contabilidade Especializada</span>
            </h1>
            <p className="responsive-text-lg text-cinza-medio mb-6 md:mb-8 leading-relaxed animate-fade-in">
              Mais de 20 anos automatizando restaurantes e bares em Rondônia e Acre. 
              O sistema de PDV mais confiável do Brasil + consultoria contábil completa 
              para maximizar seus resultados.
            </p>

            {/* Benefits */}
            <div className="mb-6 md:mb-8 space-y-2 md:space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-verde-sucesso flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-cinza-escuro font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
              <button 
                onClick={handleDemo}
                className="btn-primary responsive-text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto focus-ring"
              >
                SOLICITAR DEMONSTRAÇÃO GRATUITA
              </button>
              <button 
                onClick={handleWhatsApp}
                className="btn-secondary responsive-text-lg px-6 md:px-8 py-3 md:py-4 flex items-center justify-center space-x-2 w-full sm:w-auto focus-ring"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span>FALAR NO WHATSAPP AGORA</span>
              </button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-xs md:text-sm text-cinza-medio">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-verde-sucesso flex-shrink-0" />
                <span>Demonstração 100% gratuita</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-verde-sucesso flex-shrink-0" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-verde-sucesso flex-shrink-0" />
                <span>Atendimento em até 24h</span>
              </div>
            </div>
          </div>

          {/* Visual/Image Placeholder */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl p-6 md:p-8 relative overflow-hidden card-hover">
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-azul-confianca to-verde-sucesso rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 opacity-10"></div>
              <div className="text-center relative z-10">
                {/* Logo do Colibri */}
                <div className="mb-6">
                  <OptimizedImage
                    src="/images/logos/colibri-logo.png"
                    alt="Sistema Colibri"
                    width={150}
                    height={60}
                    className="h-12 w-auto mx-auto mb-4"
                    fallback="/images/logos/colibri-placeholder.svg"
                  />
                </div>
                
                <div className="inline-block bg-gradient-to-r from-azul-confianca to-verde-sucesso text-white p-4 md:p-6 rounded-xl md:rounded-2xl mb-4 md:mb-6">
                  <OptimizedImage
                    src="/images/logos/colibri-logo.png"
                    alt="Sistema Colibri"
                    width={64}
                    height={64}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    fallback="/images/logos/colibri-placeholder.svg"
                    priority
                  />
                </div>
                <h3 className="font-poppins font-bold responsive-text-2xl text-cinza-escuro mb-3 md:mb-4">
                  Sistema Colibri
                </h3>
                <p className="text-cinza-medio mb-4 md:mb-6 responsive-text-sm">
                  A solução mais completa para automação de restaurantes
                </p>
                <div className="bg-cinza-claro rounded-lg p-3 md:p-4">
                  <p className="text-xs md:text-sm text-cinza-escuro font-semibold">
                    "Em 1 dia seu restaurante estará completamente automatizado"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Badges de Credibilidade */}
        <div className="mt-12 md:mt-16 lg:mt-20 responsive-grid-3">
          {badges.map((badge, index) => (
            <div key={index} className="text-center group animate-slide-up" style={{animationDelay: `${(index + 1) * 0.2}s`}}>
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg mb-3 md:mb-4 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <badge.icon className="w-6 h-6 md:w-8 md:h-8 text-azul-confianca" />
              </div>
              <h4 className="font-poppins font-semibold responsive-text-lg text-cinza-escuro mb-1 md:mb-2">
                {badge.title}
              </h4>
              <p className="text-cinza-medio responsive-text-sm">
                {badge.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}