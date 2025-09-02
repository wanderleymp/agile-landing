'use client'

import { Shield, Star, Award, Users, Building, TrendingUp } from 'lucide-react'

export default function TrustSection() {
  const trustFactors = [
    {
      icon: Shield,
      title: "Máxima Segurança",
      description: "Sistema homologado com certificação bancária para proteção total dos seus dados"
    },
    {
      icon: Star,
      title: "Estabilidade Comprovada",
      description: "Mais de 20 anos no mercado sem interrupções ou falhas críticas"
    },
    {
      icon: TrendingUp,
      title: "Performance Superior",
      description: "Sistema otimizado para alta performance mesmo em picos de movimento"
    }
  ]

  const majorChains = [
    {
      category: "Redes Nacionais",
      examples: [
        "Grandes redes de fast food",
        "Principais franquias de alimentação",
        "Redes de restaurantes corporativos"
      ]
    },
    {
      category: "Franquias Famosas",
      examples: [
        "Franquias de hambúrguer",
        "Redes de pizzarias",
        "Cadeias de lanchonetes"
      ]
    },
    {
      category: "Estabelecimentos Premium",
      examples: [
        "Restaurantes de shopping centers",
        "Casas gastronômicas renomadas",
        "Grupos de entretenimento"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-azul-claro to-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-cinza-escuro mb-6">
            Por Que as <span className="text-azul-confianca">Maiores Redes</span> Confiam no Colibri?
          </h2>
          <p className="text-lg text-cinza-medio max-w-3xl mx-auto">
            O Sistema Colibri é a escolha das principais redes e franquias do Brasil. 
            Confiabilidade, segurança e estabilidade que você pode confiar.
          </p>
        </div>

        {/* Trust Factors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {trustFactors.map((factor, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-azul-confianca to-verde-sucesso rounded-xl mb-6">
                <factor.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-cinza-escuro mb-4">
                {factor.title}
              </h3>
              <p className="text-cinza-medio leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>

        {/* Major Chains */}
        <div className="mb-16">
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-center text-cinza-escuro mb-12">
            Usado pelas Principais Redes do País
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {majorChains.map((chain, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <Building className="w-8 h-8 text-azul-confianca mr-3" />
                  <h4 className="font-poppins font-semibold text-lg text-cinza-escuro">
                    {chain.category}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {chain.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-cinza-medio">
                      <Star className="w-4 h-4 text-amarelo-destaque mr-3 flex-shrink-0" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-azul-confianca to-verde-sucesso rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h4 className="font-poppins font-bold text-2xl md:text-3xl mb-2">20+</h4>
              <p className="opacity-90">Anos de Mercado</p>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h4 className="font-poppins font-bold text-2xl md:text-3xl mb-2">MILHARES</h4>
              <p className="opacity-90">de Estabelecimentos</p>
            </div>
            <div>
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h4 className="font-poppins font-bold text-2xl md:text-3xl mb-2">100%</h4>
              <p className="opacity-90">Seguro e Confiável</p>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h4 className="font-poppins font-bold text-2xl md:text-3xl mb-2">LÍDER</h4>
              <p className="opacity-90">no Segmento</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-cinza-escuro mb-4">
            Junte-se às Maiores Redes do Brasil
          </h3>
          <p className="text-lg text-cinza-medio mb-8">
            Tenha a mesma tecnologia usada pelos líderes do mercado gastronômico
          </p>
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            QUERO O MESMO SISTEMA DAS GRANDES REDES
          </button>
        </div>
      </div>
    </section>
  )
}