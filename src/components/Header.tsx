'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { useScrollDirection } from '@/hooks/useResponsive'
import OptimizedImage from './ImageManager'
import * as analytics from '@/lib/analytics'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sistema Colibri', href: '#colibri' },
    { name: 'Contabilidade', href: '#contabilidade' },
    { name: 'Blog', href: '/blog' },
    // { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ]

  const handleWhatsApp = () => {
    analytics.trackWhatsAppClick('Header CTA')
    const message = "Olá! Gostaria de conhecer o sistema Colibri e os serviços da Agile."
    const whatsappUrl = `https://wa.me/5569984049494?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-lg'
    } ${
      scrollDirection === 'down' && isScrolled 
        ? 'transform -translate-y-full' 
        : 'transform translate-y-0'
    }`}>
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <OptimizedImage
              src="/images/logos/agile-logo.png"
              alt="Agile Gestão Empresarial"
              width={50}
              height={50}
              className="rounded-lg"
              fallback="/images/logos/agile-placeholder.svg"
              priority
            />
            <div>
              <h1 className="font-poppins font-bold text-xl text-azul-confianca">
                Agile Gestão
              </h1>
              <p className="text-xs text-cinza-medio">
                Representante Oficial Colibri RO/AC desde 2002
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-cinza-escuro hover:text-azul-confianca transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <div className="flex items-center text-sm text-cinza-medio">
                <Phone className="w-4 h-4 mr-1" />
                <span>(69) 98404-9494</span>
              </div>
              <div className="flex items-center text-sm text-cinza-medio">
                <MessageCircle className="w-4 h-4 mr-1" />
                <span>(69) 99216-6432</span>
              </div>
            </div>
            <button 
              onClick={handleWhatsApp}
              className="btn-primary"
            >
              DEMONSTRAÇÃO GRATUITA
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-cinza-escuro" />
            ) : (
              <Menu className="w-6 h-6 text-cinza-escuro" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-cinza-escuro hover:text-azul-confianca transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-azul-claro focus-ring"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t mx-4">
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <div className="flex items-center justify-between p-3 bg-cinza-claro rounded-lg">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-azul-confianca" />
                      <span className="text-sm font-medium">(69) 98404-9494</span>
                    </div>
                    <span className="text-xs text-verde-sucesso font-medium">Vendas</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-cinza-claro rounded-lg">
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-2 text-azul-confianca" />
                      <span className="text-sm font-medium">(69) 99216-6432</span>
                    </div>
                    <span className="text-xs text-laranja-energia font-medium">Suporte</span>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    analytics.trackWhatsAppClick('Mobile Menu CTA')
                    handleWhatsApp()
                  }}
                  className="btn-primary w-full text-center"
                >
                  DEMONSTRAÇÃO GRATUITA
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}