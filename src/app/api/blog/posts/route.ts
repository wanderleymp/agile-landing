import { NextResponse } from 'next/server'
import { getAllBlogPosts } from '@/lib/blog'

export async function GET() {
  try {
    const posts = getAllBlogPosts()
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Failed to fetch blog posts:', error)
    return NextResponse.json([], { status: 500 })
  }
}