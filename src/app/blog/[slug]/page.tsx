import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Search, AlertCircle } from 'lucide-react'
import PostFooter from '@/components/blog/PostFooter'
import { getBlogPostServer, getAllBlogPostsServer } from '@/lib/blog-server'

interface BlogPost {
  id?: number
  title: string
  date: string
  author: string
  readTime: string
  category: string
  content?: string
  slug: string
  excerpt?: string
  image?: string
}

interface PageProps {
  params: {
    slug: string;
  };
}

// Função necessária para exportação estática
export async function generateStaticParams() {
  try {
    // Usar a função do servidor para evitar problemas de rede durante build
    const posts = getAllBlogPostsServer()
    
    return posts.map((post: any) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Failed to generate static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: PageProps) {
  try {
    // Usar a função do servidor para evitar problemas de rede durante build
    const post = getBlogPostServer(params.slug)
    
    if (!post) {
      return {
        title: 'Post não encontrado',
        description: 'O post solicitado não foi encontrado.'
      };
    }
    
    return {
      title: post.title,
      description: `Leia sobre ${post.title} no blog da Agile Gestão Empresarial. ${post.readTime} de leitura.`,
      openGraph: {
        title: post.title,
        description: `Leia sobre ${post.title} no blog da Agile Gestão Empresarial. ${post.readTime} de leitura.`,
        type: 'article',
        article: {
          publishedTime: post.date,
          authors: [post.author],
          tags: [post.category]
        }
      }
    };
  } catch (error) {
    console.error('Failed to fetch blog post metadata:', error)
    return {
      title: 'Post não encontrado',
      description: 'O post solicitado não foi encontrado.'
    };
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  let post: BlogPost | null = null;
  let allPosts: BlogPost[] = [];
  let relatedPosts: BlogPost[] = [];
  
  try {
    // Fetch the main post using server function
    const postData = getBlogPostServer(params.slug)
    post = postData
    
    // If post not found, return not found component
    if (!post) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-azul-claro rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-azul-confianca" />
            </div>
            
            <h1 className="font-poppins font-bold text-3xl text-cinza-escuro mb-4">
              Artigo não encontrado
            </h1>
            
            <p className="text-cinza-medio mb-8">
              Desculpe, não conseguimos encontrar o artigo que você está procurando. 
              Ele pode ter sido removido ou o link pode estar incorreto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="btn-primary inline-flex items-center justify-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para o blog
              </Link>
              
              <Link 
                href="/"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Ir para a página inicial
              </Link>
            </div>
          </div>
        </div>
      );
    }
    
    // Fetch all posts for related posts and sidebar using server function
    const allPostsData = getAllBlogPostsServer()
    allPosts = allPostsData
    
    // Get related posts (same category, excluding current post)
    relatedPosts = allPosts
      .filter((p: BlogPost) => post && p.category === post.category && p.slug !== params.slug)
      .slice(0, 4);
      
  } catch (error) {
    console.error('Failed to fetch blog post data:', error)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
          
          <h1 className="font-poppins font-bold text-3xl text-cinza-escuro mb-4">
            Erro ao carregar o artigo
          </h1>
          
          <p className="text-cinza-medio mb-8">
            Ocorreu um erro ao carregar o artigo. Por favor, tente novamente mais tarde.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog"
              className="btn-primary inline-flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o blog
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="section-container py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-azul-confianca hover:text-azul-confianca/80 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o blog
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <article className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              {/* Post Header */}
              <header className="mb-8">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-cinza-medio">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime} de leitura</span>
                  </div>
                  <span className="inline-block bg-azul-claro text-azul-confianca px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h1 className="font-poppins font-bold text-2xl md:text-3xl text-cinza-escuro mb-4">
                  {post.title}
                </h1>
              </header>

              {/* Post Image */}
              <div className="mb-8 rounded-xl overflow-hidden">
                <img 
                  src={`/images/blog/${post.slug}.jpg`}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Post Content */}
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />

              {/* Post Footer */}
              <PostFooter postDate={post.date} />
            </article>

            {/* Related Posts */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-poppins font-bold text-2xl text-cinza-escuro mb-6">
                Artigos Relacionados
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.slice(0, 4).map((postItem: BlogPost) => (
                  <article 
                    key={postItem.id || postItem.slug} 
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 card-hover"
                  >
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block bg-azul-claro text-azul-confianca px-2 py-1 rounded-full text-xs font-medium">
                          {postItem.category}
                        </span>
                        <span className="text-xs text-cinza-medio">
                          {postItem.readTime}
                        </span>
                      </div>
                      <h4 className="font-poppins font-bold text-lg text-cinza-escuro mb-2">
                        <Link href={`/blog/${postItem.slug}`} className="hover:text-azul-confianca transition-colors">
                          {postItem.title}
                        </Link>
                      </h4>
                      <p className="text-cinza-medio text-sm mb-3 line-clamp-2">
                        {postItem.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-cinza-medio">
                          {new Date(postItem.date).toLocaleDateString('pt-BR')}
                        </span>
                        <Link 
                          href={`/blog/${postItem.slug}`}
                          className="text-azul-confianca font-medium hover:text-azul-confianca/80 flex items-center gap-1 text-sm"
                        >
                          Ler mais
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-12 bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-xl text-cinza-escuro mb-6">
                Deixe um comentário
              </h3>
              <p className="text-cinza-medio">
                Em breve adicionaremos a funcionalidade de comentários. Enquanto isso, você pode nos contatar através do WhatsApp para tirar dúvidas sobre este post.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Lead Magnet Form */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-lg text-cinza-escuro mb-4">
                Receba conteúdos exclusivos
              </h3>
              <p className="text-cinza-medio text-sm mb-4">
                Cadastre-se para receber dicas, tutoriais e materiais exclusivos sobre gestão de restaurantes.
              </p>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-confianca focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-confianca focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="WhatsApp (opcional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-confianca focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Receber conteúdos
                </button>
                
                <p className="text-xs text-cinza-medio text-center">
                  Prometemos não enviar spam. Você pode cancelar a qualquer momento.
                </p>
              </form>
            </div>
            
            {/* About Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-lg text-cinza-escuro mb-4">Sobre o Blog</h3>
              <p className="text-cinza-medio mb-4">
                Compartilhamos conhecimento para ajudar restaurantes a otimizar sua gestão com o sistema Colibri e nossa consultoria especializada.
              </p>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-lg text-cinza-escuro mb-4">Mais Populares</h3>
              <div className="space-y-4">
                {allPosts.slice(0, 5).map((postItem: BlogPost) => (
                  <Link 
                    key={`popular-${postItem.id || postItem.slug}`} 
                    href={`/blog/${postItem.slug}`}
                    className="flex gap-3 group"
                  >
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex-shrink-0 flex items-center justify-center">
                      <span className="text-cinza-medio text-xs">Img</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-cinza-escuro group-hover:text-azul-confianca transition-colors text-sm">
                        {postItem.title}
                      </h4>
                      <p className="text-xs text-cinza-medio mt-1">
                        {new Date(postItem.date).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}