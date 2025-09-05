'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Calendar, User } from 'lucide-react'
import BlogImage from '@/components/blog/BlogImage'

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

interface BlogPostsProps {
  allPosts: BlogPost[]
  postsPerPage: number
}

export default function BlogPosts({ allPosts, postsPerPage }: BlogPostsProps) {
  const searchParams = useSearchParams()
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  
  useEffect(() => {
    // Get current page and category from URL
    const page = searchParams.get('page')
    const category = searchParams.get('category')
    
    const currentPage = page ? parseInt(page) : 1
    const selectedCategory = category || 'Todos'
    
    // Filter posts by category
    const categoryFilteredPosts = selectedCategory === 'Todos' 
      ? allPosts 
      : allPosts.filter(post => post.category === selectedCategory)
    
    // Paginate posts
    const startIndex = (currentPage - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    const paginatedPosts = categoryFilteredPosts.slice(startIndex, endIndex)
    
    setFilteredPosts(paginatedPosts)
  }, [searchParams, allPosts, postsPerPage])

  if (filteredPosts.length === 0) {
    const selectedCategory = searchParams.get('category') || 'Todos'
    
    return (
      <div className="bg-white rounded-xl p-8 text-center">
        <h3 className="font-poppins font-bold text-xl text-cinza-escuro mb-2">Nenhum artigo encontrado</h3>
        <p className="text-cinza-medio mb-4">Não há artigos na categoria "{selectedCategory}" no momento.</p>
        <Link 
          href="/blog"
          className="btn-primary"
        >
          Ver todos os artigos
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {filteredPosts.map((post) => (
        <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="md:flex">
            <div className="md:w-1/3">
              {post.image ? (
                <BlogImage 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover min-h-[200px]"
                  fallbackText="Imagem indisponível"
                />
              ) : (
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full min-h-[200px] flex items-center justify-center">
                  <span className="text-cinza-medio text-sm">Imagem do post</span>
                </div>
              )}
            </div>
            <div className="p-6 md:w-2/3">
              <div className="flex items-center gap-4 text-sm text-cinza-medio mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="bg-azul-confianca text-white px-2 py-1 rounded text-xs">
                  {post.readTime}
                </span>
              </div>
              <h2 className="font-poppins font-bold text-xl text-cinza-escuro mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-azul-confianca transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-cinza-medio mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-block bg-cinza-claro text-cinza-escuro px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-azul-confianca font-medium hover:text-azul-confianca/80 flex items-center gap-1"
                >
                  Ler artigo completo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}