'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
  image: string
  slug: string
}

export default function BlogPreviewSection() {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // Fetch blog posts from API endpoint
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blog/list')
        const posts = await response.json()
        setRecentPosts(posts.slice(0, 3))
      } catch (error) {
        console.error('Failed to fetch blog posts:', error)
        // Fallback to empty array
        setRecentPosts([])
      }
    }

    fetchBlogPosts()
  }, [])

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
                    {new Date(post.date).toLocaleDateString('pt-BR')}
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