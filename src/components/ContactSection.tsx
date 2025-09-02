'use client'

import { Phone, MessageCircle, Mail, MapPin, Clock, Users, Calculator } from 'lucide-react'

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Vendas e Comercial",
      subtitle: "Demonstrações e Orçamentos",
      phone: "(69) 98404-9494",
      email: "comercial@agilegestaoempresarial.com.br",
      action: "vendas"
    },
    {
      icon: MessageCircle,
      title: "Suporte Técnico",
      subtitle: "Plantão para Emergências",
      phone: "(69) 99216-6432",
      email: "suporte@agilegestaoempresarial.com.br",
      action: "suporte"
    },
    {
      icon: Calculator,
      title: "Contabilidade",
      subtitle: "Serviços Contábeis Especializados",
      phone: "(69) 3301-7414",
      email: "contato@agilegestaoempresarial.com.br",
      action: "contabilidade"
    }
  ]

  const handleWhatsApp = (type: string) => {
    let phone = ""
    let message = ""
    
    switch(type) {
      case "vendas":
        phone = "5569984049494"
        message = "Olá! Gostaria de agendar uma demonstração do sistema Colibri."
        break
      case "suporte":
        phone = "5569992166432"
        message = "Olá! Preciso de suporte técnico para o sistema Colibri."
        break
      case "contabilidade":
        phone = "556933017414"
        message = "Olá! Gostaria de informações sobre serviços contábeis."
        break
      default:
        phone = "5569984049494"
        message = "Olá! Gostaria de conhecer os serviços da Agile Gestão."
    }
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmail = (email: string) => {
    window.open(`mailto:${email}`, '_blank')
  }

  return (
    <section id="contato" className="py-20 bg-cinza-claro">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-cinza-escuro mb-6">
            Entre em Contato <span className="text-azul-confianca">Agora Mesmo</span>
          </h2>
          <p className="text-lg text-cinza-medio max-w-3xl mx-auto">
            Temos canais especializados para cada necessidade. Escolha a forma mais adequada 
            para seu atendimento e receba resposta rápida da nossa equipe.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-azul-confianca to-verde-sucesso rounded-xl mb-4">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-cinza-escuro mb-2">
                  {method.title}
                </h3>
                <p className="text-cinza-medio text-sm">
                  {method.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-cinza-claro rounded-lg">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-azul-confianca mr-2" />
                    <span className="font-medium text-cinza-escuro">{method.phone}</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp(method.action)}
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
                    title="Chamar no WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-cinza-claro rounded-lg">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-azul-confianca mr-2" />
                    <span className="font-medium text-cinza-escuro text-sm">{method.email}</span>
                  </div>
                  <button
                    onClick={() => handleEmail(method.email)}
                    className="bg-azul-confianca hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                    title="Enviar E-mail"
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => handleWhatsApp(method.action)}
                  className="w-full btn-primary"
                >
                  FALAR AGORA
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Address */}
            <div>
              <h3 className="font-poppins font-bold text-xl text-cinza-escuro mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-azul-confianca mr-3" />
                Nossa Localização
              </h3>
              <div className="space-y-3 text-cinza-medio">
                <p><strong>Endereço:</strong> Rua Buenos Aires, 1475 - Sala A</p>
                <p><strong>Bairro:</strong> Nova Porto Velho</p>
                <p><strong>Cidade:</strong> Porto Velho - RO</p>
                <p><strong>CEP:</strong> 76820-137</p>
              </div>
              <div className="mt-6">
                <button 
                  onClick={() => window.open('https://maps.google.com/?q=Rua Buenos Aires, 1475, Porto Velho, RO', '_blank')}
                  className="btn-secondary"
                >
                  VER NO MAPA
                </button>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="font-poppins font-bold text-xl text-cinza-escuro mb-6 flex items-center">
                <Clock className="w-6 h-6 text-azul-confianca mr-3" />
                Horário de Atendimento
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-cinza-claro rounded-lg">
                  <span className="font-medium text-cinza-escuro">Segunda a Sexta</span>
                  <span className="text-azul-confianca font-semibold">8h às 18h</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-cinza-claro rounded-lg">
                  <span className="font-medium text-cinza-escuro">Sábado</span>
                  <span className="text-cinza-medio">8h às 12h</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-100 rounded-lg">
                  <span className="font-medium text-cinza-escuro">Domingo</span>
                  <span className="text-red-600 font-semibold">Fechado</span>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <p className="text-green-700 text-sm">
                    <strong>Suporte Técnico:</strong> Plantão para emergências
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-azul-confianca to-verde-sucesso rounded-2xl p-8 text-white">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4">
              Pronto para Revolucionar Seu Restaurante?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Entre em contato agora e receba uma proposta personalizada em até 24 horas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleWhatsApp('vendas')}
                className="bg-white text-azul-confianca font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                FALAR NO WHATSAPP
              </button>
              <button 
                onClick={() => handleEmail('comercial@agilegestaoempresarial.com.br')}
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-azul-confianca transition-colors duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                ENVIAR E-MAIL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}