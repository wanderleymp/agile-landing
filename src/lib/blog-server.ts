import fs from 'fs'
import path from 'path'

// Função para ler todos os posts do blog - apenas para uso no servidor
export const getAllBlogPostsServer = () => {
  try {
    // Usar caminho relativo correto para o diretório de posts
    const postsDir = path.join(process.cwd(), 'src', 'app', 'blog', '[slug]', 'posts')
    
    // Verificar se o diretório existe
    if (!fs.existsSync(postsDir)) {
      console.error('Posts directory not found:', postsDir)
      return []
    }
    
    const filenames = fs.readdirSync(postsDir)
    
    const posts = filenames
      .filter(filename => filename.endsWith('.json'))
      .map((filename, index) => {
        const filePath = path.join(postsDir, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const post = JSON.parse(fileContents)
        
        // Extrair slug do nome do arquivo
        const slug = filename.replace(/\.json$/, '')
        
        return {
          id: index + 1,
          title: post.title,
          excerpt: post.excerpt,
          date: post.date,
          author: post.author,
          category: post.category,
          readTime: post.readTime,
          image: `/images/blog/${slug}.jpg`,
          slug: slug
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Ordenar por data, mais recente primeiro
      
    return posts
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

// Função para ler um post específico do blog - apenas para uso no servidor
export const getBlogPostServer = (slug: string) => {
  try {
    // Usar caminho relativo correto para o diretório de posts
    const postsDir = path.join(process.cwd(), 'src', 'app', 'blog', '[slug]', 'posts')
    const filePath = path.join(postsDir, `${slug}.json`)
    
    // Verificar se o arquivo existe
    if (!fs.existsSync(filePath)) {
      console.error('Post file not found:', filePath)
      return null
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const post = JSON.parse(fileContents)
    
    return {
      title: post.title,
      date: post.date,
      author: post.author,
      readTime: post.readTime,
      category: post.category,
      content: post.content,
      slug: slug
    }
  } catch (error) {
    console.error('Error reading blog post:', error)
    return null
  }
}