'use client'

import { Calculator, Tablet, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

export default function ControleTotalSection() {
  const features = [
    {
      icon: Calculator,
      title: "Saiba o custo exato do seu 'Smash Burger'",
      description: "Controle o custo de cada ingrediente (150g de carne, 30g de queijo, 1 pão). O Colibri dá baixa automática no estoque a cada venda, baseado na sua ficha técnica.",
      image: "/images/hamburgueria/ficha-tecnica-hamburgueria-v2.jpg"
    },
    {
      icon: Tablet,
      title: "Comanda que não trava na hora do 'rush'",
      description: "Um PDV rápido (tablet, celular ou computador) que envia o pedido direto para a cozinha (KDS). Menos erros, clientes mais felizes.",
      image: "/images/hamburgueria/pdv-hamburgueria-v2.jpg"
    },
    {
      icon: ShoppingBag,
      title: "Integração total com iFood e Delivery Próprio",
      description: "Receba pedidos do iFood ou do seu app próprio direto no caixa, sem redigitação. O pedido já entra na fila da cozinha e no controle de estoque.",
      image: "/images/hamburgueria/delivery-hamburgueria-v2.jpg"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-cinza-escuro mb-6">
            Do pedido ao lucro: o controle que sua hamburgueria precisa.
          </h2>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
            >
              <div className="md:w-1/2">
                <div className="bg-cinza-claro rounded-xl p-6 shadow-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="w-16 h-16 bg-azul-confianca rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-2xl text-cinza-escuro mb-4">
                  {feature.title}
                </h3>
                <p className="text-cinza-medio text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}