import { NextResponse } from 'next/server'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'

// Função necessária para exportação estática
export async function generateStaticParams() {
  try {
    const posts = getAllBlogPosts()
    
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Failed to generate static params:', error)
    return []
  }
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const post = getBlogPost(params.slug)
    
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    
    return NextResponse.json(post)
  } catch (error) {
    console.error('Failed to fetch blog post:', error)
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}