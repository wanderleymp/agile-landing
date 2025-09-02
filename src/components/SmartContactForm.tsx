'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle, User, Building, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react'
import LoadingSpinner from './LoadingSpinner'

interface FormData {
  nome: string
  email: string
  telefone: string
  estabelecimento: string
  cidade: string
  tipo: string
  servicos: string[]
}

export default function SmartContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    nome: '', email: '', telefone: '', estabelecimento: '', cidade: '', tipo: '', servicos: []
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const cities = ['Porto Velho - RO', 'Rio Branco - AC', 'Ji-Paraná - RO', 'Cacoal - RO', 'Outras']
  const businessTypes = ['Restaurante', 'Bar/Petiscaria', 'Fast Food', 'Pizzaria', 'Outros']
  const serviceOptions = ['Sistema PDV', 'Delivery', 'Contabilidade', 'Consultoria']

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicos: prev.servicos.includes(service)
        ? prev.servicos.filter(s => s !== service)
        : [...prev.servicos, service]
    }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const message = `*Nova Demonstração*\n👤 ${formData.nome}\n🏪 ${formData.estabelecimento}\n📍 ${formData.cidade}\n📞 ${formData.telefone}\n📧 ${formData.email}`
    window.open(`https://wa.me/5569984049494?text=${encodeURIComponent(message)}`, '_blank')
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto text-center">
        <CheckCircle className="w-16 h-16 text-verde-sucesso mx-auto mb-6" />
        <h3 className="font-poppins font-bold text-2xl text-cinza-escuro mb-4">Enviado com Sucesso!</h3>
        <p className="text-cinza-medio mb-6">Entraremos em contato em até 2 horas.</p>
        <button onClick={() => window.open('https://wa.me/5569984049494', '_blank')} className="btn-primary">
          Falar Agora no WhatsApp
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl mx-auto">
      <div className="bg-cinza-claro p-6">
        <h2 className="font-poppins font-bold text-xl text-cinza-escuro mb-4">Demonstração Personalizada</h2>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-azul-confianca h-2 rounded-full transition-all" style={{ width: `${(currentStep / 3) * 100}%` }}></div>
        </div>
      </div>

      <div className="p-8">
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="w-12 h-12 text-azul-confianca mx-auto mb-4" />
              <h3 className="font-poppins font-bold text-lg">Suas Informações</h3>
            </div>
            <input
              type="text" placeholder="Nome completo" value={formData.nome}
              onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca"
            />
            <input
              type="email" placeholder="E-mail" value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca"
            />
            <input
              type="tel" placeholder="WhatsApp" value={formData.telefone}
              onChange={(e) => setFormData(prev => ({ ...prev, telefone: e.target.value }))}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca"
            />
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Building className="w-12 h-12 text-azul-confianca mx-auto mb-4" />
              <h3 className="font-poppins font-bold text-lg">Sobre Seu Negócio</h3>
            </div>
            <input
              type="text" placeholder="Nome do estabelecimento" value={formData.estabelecimento}
              onChange={(e) => setFormData(prev => ({ ...prev, estabelecimento: e.target.value }))}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca"
            />
            <select
              value={formData.cidade} onChange={(e) => setFormData(prev => ({ ...prev, cidade: e.target.value }))}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca"
            >
              <option value="">Selecione sua cidade</option>
              {cities.map(city => <option key={city} value={city}>{city}</option>)}
            </select>
            <select
              value={formData.tipo} onChange={(e) => setFormData(prev => ({ ...prev, tipo: e.target.value }))}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca"
            >
              <option value="">Tipo de negócio</option>
              {businessTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <MessageSquare className="w-12 h-12 text-azul-confianca mx-auto mb-4" />
              <h3 className="font-poppins font-bold text-lg">Serviços de Interesse</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {serviceOptions.map(service => (
                <button
                  key={service} type="button" onClick={() => handleServiceToggle(service)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    formData.servicos.includes(service)
                      ? 'border-azul-confianca bg-azul-confianca text-white'
                      : 'border-gray-300 hover:border-azul-confianca'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
            disabled={currentStep === 1}
            className={`flex items-center px-6 py-3 rounded-lg ${
              currentStep === 1 ? 'text-gray-400 cursor-not-allowed' : 'btn-secondary'
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Anterior
          </button>

          {currentStep === 3 ? (
            <button onClick={handleSubmit} disabled={isSubmitting} className="btn-primary flex items-center px-6 py-3">
              {isSubmitting ? <LoadingSpinner size="sm" color="white" /> : 'Solicitar Demonstração'}
            </button>
          ) : (
            <button
              onClick={() => setCurrentStep(prev => Math.min(prev + 1, 3))}
              className="btn-primary flex items-center px-6 py-3"
            >
              Próximo <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}