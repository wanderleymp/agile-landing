'use client'

import { useState } from 'react'
import OptimizedImage from './ImageManager'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function ColibriGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: '/images/colibri/pdv-interface.jpg',
      alt: 'Interface do PDV Colibri',
      title: 'PDV Moderno e Intuitivo',
      description: 'Interface limpa e fácil de usar para seus funcionários'
    },
    {
      src: '/images/colibri/delivery-integration.jpg', 
      alt: 'Integração com Delivery',
      title: 'Integração Total',
      description: 'Conecte com as principais plataformas de delivery'
    },
    {
      src: '/images/colibri/reports-dashboard.jpg',
      alt: 'Relatórios e Dashboard',
      title: 'Relatórios Completos',
      description: 'Acompanhe vendas, estoque e performance em tempo real'
    },
    {
      src: '/images/colibri/mobile-app.jpg',
      alt: 'App Mobile Colibri',
      title: 'App Mobile',
      description: 'Gerencie seu restaurante de qualquer lugar'
    }
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="py-16 bg-cinza-claro">
      <div className="section-container">
        <div className="text-center mb-12">
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-cinza-escuro mb-4">
            Veja o <span className="text-azul-confianca">Sistema Colibri</span> em Ação
          </h3>
          <p className="text-cinza-medio max-w-2xl mx-auto">
            Interface moderna e intuitiva que facilita o dia a dia do seu restaurante
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-video relative">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  fallback={`data:image/svg+xml;base64,${btoa(`
                    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100%" height="100%" fill="#e5e7eb"/>
                      <text x="50%" y="50%" fill="#6b7280" text-anchor="middle" dy=".3em" font-size="14">
                        ${image.title}
                      </text>
                    </svg>
                  `)}`}
                />
              </div>
              <div className="p-4">
                <h4 className="font-poppins font-semibold text-lg text-cinza-escuro mb-2">
                  {image.title}
                </h4>
                <p className="text-cinza-medio text-sm">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative">
                <OptimizedImage
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  width={800}
                  height={600}
                  className="w-full aspect-video object-cover"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="font-poppins font-bold text-xl text-cinza-escuro mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-cinza-medio">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            QUERO VER UMA DEMONSTRAÇÃO AO VIVO
          </button>
        </div>
      </div>
    </section>
  )
}