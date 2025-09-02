'use client'

import { Clock, Zap, Gift, Phone, MessageCircle, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function CTASection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        } else {
          // Reset to 7 days when reaches zero
          return { days: 7, hours: 23, minutes: 59, seconds: 59 }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleWhatsApp = () => {
    const message = "Olá! Quero aproveitar a promoção especial do sistema Colibri. Podem me ajudar?"
    const whatsappUrl = `https://wa.me/5569984049494?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCall = () => {
    window.open('tel:+556998404949', '_self')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-azul-confianca via-verde-sucesso to-azul-confianca relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 border-2 border-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center text-white mb-12">
          <div className="inline-flex items-center justify-center bg-laranja-energia text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-bounce">
            <Gift className="w-4 h-4 mr-2" />
            OFERTA ESPECIAL LIMITADA
          </div>
          
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
            Implante o Sistema Colibri
            <span className="block text-amarelo-destaque">COM DESCONTO ESPECIAL</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Aproveite nossa promoção exclusiva para novos clientes em RO e AC
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20">
          <div className="text-center mb-6">
            <h3 className="font-poppins font-bold text-2xl text-white mb-2 flex items-center justify-center">
              <Clock className="w-6 h-6 mr-3 text-amarelo-destaque" />
              Oferta Expira em:
            </h3>
          </div>
          
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-2">
                <span className="font-poppins font-bold text-2xl md:text-3xl text-cinza-escuro">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
              </div>
              <span className="text-white text-sm">DIAS</span>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-2">
                <span className="font-poppins font-bold text-2xl md:text-3xl text-cinza-escuro">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
              </div>
              <span className="text-white text-sm">HORAS</span>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-2">
                <span className="font-poppins font-bold text-2xl md:text-3xl text-cinza-escuro">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
              </div>
              <span className="text-white text-sm">MIN</span>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-2">
                <span className="font-poppins font-bold text-2xl md:text-3xl text-cinza-escuro">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
              <span className="text-white text-sm">SEG</span>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amarelo-destaque rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-lg text-white">
                Implementação Expressa
              </h3>
            </div>
            <p className="text-white/90 text-sm">
              Sistema funcionando em até 48 horas após a contratação
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-laranja-energia rounded-lg flex items-center justify-center mr-4">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-lg text-white">
                Treinamento Gratuito
              </h3>
            </div>
            <p className="text-white/90 text-sm">
              Capacitação completa da sua equipe sem custo adicional
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-verde-sucesso rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-lg text-white">
                Suporte Premium
              </h3>
            </div>
            <p className="text-white/90 text-sm">
              3 meses de suporte prioritário incluído na promoção
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <button
              onClick={handleWhatsApp}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center group"
            >
              <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              QUERO APROVEITAR AGORA
            </button>
            
            <button
              onClick={handleCall}
              className="flex-1 bg-white/20 backdrop-blur-lg border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-azul-confianca shadow-xl flex items-center justify-center group"
            >
              <Phone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              LIGAR AGORA
            </button>
          </div>

          <p className="text-white/80 text-sm mt-6">
            💬 Atendimento imediato pelo WhatsApp • 📞 (69) 98404-9494
          </p>
          
          <div className="mt-8 text-center">
            <p className="text-amarelo-destaque font-semibold text-lg">
              ⚡ Apenas os primeiros 20 clientes do mês garantem essa promoção!
            </p>
            <p className="text-white/90 text-sm mt-2">
              Não perca essa oportunidade única de revolucionar seu restaurante
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}