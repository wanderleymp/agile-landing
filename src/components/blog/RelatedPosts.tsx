'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface RelatedPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  slug: string
}

interface RelatedPostsProps {
  posts: RelatedPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="font-poppins font-bold text-2xl text-cinza-escuro mb-6">
        Artigos Relacionados
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.slice(0, 4).map((post) => (
          <article 
            key={post.id} 
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 card-hover"
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block bg-azul-claro text-azul-confianca px-2 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-cinza-medio">
                  {post.readTime}
                </span>
              </div>
              <h4 className="font-poppins font-bold text-lg text-cinza-escuro mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-azul-confianca transition-colors">
                  {post.title}
                </Link>
              </h4>
              <p className="text-cinza-medio text-sm mb-3 line-clamp-2">
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
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}