'use client'

import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
        message = "Olá! Preciso de suporte técnico."
        break
      default:
        phone = "5569984049494"
        message = "Olá! Gostaria de conhecer os serviços da Agile Gestão."
    }
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const quickLinks = [
    { name: 'Sistema Colibri', href: '#colibri' },
    { name: 'Contabilidade', href: '#contabilidade' },
    { name: 'Confiabilidade', href: '#confiabilidade' },
    { name: 'Contato', href: '#contato' }
  ]

  const services = [
    'Sistema PDV Colibri',
    'Contabilidade Empresarial',
    'Consultoria Tributária',
    'Suporte Técnico',
    'Treinamento Equipe',
    'Implementação Completa'
  ]

  return (
    <footer className="bg-cinza-escuro text-white">
      <div className="section-container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-azul-confianca text-white p-2 rounded-lg">
                <span className="font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl">Agile Gestão</h3>
                <p className="text-sm text-gray-400">Empresarial</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Representante oficial do Sistema Colibri em Rondônia e Acre desde 2002. 
              Automatização de restaurantes e contabilidade especializada.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-azul-confianca p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-azul-confianca p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-azul-confianca p-2 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-azul-confianca transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  <span className="text-verde-sucesso mr-2">✓</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Fale Conosco</h4>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-azul-confianca mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Rua Buenos Aires, 1475 - Sala A</p>
                  <p>Nova Porto Velho</p>
                  <p>Porto Velho - RO, 76820-137</p>
                </div>
              </div>

              {/* Phone - Vendas */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-verde-sucesso flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Vendas</p>
                  <button
                    onClick={() => handleWhatsApp('vendas')}
                    className="text-white hover:text-verde-sucesso transition-colors font-medium"
                  >
                    (69) 98404-9494
                  </button>
                </div>
              </div>

              {/* Phone - Suporte */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-laranja-energia flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Suporte</p>
                  <button
                    onClick={() => handleWhatsApp('suporte')}
                    className="text-white hover:text-laranja-energia transition-colors font-medium"
                  >
                    (69) 99216-6432
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-azul-confianca flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:contato@agilegestaoempresarial.com.br"
                    className="text-gray-300 hover:text-azul-confianca transition-colors text-sm"
                  >
                    contato@agilegestaoempresarial.com.br
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amarelo-destaque mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p><strong>Seg-Sex:</strong> 8h às 18h</p>
                  <p><strong>Sáb:</strong> 8h às 12h</p>
                  <p className="text-verde-sucesso"><strong>Suporte:</strong> Plantão</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Agile Gestão Empresarial. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Sistema Colibri é marca registrada. CNPJ: XX.XXX.XXX/XXXX-XX
              </p>
            </div>

            {/* Certificates/Badges */}
            <div className="flex items-center space-x-4">
              <div className="bg-gray-700 px-3 py-1 rounded text-xs text-gray-300">
                Representante Oficial
              </div>
              <div className="bg-verde-sucesso px-3 py-1 rounded text-xs text-white">
                20+ Anos
              </div>
              <div className="bg-azul-confianca px-3 py-1 rounded text-xs text-white">
                RO & AC
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="bg-azul-confianca hover:bg-blue-700 p-3 rounded-full transition-colors group"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5 group-hover:transform group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}