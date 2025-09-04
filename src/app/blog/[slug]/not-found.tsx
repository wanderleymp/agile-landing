'use client'

import Link from 'next/link'
import { ArrowLeft, Search } from 'lucide-react'

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-azul-claro rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <Search className="w-12 h-12 text-azul-confianca" />
        </div>
        
        <h1 className="font-poppins font-bold text-3xl text-cinza-escuro mb-4">
          Artigo não encontrado
        </h1>
        
        <p className="text-cinza-medio mb-8">
          Desculpe, não conseguimos encontrar o artigo que você está procurando. 
          Ele pode ter sido removido ou o link pode estar incorreto.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/blog"
            className="btn-primary inline-flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o blog
          </Link>
          
          <Link 
            href="/"
            className="btn-secondary inline-flex items-center justify-center"
          >
            Ir para a página inicial
          </Link>
        </div>
      </div>
    </div>
  )
}