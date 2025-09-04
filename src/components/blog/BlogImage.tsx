'use client'

import { useState } from 'react'

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  width?: number;
  height?: number;
}

export default function BlogImage({ 
  src, 
  alt, 
  className = '',
  fallbackText = 'Imagem indisponível',
  width,
  height
}: BlogImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className={`${className} bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center`}>
        <span className="text-cinza-medio text-sm">{fallbackText}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onError={() => setImageError(true)}
    />
  )
}