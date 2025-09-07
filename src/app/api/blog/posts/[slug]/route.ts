import { NextResponse } from 'next/server'
import { getBlogPost } from '@/lib/blog'

export async function generateStaticParams() {
  // Para exportação estática, não precisamos gerar parâmetros para rotas de API
  return []
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