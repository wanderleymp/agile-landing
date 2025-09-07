'use client'

import { useState, useEffect } from 'react'
import { CheckCircle } from 'lucide-react'
import * as analytics from '@/lib/analytics'

interface FormData {
  name: string
  email: string
  phone: string
  city: string
  establishment: string
}

interface FormErrors {
  name?: string
  email?: string
  city?: string
}

export default function LeadMagnetForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    establishment: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Track form view
  useEffect(() => {
    analytics.trackGAEvent('view_item', 'Blog', 'Lead Magnet Form')
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'Cidade é obrigatória'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name as keyof FormErrors]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsLoading(true)
    setError('')
    analytics.trackGAEvent('generate_lead', 'Blog', 'Lead Magnet Form Submit')
    
    try {
      // Prepare form data for webhook
      const webhookData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        establishment: formData.establishment,
        date: new Date().toISOString()
      }
      
      // Submit to webhook
      const response = await fetch('https://n8n.webhook.agilefinance.com.br/webhook/landpage', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(webhookData)
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        analytics.trackMetaEvent('Lead', { 
          content_name: 'Blog Lead Magnet',
          email: formData.email
        })
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            city: '',
            establishment: ''
          })
        }, 5000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (err) {
      setError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.')
      console.error('Form submission error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm text-center">
        <CheckCircle className="w-16 h-16 text-verde-sucesso mx-auto mb-4" />
        <h3 className="font-poppins font-bold text-xl text-cinza-escuro mb-2">
          Obrigado por se inscrever!
        </h3>
        <p className="text-cinza-medio">
          Em breve você receberá nosso conteúdo exclusivo no seu email.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="font-poppins font-bold text-lg text-cinza-escuro mb-4">
        Receba conteúdos exclusivos
      </h3>
      <p className="text-cinza-medio text-sm mb-4">
        Cadastre-se para receber dicas, tutoriais e materiais exclusivos sobre gestão de restaurantes. Conte-nos sobre o seu estabelecimento para que possamos oferecer a melhor consultoria personalizada.
      </p>
      
      <form 
        onSubmit={handleSubmit} 
        className="space-y-4"
      >
        
        <div>
          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            required
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca focus:border-transparent ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Seu melhor email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="WhatsApp (opcional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-confianca focus:border-transparent"
          />
        </div>
        
        <div>
          <input
            type="text"
            name="city"
            placeholder="Cidade e estado"
            required
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-azul-confianca focus:border-transparent ${
              errors.city ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>
        
        <div>
          <textarea
            name="establishment"
            placeholder="Conte-nos como é o seu estabelecimento para que possamos oferecer a melhor consultoria personalizada. Quantos funcionários você tem? Qual o porte do seu negócio? Quais são seus principais desafios?"
            value={formData.establishment}
            onChange={(e) => handleChange({ target: { name: 'establishment', value: e.target.value } } as React.ChangeEvent<HTMLInputElement>)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-confianca focus:border-transparent min-h-[120px]"
          />
        </div>
        
        {error && (
          <div className="text-red-500 text-sm text-center">
            {error}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary w-full flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            'Receber conteúdos'
          )}
        </button>
        
        <p className="text-xs text-cinza-medio text-center">
          Prometemos não enviar spam. Você pode cancelar a qualquer momento.
        </p>
      </form>
    </div>
  )
}