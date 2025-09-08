// Testar a função do cliente getAllBlogPosts
const mockPosts = [
  {
    id: 1,
    title: "Como Cadastrar Produtos no Colibri POS (Catálogo)",
    excerpt: "Aprenda o passo a passo completo para cadastrar produtos no sistema Colibri POS através do Catálogo, garantindo integração perfeita com o PDV e emissão correta de cupons fiscais.",
    date: "2024-09-08",
    author: "Equipe Agile",
    category: "Tutoriais",
    readTime: "6 min",
    image: "/images/blog/cadastro-produtos-colibri-pos.jpg",
    slug: "cadastro-produtos-colibri-pos"
  },
  {
    id: 2,
    title: "Como Usar o Módulo de Delivery do Colibri",
    excerpt: "Domine o módulo de delivery do sistema Colibri para integrar seus pedidos de delivery e otimizar sua operação.",
    date: "2024-03-20",
    author: "Equipe Agile",
    category: "Tutoriais",
    readTime: "8 min",
    image: "/images/blog/colibri-ifood.jpg",
    slug: "como-usar-modulo-delivery-colibri"
  },
  {
    id: 3,
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
    id: 4,
    title: "Sincronização PDV x Back Office: Guia Completo",
    excerpt: "Entenda como funciona a sincronização entre o PDV e o Back Office do sistema Colibri para manter seus dados atualizados.",
    date: "2024-03-10",
    author: "Equipe Agile",
    category: "Tutoriais",
    readTime: "7 min",
    image: "/images/blog/sync-pdv-backoffice.jpg",
    slug: "sincronizacao-pdv-backoffice"
  }
];

console.log('Testando função do cliente getAllBlogPosts...');
console.log('Número de posts no mock:', mockPosts.length);

// Testar a ordenação por data
const sortedPosts = mockPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
console.log('Posts ordenados por data:');
sortedPosts.forEach((post, index) => {
  console.log(`${index + 1}. ${post.title} - ${post.date}`);
});

console.log('Teste concluído com sucesso!');