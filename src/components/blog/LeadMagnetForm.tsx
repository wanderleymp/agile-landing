'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function LeadMagnetForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In a real implementation, you would send the data to your backend here
    console.log('Form submitted:', formData)
    
    setIsLoading(false)
    setIsSubmitted(true)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: ''
      })
    }, 5000)
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
        Cadastre-se para receber dicas, tutoriais e materiais exclusivos sobre gestão de restaurantes.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-confianca focus:border-transparent"
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Seu melhor email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-confianca focus:border-transparent"
          />
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-confianca focus:border-transparent"
          />
        </div>
        
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