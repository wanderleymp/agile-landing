'use client'

import { Users, Calendar, MapPin, Award, Shield, Headphones } from 'lucide-react'

export default function CredibilitySection() {
  const stats = [
    {
      icon: Calendar,
      number: "20 ANOS",
      label: "de Experiência",
      subtitle: "no Mercado Especializado"
    },
    {
      icon: Users,
      number: "COLIBRI",
      label: "Sistema Confiável",
      subtitle: "Escolha das Melhores Redes"
    },
    {
      icon: MapPin,
      number: "2 ESTADOS",
      label: "Cobertura Total",
      subtitle: "Rondônia e Acre - Presencial e Remoto"
    }
  ]

  const differentials = [
    {
      icon: Award,
      title: "Representante oficial",
      description: "Sistema Colibri em RO/AC"
    },
    {
      icon: Users,
      title: "Especialização exclusiva",
      description: "em restaurantes há 2 décadas"
    },
    {
      icon: MapPin,
      title: "Atendimento especializado",
      description: "presencial e remoto"
    },
    {
      icon: Shield,
      title: "Suporte técnico especializado",
      description: "plantão para emergências"
    },
    {
      icon: Headphones,
      title: "Consultoria integrada",
      description: "tecnologia + contabilidade"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-cinza-escuro mb-6">
            Por Que Somos a Escolha <span className="text-azul-confianca">#1</span> dos 
            Restaurateurs em RO e AC?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-cinza-medio leading-relaxed">
              Somos <strong>representante oficial</strong> 
              do Sistema Colibri com contabilidade especializada no setor gastronômico. Nossa experiência 
              única garante que você tenha <strong>tecnologia de ponta E otimização fiscal</strong> adequada 
              para seu negócio.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-azul-confianca to-verde-sucesso rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="font-poppins font-bold text-3xl md:text-4xl text-azul-confianca">
                  {stat.number}
                </h3>
                <p className="font-poppins font-semibold text-xl text-cinza-escuro">
                  {stat.label}
                </p>
                <p className="text-cinza-medio">
                  {stat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Diferenciais */}
        <div>
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-center text-cinza-escuro mb-12">
            Diferenciais Competitivos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <div key={index} className="bg-cinza-claro rounded-xl p-6 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-azul-confianca rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-lg text-cinza-escuro mb-2">
                      {item.title}
                    </h4>
                    <p className="text-cinza-medio">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-azul-confianca to-verde-sucesso rounded-2xl p-8 text-white">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4">
              Pronto para Transformar Seu Restaurante?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Junte-se aos mais de 500 restaurantes que já confiam na Agile
            </p>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-azul-confianca font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              QUERO FAZER PARTE DESSE SUCESSO
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}