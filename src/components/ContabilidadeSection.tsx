'use client'

import { Calculator, FileText, TrendingUp, Shield, Phone, MessageCircle, CheckCircle } from 'lucide-react'

export default function ContabilidadeSection() {
  const contabilidadeServices = [
    {
      icon: FileText,
      title: "Escrituração Fiscal",
      description: "SPED Fiscal, ECF, DCTF e todas as obrigações acessórias",
      features: [
        "SPED Fiscal automatizado",
        "ECF - Escrituração Contábil Fiscal", 
        "DCTF - Declaração de Débitos",
        "Livros fiscais digitais"
      ]
    },
    {
      icon: Calculator,
      title: "Contabilidade Especializada",
      description: "Contabilidade específica para restaurantes e bares",
      features: [
        "Classificação adequada por setor",
        "Controle de estoque integrado",
        "Apuração de custos por produto",
        "Relatórios gerenciais específicos"
      ]
    },
    {
      icon: TrendingUp,
      title: "Consultoria Empresarial",
      description: "Orientação estratégica para crescimento do negócio",
      features: [
        "Análise de viabilidade",
        "Planejamento tributário",
        "Consultoria em expansão",
        "Indicadores de performance"
      ]
    },
    {
      icon: Shield,
      title: "Compliance Tributário",
      description: "Mantenha seu negócio sempre em dia com o fisco",
      features: [
        "Monitoramento constante",
        "Atualizações automáticas",
        "Suporte em fiscalizações",
        "Regularização de pendências"
      ]
    }
  ]

  const diferenciais = [
    "✅ **20+ anos** de experiência no setor gastronômico",
    "✅ **Integração total** com sistema Colibri",
    "✅ **Plantão contábil** para emergências",
    "✅ **Relatórios online** 24h por dia",
    "✅ **Suporte especializado** RO/AC",
    "✅ **Preços competitivos** para o mercado regional"
  ]

  const handleWhatsApp = (service: string) => {
    const message = `Olá! Gostaria de informações sobre ${service} para meu restaurante.`
    const whatsappUrl = `https://wa.me/556933017414?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contabilidade" className="py-20 bg-gradient-to-br from-white to-azul-claro">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-cinza-escuro mb-6">
            <span className="text-azul-confianca">Contabilidade Especializada</span> para Restaurantes
          </h2>
          <p className="text-lg text-cinza-medio max-w-3xl mx-auto">
            Além do sistema Colibri, oferecemos contabilidade completa especializada no setor gastronômico. 
            Mantenha seu negócio sempre em dia com o fisco e tome decisões baseadas em dados precisos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contabilidadeServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-azul-confianca to-verde-sucesso rounded-xl flex items-center justify-center mr-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-xl text-cinza-escuro">
                    {service.title}
                  </h3>
                  <p className="text-cinza-medio">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-verde-sucesso mt-0.5 flex-shrink-0" />
                    <span className="text-cinza-escuro">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleWhatsApp(service.title)}
                className="btn-secondary w-full"
              >
                SOLICITAR ORÇAMENTO
              </button>
            </div>
          ))}
        </div>

        {/* Diferenciais */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16">
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-center text-cinza-escuro mb-8">
            Por Que Escolher a Agile para sua Contabilidade?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diferenciais.map((diferencial, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="text-lg" dangerouslySetInnerHTML={{ __html: diferencial }} />
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-azul-confianca to-verde-sucesso rounded-2xl p-8 text-white text-center">
          <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4">
            Quer Integrar Contabilidade + Sistema Colibri?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Tenha tudo em um só lugar: sistema de PDV integrado com contabilidade especializada
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <button 
              onClick={() => handleWhatsApp('contabilidade completa')}
              className="bg-white text-azul-confianca font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              LIGAR AGORA
            </button>
            
            <button 
              onClick={() => {
                const message = "Olá! Quero integrar sistema Colibri + contabilidade especializada."
                const whatsappUrl = `https://wa.me/556933017414?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WHATSAPP
            </button>
          </div>

          <p className="text-sm opacity-80 mt-4">
            📞 (69) 3301-7414 • 📱 WhatsApp • 📧 contato@agilegestaoempresarial.com.br
          </p>
        </div>
      </div>
    </section>
  )
}