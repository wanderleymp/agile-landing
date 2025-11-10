'use client'

import { Calendar, Wrench, Headphones } from 'lucide-react'

export default function ImplantacaoSection() {
  const steps = [
    {
      icon: Calendar,
      title: "Agende sua Demo",
      description: "Analisamos seu negócio e mostramos a solução exata."
    },
    {
      icon: Wrench,
      title: "Implantação e Treinamento",
      description: "Nossa equipe (com 25 anos de experiência) instala e treina todo o seu time."
    },
    {
      icon: Headphones,
      title: "Suporte Local (RO/AC)",
      description: "Você nunca fica na mão. Tenha suporte rápido e local quando precisar."
    }
  ]

  return (
    <section className="py-20 bg-cinza-claro">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-cinza-escuro mb-4">
            Como funciona a implantação?
          </h2>
          <p className="text-lg text-cinza-medio max-w-3xl mx-auto">
            Um processo simples e eficiente para garantir que você tenha sucesso com o Colibri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg card-hover text-center"
            >
              <div className="w-20 h-20 bg-azul-confianca rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-cinza-escuro mb-4">
                {step.title}
              </h3>
              <p className="text-cinza-medio">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}