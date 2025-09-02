'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const faqs = [
    {
      question: "Quanto tempo demora para implementar o Sistema Colibri?",
      answer: "A implementação completa do Sistema Colibri é feita em apenas 1 dia. Nossa equipe vai até seu estabelecimento, instala o sistema, configura todos os módulos conforme sua necessidade e treina toda sua equipe para uso imediato."
    },
    {
      question: "O sistema funciona sem internet?",
      answer: "Sim! O Sistema Colibri funciona normalmente mesmo sem conexão com a internet. Todos os dados ficam salvos localmente e são sincronizados automaticamente quando a conexão é reestabelecida."
    },
    {
      question: "Quais plataformas de delivery são integradas?",
      answer: "O sistema integra automaticamente com as principais plataformas de delivery do mercado, incluindo iFood, Uber Eats, Rappi e outras. Você também pode gerenciar seu delivery próprio através do sistema."
    },
    {
      question: "Existe fidelidade ou contrato longo?",
      answer: "Trabalhamos com contratos flexíveis. Você pode escolher entre diferentes modalidades de pagamento e não há multas por cancelamento. Nossa confiança está na qualidade do serviço prestado."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte técnico especializado com plantão para emergências. Nossa equipe conhece a realidade de RO e AC e pode atender presencialmente quando necessário, com tempo de resposta de até 4 horas."
    },
    {
      question: "Os serviços contábeis são obrigatórios?",
      answer: "Não, os serviços são independentes. Você pode contratar apenas o Sistema Colibri, apenas a contabilidade, ou ambos. Muitos clientes optam pelos dois serviços pela sinergia e economia que proporcionam juntos."
    },
    {
      question: "O sistema é difícil de aprender?",
      answer: "Não! O Sistema Colibri foi desenvolvido pensando na simplicidade. Com interface intuitiva e treinamento completo da nossa equipe, seus funcionários estarão operando com confiança no primeiro dia."
    },
    {
      question: "Posso testar antes de decidir?",
      answer: "Claro! Oferecemos demonstração completa e gratuita do sistema funcionando no seu tipo de estabelecimento. Você vai ver na prática como o Colibri pode transformar sua operação."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section className="responsive-py bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-azul-confianca rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-poppins font-bold responsive-text-3xl text-cinza-escuro mb-6">
            Perguntas <span className="text-azul-confianca">Frequentes</span>
          </h2>
          <p className="responsive-text-lg text-cinza-medio max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre o Sistema Colibri e nossos serviços. 
            Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-cinza-claro rounded-xl overflow-hidden card-hover"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-azul-confianca focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-poppins font-semibold responsive-text-lg text-cinza-escuro pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItem === index ? (
                        <ChevronUp className="w-5 h-5 text-azul-confianca" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-azul-confianca" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openItem === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-gray-200">
                      <p className="responsive-text-base text-cinza-medio leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="responsive-text-lg text-cinza-medio mb-6">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://wa.me/5569984049494?text=Olá! Tenho algumas dúvidas sobre o Sistema Colibri.', '_blank')}
              className="btn-primary"
            >
              Falar no WhatsApp
            </button>
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Solicitar Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}