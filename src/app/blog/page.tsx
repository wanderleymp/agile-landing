import Link from 'next/link'
import { Search, Calendar, User, Tag, ArrowLeft } from 'lucide-react'
import LeadMagnetForm from '@/components/blog/LeadMagnetForm'
import BlogImage from '@/components/blog/BlogImage'
import BlogPagination from '@/components/blog/BlogPagination'
import BlogPosts from '@/components/blog/BlogPosts'

// This function is required for static export
export async function generateStaticParams() {
  // For a blog with pagination, we might want to generate static pages for common combinations
  // For now, we'll return an empty array and handle pagination dynamically
  return []
}

// Mock blog data - will be replaced with real data from CMS or API
const getAllBlogPosts = () => [
  {
    id: 1,
    title: "Como Cadastrar Produtos no Colibri Back Office",
    excerpt: "Aprenda o passo a passo completo para cadastrar produtos no sistema Colibri Back Office, garantindo integração perfeita com o PDV.",
    date: "2024-03-15",
    author: "Equipe Agile",
    category: "Tutoriais",
    readTime: "5 min",
    image: "/images/blog/product-registration.jpg",
    slug: "cadastro-produtos-colibri-back-office"
  },
  {
    id: 2,
    title: "Sincronização PDV x Back Office: Guia Completo",
    excerpt: "Entenda a importância da sincronização entre os módulos do Colibri e como evitar erros comuns no dia a dia do restaurante.",
    date: "2024-03-10",
    author: "Equipe Agile",
    category: "Tutoriais",
    readTime: "4 min",
    image: "/images/blog/sync-pdv-backoffice.jpg",
    slug: "sincronizacao-pdv-backoffice"
  },
  {
    id: 3,
    title: "Controle Financeiro com Colibri: Dicas Essenciais",
    excerpt: "Descubra como utilizar o módulo financeiro do Colibri para ter controle total das finanças do seu restaurante.",
    date: "2024-03-05",
    author: "Equipe Agile",
    category: "Gestão",
    readTime: "6 min",
    image: "/images/blog/controle-financeiro.jpg",
    slug: "controle-financeiro-colibri"
  },
  {
    id: 4,
    title: "Como Usar o Colibri PED+ para Comandas Eletrônicas",
    excerpt: "Guia completo para instalar e utilizar o aplicativo de comandas eletrônicas do Colibri em dispositivos Android.",
    date: "2024-03-01",
    author: "Equipe Agile",
    category: "Tutoriais",
    readTime: "7 min",
    image: "/images/blog/colibri-ped.jpg",
    slug: "colibri-ped-comandas-eletronicas"
  },
  {
    id: 5,
    title: "Integração do Colibri com iFood: Automatize Seus Pedidos",
    excerpt: "Aprenda a configurar a integração automática com iFood e outros deliverys para receber pedidos diretamente no sistema.",
    date: "2024-02-25",
    author: "Equipe Agile",
    category: "Integrações",
    readTime: "6 min",
    image: "/images/blog/colibri-ifood.jpg",
    slug: "colibri-ifood-integracao"
  },
  {
    id: 6,
    title: "Fechamento de Caixa do Colibri: Passo a Passo",
    excerpt: "Domine completamente o fechamento de caixa do Colibri com nosso guia detalhado passo a passo.",
    date: "2024-02-20",
    author: "Equipe Agile",
    category: "Tutoriais",
    readTime: "8 min",
    image: "/images/blog/fechamento-caixa.jpg",
    slug: "fechamento-caixa-colibri"
  },
  {
    id: 7,
    title: "Relatórios Gerenciais do Colibri: Tomada de Decisão",
    excerpt: "Aprenda a interpretar os principais relatórios do Colibri para tomar decisões estratégicas para o seu restaurante.",
    date: "2024-02-15",
    author: "Equipe Agile",
    category: "Gestão",
    readTime: "6 min",
    image: "/images/blog/relatorios-gerenciais.jpg",
    slug: "relatorios-gerenciais-colibri"
  },
  {
    id: 8,
    title: "Gestão de Estoque Inteligente com Colibri",
    excerpt: "Descubra como otimizar seu controle de estoque com as ferramentas inteligentes do sistema Colibri.",
    date: "2024-02-10",
    author: "Equipe Agile",
    category: "Tutoriais",
    readTime: "7 min",
    image: "/images/blog/gestao-estoque.jpg",
    slug: "gestao-estoque-colibri"
  },
  {
    id: 9,
    title: "Fidelização de Clientes com o Colibri Delivery",
    excerpt: "Estratégias para criar programas de fidelização eficazes usando o módulo de delivery do Colibri.",
    date: "2024-02-05",
    author: "Equipe Agile",
    category: "Gestão",
    readTime: "5 min",
    image: "/images/blog/clientes-fieis.jpg",
    slug: "fidelizacao-clientes-colibri"
  }
]

// Get unique categories from posts
const getCategories = (posts: ReturnType<typeof getAllBlogPosts>) => {
  const categoryNames = ['Todos', ...Array.from(new Set(posts.map(post => post.category)))]
  return categoryNames.map(category => ({
    name: category,
    count: category === 'Todos' ? posts.length : posts.filter(post => post.category === category).length
  }))
}

// Simple pagination function
const paginate = (posts: any[], currentPage: number, postsPerPage: number) => {
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  return posts.slice(startIndex, endIndex)
}

// Get total pages
const getTotalPages = (totalPosts: number, postsPerPage: number) => {
  return Math.ceil(totalPosts / postsPerPage)
}

export default function BlogPage() {
  // For static generation, we use default values
  // But we'll pass all data to client components for dynamic filtering
  const currentPage = 1
  const postsPerPage = 3
  const selectedCategory = 'Todos'
  
  const allPosts = getAllBlogPosts()
  const categories = getCategories(allPosts)
  
  // Filter posts by category
  const categoryFilteredPosts = selectedCategory === 'Todos' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory)
  
  const filteredPosts = paginate(categoryFilteredPosts, currentPage, postsPerPage)
  const totalPages = getTotalPages(categoryFilteredPosts.length, postsPerPage)

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
                      className={`flex justify-between items-center w-full p-2 rounded-lg hover:bg-cinza-claro ${
                        category.name === selectedCategory ? 'bg-cinza-claro' : ''
                      }`}
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
                {allPosts.slice(0, 3).map((post) => (
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