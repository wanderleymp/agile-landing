'use client'

import { Utensils, Pizza, Beer, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function SegmentosSection() {
  const segmentos = [
    {
      icon: Utensils,
      title: "Hamburguerias",
      description: "Controle de ficha técnica, custo por item e integração com iFood. Evite a estatística dos 80% que fecham por falta de controle.",
      link: "/hamburgueria",
      active: true
    },
    {
      icon: Pizza,
      title: "Pizzarias",
      description: "Gestão completa de delivery, controle de ingredientes e integração total do pedido ao motoboy.",
      link: "#",
      active: false
    },
    {
      icon: Beer,
      title: "Bares e Alto Movimento",
      description: "Comandas digitais rápidas, controle de estoque de bebidas em tempo real e fechamento de caixa sem furos.",
      link: "#",
      active: false
    },
    {
      icon: ShoppingCart,
      title: "Pastelarias e Espetinhos",
      description: "Da pequena barraca à rede. O sistema que cresce com você com gestão simples e controle total.",
      link: "#",
      active: false
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-cinza-claro to-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-cinza-escuro mb-4">
            A Solução Exata que o Seu Negócio Precisa
          </h2>
          <h3 className="font-poppins font-semibold text-xl text-cinza-medio max-w-3xl mx-auto">
            Não vendemos um sistema genérico. Temos uma solução testada e aprovada para o seu segmento.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segmentos.map((segmento, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 shadow-lg card-hover transition-all duration-300 hover:shadow-xl ${
                segmento.active ? 'border-2 border-azul-confianca' : 'opacity-80'
              }`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                  segmento.active 
                    ? 'bg-gradient-to-br from-azul-confianca to-verde-sucesso' 
                    : 'bg-cinza-claro'
                }`}>
                  <segmento.icon className={`w-8 h-8 ${
                    segmento.active ? 'text-white' : 'text-cinza-medio'
                  }`} />
                </div>
                <h3 className="font-poppins font-bold text-xl text-cinza-escuro">
                  {segmento.title}
                </h3>
              </div>
              
              <p className="text-cinza-medio mb-6">
                {segmento.description}
              </p>
              
              {segmento.active ? (
                <Link 
                  href={segmento.link}
                  className="btn-primary inline-block"
                >
                  VER SOLUÇÃO
                </Link>
              ) : (
                <button 
                  disabled
                  className="bg-gray-300 text-gray-500 font-semibold py-3 px-6 rounded-lg cursor-not-allowed"
                >
                  EM BREVE
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}