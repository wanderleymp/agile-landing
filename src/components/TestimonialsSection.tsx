'use client'

import { Star, Quote, User, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Proprietário",
      business: "Pizzaria Bella Vista",
      location: "Porto Velho, RO",
      rating: 5,
      text: "O sistema Colibri transformou completamente nossa operação. Reduzimos em 40% o tempo de atendimento e aumentamos significativamente nosso faturamento. O suporte da Agile é excepcional!",
      highlight: "40% mais rápido no atendimento"
    },
    {
      name: "Maria Santos",
      role: "Gerente",
      business: "Restaurante Sabor Caseiro", 
      location: "Rio Branco, AC",
      rating: 5,
      text: "Desde que implementamos o Colibri, nossa gestão ficou muito mais profissional. Os relatórios são completos e conseguimos controlar todo o estoque em tempo real. Recomendo!",
      highlight: "Controle total do estoque"
    },
    {
      name: "João Mendes",
      role: "Sócio-Proprietário",
      business: "Hamburgueria Premium",
      location: "Porto Velho, RO", 
      rating: 5,
      text: "A integração com os deliverys foi um divisor de águas. Conseguimos gerenciar todos os pedidos em um só lugar e nossa eficiência aumentou muito. Vale cada centavo investido!",
      highlight: "Integração total com deliverys"
    },
    {
      name: "Ana Paula",
      role: "Administradora",
      business: "Lanchonete Central",
      location: "Cruzeiro do Sul, AC",
      rating: 5,
      text: "O que mais me impressiona é a confiabilidade do sistema. Nunca tivemos problemas e quando precisamos do suporte, eles são muito rápidos. Nossa produtividade aumentou muito!",
      highlight: "100% confiável"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-white to-cinza-claro">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-cinza-escuro mb-6">
            O Que Nossos <span className="text-azul-confianca">Clientes Dizem</span>
          </h2>
          <p className="text-lg text-cinza-medio max-w-3xl mx-auto">
            Histórias reais de sucesso de restaurantes que transformaram suas operações 
            com o sistema Colibri e os serviços da Agile Gestão Empresarial.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gradient-to-br from-azul-confianca to-verde-sucesso rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-6">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 text-amarelo-destaque fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-cinza-escuro text-center leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Highlight */}
              <div className="text-center mb-8">
                <span className="inline-block bg-gradient-to-r from-azul-confianca to-verde-sucesso text-white px-6 py-2 rounded-full text-sm font-semibold">
                  {testimonials[currentTestimonial].highlight}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-azul-confianca to-verde-sucesso rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-poppins font-bold text-lg text-cinza-escuro">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-cinza-medio">
                    {testimonials[currentTestimonial].role} - {testimonials[currentTestimonial].business}
                  </p>
                  <p className="text-sm text-cinza-medio flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-azul-confianca' 
                    : 'bg-cinza-medio hover:bg-azul-confianca/50'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-azul-confianca to-verde-sucesso rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-poppins font-bold text-2xl text-cinza-escuro mb-2">4.9/5</h3>
            <p className="text-cinza-medio">Avaliação Média</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-verde-sucesso to-azul-confianca rounded-xl flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-poppins font-bold text-2xl text-cinza-escuro mb-2">500+</h3>
            <p className="text-cinza-medio">Clientes Satisfeitos</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-laranja-energia to-amarelo-destaque rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-poppins font-bold text-2xl text-cinza-escuro mb-2">2</h3>
            <p className="text-cinza-medio">Estados Atendidos</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amarelo-destaque to-laranja-energia rounded-xl flex items-center justify-center mx-auto mb-4">
              <Quote className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-poppins font-bold text-2xl text-cinza-escuro mb-2">98%</h3>
            <p className="text-cinza-medio">Recomendam</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-cinza-escuro mb-4">
            Seja o Próximo Caso de Sucesso
          </h3>
          <p className="text-lg text-cinza-medio mb-8">
            Transforme seu restaurante como milhares de outros empreendedores já fizeram
          </p>
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            QUERO TRANSFORMAR MEU RESTAURANTE
          </button>
        </div>
      </div>
    </section>
  )
}