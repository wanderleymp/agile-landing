import { NextResponse } from 'next/server'
import { getAllBlogPosts } from '@/lib/blog'

// Função necessária para exportação estática
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function GET() {
  try {
    const posts = getAllBlogPosts()
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Failed to fetch blog posts:', error)
    return NextResponse.json([], { status: 500 })
  }
}