'use client'

import { UtensilsCrossed, Truck, Coffee, Beer, Zap, BarChart3, CheckCircle, Shield, Smartphone, Clock } from 'lucide-react'

export default function ColibriSection() {
  const modules = [
    {
      icon: UtensilsCrossed,
      title: "MÓDULO MESA",
      subtitle: "Para Restaurantes Tradicionais",
      features: [
        "Controle completo de mesas e comandas",
        "Divisão de contas automática",
        "Histórico completo de pedidos",
        "Relatórios de ocupação por período"
      ]
    },
    {
      icon: Truck,
      title: "MÓDULO DELIVERY",
      subtitle: "Integração Total com Deliverys",
      features: [
        "Integração com as principais plataformas",
        "Delivery próprio com controle de entregadores",
        "Rastreamento de pedidos em tempo real",
        "Otimização de rotas de entrega"
      ]
    },
    {
      icon: Coffee,
      title: "MÓDULO BALCÃO",
      subtitle: "Fast Food e Lanchonetes",
      features: [
        "PDV otimizado para atendimento rápido",
        "Controle de filas e senhas",
        "Integração com displays de pedidos",
        "Gestão de combos e promoções"
      ]
    },
    {
      icon: Beer,
      title: "MÓDULO FICHA",
      subtitle: "Bares e Petiscarias",
      features: [
        "Sistema de fichas personalizado",
        "Controle de consumo por cliente",
        "Gestão de happy hour e promoções",
        "Relatórios de consumo médio"
      ]
    }
  ]

  const operationalBenefits = [
    { icon: Zap, title: "40% mais agilidade", description: "no atendimento aos clientes" },
    { icon: BarChart3, title: "Controle total do estoque", description: "em tempo real" },
    { icon: CheckCircle, title: "Eliminação de erros", description: "humanos nos pedidos" },
    { icon: Smartphone, title: "Interface intuitiva", description: "fácil treinamento da equipe" }
  ]

  const managerialBenefits = [
    { icon: BarChart3, title: "Relatórios completos", description: "para tomada de decisão" },
    { icon: UtensilsCrossed, title: "Análise de rentabilidade", description: "por produto" },
    { icon: Clock, title: "Histórico detalhado", description: "de vendas e clientes" },
    { icon: Shield, title: "Auditoria completa", description: "de todas as operações" }
  ]

  const commercialBenefits = [
    { icon: Truck, title: "Integração automática", description: "com as principais plataformas" },
    { icon: CheckCircle, title: "Aceita todos os meios", description: "de pagamento" },
    { icon: BarChart3, title: "Sistema de fidelidade", description: "e promoções" },
    { icon: Smartphone, title: "App próprio", description: "para pedidos online" }
  ]

  const technicalBenefits = [
    { icon: Shield, title: "Segurança bancária", description: "para proteção de dados" },
    { icon: Clock, title: "Backup automático", description: "na nuvem" },
    { icon: Zap, title: "Atualizações automáticas", description: "sem interrupção" },
    { icon: Smartphone, title: "Suporte especializado", description: "plantão técnico" }
  ]

  const handleDemo = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="colibri" className="py-20 bg-gradient-to-br from-cinza-claro to-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-cinza-escuro mb-6">
            <span className="text-azul-confianca">Sistema Colibri</span> - O Sistema de PDV 
            Mais Usado nos Melhores Restaurantes do Brasil
          </h2>
          <p className="text-lg text-cinza-medio max-w-3xl mx-auto">
            Descubra por que milhares de estabelecimentos escolhem o Colibri para 
            revolucionar suas operações.
          </p>
        </div>

        {/* Módulos */}
        <div className="mb-20">
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-center text-cinza-escuro mb-12">
            Os 4 Módulos Essenciais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-azul-confianca to-verde-sucesso rounded-xl flex items-center justify-center">
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xl text-cinza-escuro">
                      {module.title}
                    </h4>
                    <p className="text-azul-confianca font-medium">
                      {module.subtitle}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-verde-sucesso mt-0.5 flex-shrink-0" />
                      <span className="text-cinza-escuro">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios */}
        <div className="mb-16">
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-center text-cinza-escuro mb-12">
            Benefícios Transformadores
          </h3>
          
          {/* Operacionais */}
          <div className="mb-12">
            <h4 className="font-poppins font-semibold text-xl text-azul-confianca mb-6 text-center">
              OPERACIONAIS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {operationalBenefits.map((benefit, index) => (
                <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md card-hover">
                  <benefit.icon className="w-12 h-12 text-azul-confianca mx-auto mb-4" />
                  <h5 className="font-poppins font-semibold text-lg text-cinza-escuro mb-2">
                    {benefit.title}
                  </h5>
                  <p className="text-cinza-medio text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Gerenciais */}
          <div className="mb-12">
            <h4 className="font-poppins font-semibold text-xl text-verde-sucesso mb-6 text-center">
              GERENCIAIS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {managerialBenefits.map((benefit, index) => (
                <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md card-hover">
                  <benefit.icon className="w-12 h-12 text-verde-sucesso mx-auto mb-4" />
                  <h5 className="font-poppins font-semibold text-lg text-cinza-escuro mb-2">
                    {benefit.title}
                  </h5>
                  <p className="text-cinza-medio text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Comerciais */}
          <div className="mb-12">
            <h4 className="font-poppins font-semibold text-xl text-laranja-energia mb-6 text-center">
              COMERCIAIS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commercialBenefits.map((benefit, index) => (
                <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md card-hover">
                  <benefit.icon className="w-12 h-12 text-laranja-energia mx-auto mb-4" />
                  <h5 className="font-poppins font-semibold text-lg text-cinza-escuro mb-2">
                    {benefit.title}
                  </h5>
                  <p className="text-cinza-medio text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Técnicos */}
          <div>
            <h4 className="font-poppins font-semibold text-xl text-cinza-escuro mb-6 text-center">
              TÉCNICOS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalBenefits.map((benefit, index) => (
                <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md card-hover">
                  <benefit.icon className="w-12 h-12 text-cinza-escuro mx-auto mb-4" />
                  <h5 className="font-poppins font-semibold text-lg text-cinza-escuro mb-2">
                    {benefit.title}
                  </h5>
                  <p className="text-cinza-medio text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-azul-confianca to-verde-sucesso rounded-2xl p-8 text-white">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4">
              Transforme Seu Restaurante Hoje Mesmo
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Veja o Colibri funcionando no seu tipo de estabelecimento
            </p>
            <button 
              onClick={handleDemo}
              className="bg-white text-azul-confianca font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              QUERO VER O COLIBRI EM AÇÃO - DEMO GRATUITA
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}