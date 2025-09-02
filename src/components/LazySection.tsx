'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
  className?: string
  fallback?: ReactNode
  threshold?: number
  rootMargin?: string
}

export default function LazySection({ 
  children, 
  className = '', 
  fallback = null,
  threshold = 0.1,
  rootMargin = '100px'
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setHasLoaded(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <div ref={ref} className={className}>
      {isVisible || hasLoaded ? (
        <div className="animate-fade-in">
          {children}
        </div>
      ) : (
        fallback || (
          <div className="h-96 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-azul-confianca"></div>
          </div>
        )
      )}
    </div>
  )
}