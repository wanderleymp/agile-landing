'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import * as analytics from '@/lib/analytics'

interface BlogPaginationProps {
  totalPages: number
  categories: { name: string; count: number }[]
}

export default function BlogPagination({ totalPages, categories }: BlogPaginationProps) {
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  
  useEffect(() => {
    // Get current page and category from URL
    const page = searchParams.get('page')
    const category = searchParams.get('category')
    
    setCurrentPage(page ? parseInt(page) : 1)
    setSelectedCategory(category || 'Todos')
  }, [searchParams])

  // Function to build pagination links
  const buildPaginationLink = (page: number) => {
    const params = new URLSearchParams()
    if (page > 1) params.set('page', page.toString())
    if (selectedCategory && selectedCategory !== 'Todos') params.set('category', selectedCategory)
    return `/blog${params.toString() ? `?${params.toString()}` : ''}`
  }

  // Function to build category links
  const buildCategoryLink = (category: string) => {
    const params = new URLSearchParams()
    if (category !== 'Todos') params.set('category', category)
    return `/blog${params.toString() ? `?${params.toString()}` : ''}`
  }

  // Handle category change with tracking
  const handleCategoryChange = (category: string) => {
    analytics.trackBlogCategoryFilter(category)
    setSelectedCategory(category)
  }

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={buildCategoryLink(category.name)}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                  category.name === selectedCategory
                    ? 'bg-azul-confianca text-white'
                    : 'bg-cinza-claro text-cinza-escuro hover:bg-gray-200'
                }`}
              >
                {category.name} {category.count > 0 && `(${category.count})`}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={buildPaginationLink(page)}
              onClick={() => analytics.trackGAEvent('page_view', 'Blog', `Page ${page}`)}
              className={`px-4 py-2 rounded-lg ${
                page === currentPage
                  ? 'bg-azul-confianca text-white'
                  : 'bg-white text-cinza-escuro border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}