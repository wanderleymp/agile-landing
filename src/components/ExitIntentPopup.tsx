'use client'

import { useState, useEffect } from 'react'

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [email, setEmail] = useState('')
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Verificar se o popup já foi mostrado anteriormente
    const hasShownBefore = localStorage.getItem('exitIntentShown')
    if (hasShownBefore) {
      setHasShown(true)
      return
    }

    if (typeof window !== 'undefined' && !hasShown) {
      const handleMouseLeave = (e: MouseEvent) => {
        // Detecta quando o mouse se move para fora da janela (parte superior)
        // Adiciona uma verificação para garantir que o usuário esteve na página por algum tempo
        if (e.clientY <= 0 && !hasShown) {
          setShowPopup(true)
          setHasShown(true)
        }
      }

      // Adicionar um pequeno delay para evitar que o popup apareça imediatamente
      const timer = setTimeout(() => {
        document.addEventListener('mouseleave', handleMouseLeave)
      }, 3000) // 3 segundos de delay

      return () => {
        clearTimeout(timer)
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [hasShown])

  const handleClose = () => {
    setShowPopup(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode integrar com seu sistema de coleta de leads
    console.log('Email coletado:', email)
    
    // Enviar para o Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exit_intent_signup', {
        event_category: 'Engagement',
        event_label: 'Exit Intent Popup',
        value: 1
      })
    }
    
    setShowPopup(false)
    // Salvar em localStorage para não mostrar novamente
    localStorage.setItem('exitIntentShown', 'true')
    
    // Feedback visual para o usuário
    alert('Obrigado! O e-book será enviado para seu email em breve.')
    
    // Limpar o formulário
    setEmail('')
  }

  // Não mostrar o popup em dispositivos móveis
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile) {
      setHasShown(true)
    }
  }, [])

  if (!showPopup || hasShown) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-lg max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()} // Impedir que o clique no popup feche o modal
      >
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Fechar popup"
        >
          ✕
        </button>
        
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-azul-confianca rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-cinza-escuro mb-2 font-poppins">
            Não vá embora ainda!
          </h3>
          <p className="text-cinza-medio mb-4">
            Baixe nosso e-book gratuito: <span className="font-semibold text-azul-confianca">"5 Erros que Restaurantes Cometem com Automação"</span>
          </p>
          
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-azul-confianca focus:border-azul-confianca"
              required
            />
            <button
              type="submit"
              className="w-full bg-azul-confianca text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-azul-confianca"
            >
              BAIXAR E-BOOK AGORA
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-3">
            Não enviamos spam. Cancelamento a qualquer momento.
          </p>
        </div>
      </div>
    </div>
  )
}