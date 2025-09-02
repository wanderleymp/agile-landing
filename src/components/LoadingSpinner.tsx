'use client'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'white'
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  }

  const colorClasses = {
    primary: 'text-azul-confianca',
    secondary: 'text-verde-sucesso',
    white: 'text-white'
  }

  return (
    <div className="flex items-center justify-center">
      <div 
        className={`animate-spin rounded-full border-2 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]} border-current`}
        role="status"
        aria-label="Carregando..."
      >
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  )
}