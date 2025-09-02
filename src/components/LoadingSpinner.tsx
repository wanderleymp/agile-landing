'use client'

import { useEffect, useState } from 'react'

export default function LoadingSpinner() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    // Simulate loading progress
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-azul-confianca to-verde-sucesso rounded-2xl flex items-center justify-center animate-pulse">
              <span className="font-poppins font-bold text-2xl text-white">A</span>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-azul-confianca to-verde-sucesso rounded-2xl opacity-20 animate-ping"></div>
          </div>
        </div>

        {/* Company Name */}
        <h1 className="font-poppins font-bold text-2xl text-cinza-escuro mb-2">
          Agile Gestão Empresarial
        </h1>
        <p className="text-azul-confianca font-medium mb-8">
          Representante Oficial Sistema Colibri
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="bg-cinza-claro rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-azul-confianca to-verde-sucesso h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-cinza-medio text-sm">
          Carregando experiência personalizada...
        </p>

        {/* Spinning Icon */}
        <div className="mt-6">
          <div className="w-8 h-8 mx-auto border-4 border-azul-confianca border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  )
}