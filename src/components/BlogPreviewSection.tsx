'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Mock data - will be replaced with real data from CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Como Cadastrar Produtos no Colibri Back Office",
    excerpt: "Aprenda o passo a passo completo para cadastrar produtos no sistema Colibri Back Office...",
    date: "15 de março de 2024",
    readTime: "5 min",
    category: "Tutoriais",
    slug: "cadastro-produtos-colibri-back-office"
  },
  {
    id: 2,
    title: "Sincronização PDV x Back Office: Guia Completo",
    excerpt: "Entenda a importância da sincronização entre os módulos do Colibri e como evitar erros...",
    date: "10 de março de 2024",
    readTime: "4 min",
    category: "Tutoriais",
    slug: "sincronizacao-pdv-backoffice"
  },
  {
    id: 3,
    title: "Controle Financeiro com Colibri: Dicas Essenciais",
    excerpt: "Descubra como utilizar o módulo financeiro do Colibri para ter controle total das finanças...",
    date: "5 de março de 2024",
    readTime: "6 min",
    category: "Gestão",
    slug: "controle-financeiro-colibri"
  },
  {
    id: 4,
    title: "Como Usar o Colibri PED+ para Comandas Eletrônicas",
    excerpt: "Guia completo para instalar e utilizar o aplicativo de comandas eletrônicas do Colibri...",
    date: "1 de março de 2024",
    readTime: "7 min",
    category: "Tutoriais",
    slug: "colibri-ped-comandas-eletronicas"
  },
  {
    id: 5,
    title: "Integração do Colibri com iFood: Automatize Seus Pedidos",
    excerpt: "Aprenda a configurar a integração automática com iFood e outros deliverys para receber pedidos...",
    date: "25 de fevereiro de 2024",
    readTime: "6 min",
    category: "Integrações",
    slug: "colibri-ifood-integracao"
  },
  {
    id: 6,
    title: "Fechamento de Caixa do Colibri: Passo a Passo",
    excerpt: "Domine completamente o fechamento de caixa do Colibri com nosso guia detalhado...",
    date: "20 de fevereiro de 2024",
    readTime: "8 min",
    category: "Tutoriais",
    slug: "fechamento-caixa-colibri"
  }
]

export default function BlogPreviewSection() {
  // Show the 3 most recent posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 bg-cinza-claro">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-cinza-escuro mb-4">
            Dicas e <span className="text-azul-confianca">Tutoriais</span>
          </h2>
          <p className="text-cinza-medio text-lg max-w-2xl mx-auto">
            Conteúdo exclusivo para ajudar você a tirar o máximo proveito do sistema Colibri e da nossa consultoria especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 card-hover">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-azul-claro text-azul-confianca px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-cinza-medio">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-poppins font-bold text-xl text-cinza-escuro mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-azul-confianca transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-cinza-medio mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-cinza-medio">
                    {post.date}
                  </span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-azul-confianca font-medium hover:text-azul-confianca/80 flex items-center gap-1 text-sm"
                  >
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/blog"
            className="btn-primary inline-flex items-center"
          >
            Ver todos os artigos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}