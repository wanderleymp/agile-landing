import Link from 'next/link'
import { Search, Calendar, User, Tag, ArrowLeft } from 'lucide-react'
import LeadMagnetForm from '@/components/blog/LeadMagnetForm'
import BlogImage from '@/components/blog/BlogImage'
import BlogPagination from '@/components/blog/BlogPagination'
import BlogPosts from '@/components/blog/BlogPosts'
import { getAllBlogPosts, getCategories } from '@/lib/blog'

// Função para buscar todos os posts usando função local
async function fetchAllBlogPosts() {
  try {
    // Usar a função local em vez de fetch para evitar problemas de rede durante build
    const posts = getAllBlogPosts()
    return posts
  } catch (error) {
    console.error('Failed to fetch blog posts:', error)
    return []
  }
}

// This function is required for static export
export async function generateStaticParams() {
  try {
    // Usar a função local em vez de fetch para evitar problemas de rede durante build
    const posts = getAllBlogPosts()
    
    // Para uma página de blog com paginação, podemos gerar páginas estáticas para combinações comuns
    // Vamos gerar páginas para as primeiras 5 páginas e para cada categoria
    const categories = getCategories(posts);
    const totalPages = Math.ceil(posts.length / 3); // 3 posts por página
    
    const params = [];
    
    // Gerar páginas para a visualização padrão (sem categoria)
    for (let i = 1; i <= Math.min(5, totalPages); i++) {
      params.push({ page: i.toString() });
    }
    
    // Gerar páginas para cada categoria
    for (const category of categories) {
      if (category.name !== 'Todos') {
        const categoryPosts = posts.filter(post => post.category === category.name);
        const categoryTotalPages = Math.ceil(categoryPosts.length / 3);
        
        for (let i = 1; i <= Math.min(3, categoryTotalPages); i++) {
          params.push({ 
            page: i.toString(),
            category: category.name
          });
        }
      }
    }
    
    return params;
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

export default async function BlogPage() {
  // For static generation, we use default values
  // But we'll pass all data to client components for dynamic filtering
  const currentPage = 1
  const postsPerPage = 3
  
  const allPosts = await fetchAllBlogPosts()
  const categories = getCategories(allPosts)
  
  // Filter posts by category (default is 'Todos')
  const categoryFilteredPosts = allPosts
  const filteredPosts = categoryFilteredPosts.slice(0, postsPerPage)
  const totalPages = Math.ceil(categoryFilteredPosts.length / postsPerPage)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="section-container py-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-azul-confianca hover:text-azul-confianca/80 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para página principal
          </Link>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-cinza-escuro mb-4">
            Blog <span className="text-azul-confianca">Agile Gestão</span>
          </h1>
          <p className="text-cinza-medio text-lg max-w-3xl">
            Dicas, tutoriais e melhores práticas para gerenciar seu restaurante com o sistema Colibri e nossa consultoria especializada.
          </p>
        </div>
      </div>

      <div className="section-container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Search and Filter - using client component for dynamic behavior */}
            <BlogPagination totalPages={totalPages} categories={categories} />

            {/* Blog Posts - using client component for dynamic filtering */}
            <BlogPosts allPosts={allPosts} postsPerPage={postsPerPage} />
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Lead Magnet Form */}
            <LeadMagnetForm />

            {/* About Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-lg text-cinza-escuro mb-4">Sobre o Blog</h3>
              <p className="text-cinza-medio mb-4">
                Compartilhamos conhecimento para ajudar restaurantes a otimizar sua gestão com o sistema Colibri e nossa consultoria especializada.
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-lg text-cinza-escuro mb-4">Categorias</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link 
                      href={`/blog${category.name === 'Todos' ? '' : `?category=${category.name}`}`}
                      className={`flex justify-between items-center w-full p-2 rounded-lg hover:bg-cinza-claro`}
                    >
                      <span className="text-cinza-escuro">{category.name}</span>
                      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-lg text-cinza-escuro mb-4">Mais Populares</h3>
              <div className="space-y-4">
                {allPosts.slice(0, 3).map((post: any) => (
                  <Link 
                    key={`popular-${post.id}`} 
                    href={`/blog/${post.slug}`}
                    className="flex gap-3 group"
                  >
                    {post.image ? (
                      <BlogImage 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
                        fallbackText="Img"
                      />
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex-shrink-0 flex items-center justify-center">
                        <span className="text-cinza-medio text-xs">Img</span>
                      </div>
                    )}
                    <div>
                      <h4 className="font-medium text-cinza-escuro group-hover:text-azul-confianca transition-colors text-sm">
                        {post.title}
                      </h4>
                      <p className="text-xs text-cinza-medio mt-1">
                        {new Date(post.date).toLocaleDateString('pt-BR')}
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
  )
}
