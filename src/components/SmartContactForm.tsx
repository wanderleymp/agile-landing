'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, AlertCircle, User, Building, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react'
import * as analytics from '@/lib/analytics'

interface FormData {
  nome: string
  email: string
  telefone: string
  estabelecimento: string
  cidade: string
  tipo: string
  servicos?: string[]
}

interface FormErrors {
  nome?: string
  email?: string
  telefone?: string
  estabelecimento?: string
  cidade?: string
  tipo?: string
}

export default function SmartContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    nome: '', email: '', telefone: '', estabelecimento: '', cidade: '', tipo: '', servicos: []
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const cities = ['Porto Velho - RO', 'Rio Branco - AC', 'Ji-Paraná - RO', 'Cacoal - RO', 'Outras']
  const businessTypes = ['Restaurante', 'Bar/Petiscaria', 'Fast Food', 'Pizzaria', 'Outros']
  const serviceOptions = ['Sistema PDV', 'Delivery', 'Contabilidade', 'Consultoria']

  // Track form start on component mount
  useEffect(() => {
    analytics.trackFormStart()
  }, [])

  // Track form step changes
  useEffect(() => {
    if (currentStep > 1) {
      analytics.trackFormStep(currentStep)
    }
  }, [currentStep])

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {}
    
    if (step === 1) {
      if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório'
      if (!formData.email.trim()) {
        newErrors.email = 'E-mail é obrigatório'
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'E-mail inválido'
      }
      if (!formData.telefone.trim()) {
        newErrors.telefone = 'Telefone é obrigatório'
      } else if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(formData.telefone) && !/^\d{10,11}$/.test(formData.telefone)) {
        newErrors.telefone = 'Telefone inválido'
      }
    }
    
    if (step === 2) {
      if (!formData.estabelecimento.trim()) newErrors.estabelecimento = 'Nome do estabelecimento é obrigatório'
      if (!formData.cidade) newErrors.cidade = 'Selecione sua cidade'
      if (!formData.tipo) newErrors.tipo = 'Selecione o tipo de negócio'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicos: prev.servicos?.includes(service)
        ? prev.servicos.filter(s => s !== service)
        : [...(prev.servicos || []), service]
    }))
  }

  const handleSubmit = async () => {
    if (!validateStep(3)) return
    
    setIsSubmitting(true)
    analytics.trackFormSubmit()
    
    // Simular envio dos dados
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const message = `*Nova Demonstração*\n👤 ${formData.nome}\n🏪 ${formData.estabelecimento}\n📍 ${formData.cidade}\n📞 ${formData.telefone}\n📧 ${formData.email}`
    window.open(`https://wa.me/5569984049494?text=${encodeURIComponent(message)}`, '_blank')
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field as keyof FormErrors]
        return newErrors
      })
    }
  }

  // Format phone number as user types
  const formatPhoneNumber = (value: string): string => {
    const phoneNumber = value.replace(/\D/g, '')
    
    if (phoneNumber.length === 0) return ''
    if (phoneNumber.length <= 2) return `(${phoneNumber}`
    if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`
    if (phoneNumber.length <= 10) return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value)
    handleInputChange('telefone', formattedValue)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto text-center">
        <CheckCircle className="w-16 h-16 text-verde-sucesso mx-auto mb-6" />
        <h3 className="font-poppins font-bold text-2xl text-cinza-escuro mb-4">Enviado com Sucesso!</h3>
        <p className="text-cinza-medio mb-6">Entraremos em contato em até 2 horas.</p>
        <button 
          onClick={() => {
            analytics.trackWhatsAppClick('Success Button')
            window.open('https://wa.me/5569984049494', '_blank')
          }} 
          className="btn-primary"
        >
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
          <div 
            className="bg-azul-confianca h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="p-8">
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="w-12 h-12 text-azul-confianca mx-auto mb-4" />
              <h3 className="font-poppins font-bold text-lg">Suas Informações</h3>
            </div>
            
            <div>
              <input
                type="text" 
                placeholder="Nome completo" 
                value={formData.nome}
                onChange={(e) => handleInputChange('nome', e.target.value)}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca ${
                  errors.nome ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
            </div>
            
            <div>
              <input
                type="email" 
                placeholder="E-mail" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <input
                type="tel" 
                placeholder="(69) 99999-9999" 
                value={formData.telefone}
                onChange={handlePhoneChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca ${
                  errors.telefone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Building className="w-12 h-12 text-azul-confianca mx-auto mb-4" />
              <h3 className="font-poppins font-bold text-lg">Sobre Seu Negócio</h3>
            </div>
            
            <div>
              <input
                type="text" 
                placeholder="Nome do estabelecimento" 
                value={formData.estabelecimento}
                onChange={(e) => handleInputChange('estabelecimento', e.target.value)}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca ${
                  errors.estabelecimento ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.estabelecimento && <p className="text-red-500 text-sm mt-1">{errors.estabelecimento}</p>}
            </div>
            
            <div>
              <select
                value={formData.cidade} 
                onChange={(e) => handleInputChange('cidade', e.target.value)}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca ${
                  errors.cidade ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Selecione sua cidade</option>
                {cities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
              {errors.cidade && <p className="text-red-500 text-sm mt-1">{errors.cidade}</p>}
            </div>
            
            <div>
              <select
                value={formData.tipo} 
                onChange={(e) => handleInputChange('tipo', e.target.value)}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca ${
                  errors.tipo ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Tipo de negócio</option>
                {businessTypes.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
              {errors.tipo && <p className="text-red-500 text-sm mt-1">{errors.tipo}</p>}
            </div>
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
                  key={service} 
                  type="button" 
                  onClick={() => handleServiceToggle(service)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    formData.servicos?.includes(service)
                      ? 'border-azul-confianca bg-azul-confianca text-white'
                      : 'border-gray-300 hover:border-azul-confianca'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
            
            {(!formData.servicos || formData.servicos.length === 0) && (
              <p className="text-amber-600 text-sm text-center">
                Selecione pelo menos um serviço de interesse
              </p>
            )}
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`flex items-center px-6 py-3 rounded-lg ${
              currentStep === 1 ? 'text-gray-400 cursor-not-allowed' : 'btn-secondary'
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Anterior
          </button>

          {currentStep === 3 ? (
            <button 
              onClick={handleSubmit} 
              disabled={isSubmitting}
              className="btn-primary flex items-center px-6 py-3"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : null}
              {isSubmitting ? 'Enviando...' : 'Solicitar Demonstração'}
            </button>
          ) : (
            <button
              onClick={handleNext}
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