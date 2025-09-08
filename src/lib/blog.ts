// Função para ler todos os posts do blog - versão cliente
export const getAllBlogPosts = () => {
  try {
    // Este é um mock para desenvolvimento
    // Em produção, isso seria substituído por uma chamada API
    return [
      {
        id: 1,
        title: "Como Usar o Módulo de Delivery do Colibri",
        excerpt: "Aprenda a configurar e utilizar o poderoso módulo de delivery do Colibri para gerenciar todos os seus pedidos de delivery em um só lugar.",
        date: "2024-03-20",
        author: "Equipe Agile",
        category: "Tutoriais",
        readTime: "8 min",
        image: "/images/blog/colibri-ifood.jpg",
        slug: "como-usar-modulo-delivery-colibri"
      },
      {
        id: 2,
        title: "Como Cadastrar Produtos no Colibri Back Office",
        excerpt: "Aprenda o passo a passo completo para cadastrar produtos no sistema Colibri Back Office, garantindo integração perfeita com o PDV.",
        date: "2024-03-15",
        author: "Equipe Agile",
        category: "Tutoriais",
        readTime: "5 min",
        image: "/images/blog/sync-pdv-backoffice.jpg",
        slug: "cadastro-produtos-colibri-back-office"
      },
      {
        id: 3,
        title: "Sincronização PDV x Back Office: Guia Completo",
        excerpt: "Entenda como funciona a sincronização entre o PDV e o Back Office do sistema Colibri para manter seus dados atualizados.",
        date: "2024-03-10",
        author: "Equipe Agile",
        category: "Tutoriais",
        readTime: "7 min",
        image: "/images/blog/sync-pdv-backoffice.jpg",
        slug: "sincronizacao-pdv-backoffice"
      }
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
};

// Função para ler um post específico do blog - versão cliente
export const getBlogPost = (slug: string) => {
  try {
    // Este é um mock para desenvolvimento
    // Em produção, isso seria substituído por uma chamada API
    const allPosts = getAllBlogPosts();
    const post = allPosts.find(post => post.slug === slug) || null;
    
    // Se encontrou o post, precisamos carregar o conteúdo real do arquivo JSON
    if (post) {
      // Em um ambiente real, isso seria uma chamada fetch para a API
      // Por enquanto, vamos retornar o post com as propriedades básicas
      // O conteúdo será carregado via server-side rendering
      return post;
    }
    
    return null;
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
};

// Função para obter categorias únicas
export const getCategories = (posts: ReturnType<typeof getAllBlogPosts>) => {
  const categoryNames = ['Todos', ...Array.from(new Set(posts.map(post => post.category)))]
  return categoryNames.map(category => ({
    name: category,
    count: category === 'Todos' ? posts.length : posts.filter(post => post.category === category).length
  }))
}

// Função para paginação simples
export const paginate = (posts: any[], currentPage: number, postsPerPage: number) => {
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  return posts.slice(startIndex, endIndex)
}

// Função para obter número total de páginas
export const getTotalPages = (totalPosts: number, postsPerPage: number) => {
  return Math.ceil(totalPosts / postsPerPage)
}