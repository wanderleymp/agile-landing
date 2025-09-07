'use client'

import { Share2 } from 'lucide-react'

interface PostFooterProps {
  postDate: string
}

export default function PostFooter({ postDate }: PostFooterProps) {
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <footer className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Share2 className="w-5 h-5 text-cinza-medio" />
          <span className="text-cinza-medio">Compartilhar:</span>
          <div className="flex gap-2">
            <button 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copiado para a área de transferência!');
                }
              }}
              className="text-azul-confianca hover:text-azul-confianca/80"
              title="Copiar link"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="text-sm text-cinza-medio">
          Publicado em {formatDate(postDate)}
        </div>
      </div>
    </footer>
  )
}