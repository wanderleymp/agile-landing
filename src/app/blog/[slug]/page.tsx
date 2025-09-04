'use client'

import Link from 'next/link'
import { Calendar, User, Clock, Share2, ArrowLeft } from 'lucide-react'
import LeadMagnetForm from '@/components/blog/LeadMagnetForm'

// Mock data - will be replaced with real data fetching
const blogPost = {
  title: "Como Cadastrar Produtos no Colibri Back Office",
  date: "2024-03-15",
  author: "Equipe Agile",
  readTime: "5 min",
  category: "Tutoriais",
  content: `
    <p>O cadastro correto de produtos no Colibri Back Office é essencial para que o sistema funcione de forma integrada e eficiente. Neste tutorial, vamos mostrar passo a passo como cadastrar produtos vendáveis no sistema.</p>

    <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Acesso ao Módulo de Produtos</h2>
    <p>Para começar, acesse o Colibri Back Office e navegue até o menu de cadastros:</p>
    <ol className="list-decimal pl-6 space-y-2 my-4">
      <li>No menu principal, clique em <strong>Cadastros</strong></li>
      <li>Selecione <strong>Produtos Vendáveis</strong></li>
      <li>Clique no botão <strong>Novo</strong> para iniciar o cadastro</li>
    </ol>

    <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Preenchendo as Informações Básicas</h2>
    <p>No formulário de cadastro, você precisará preencher as seguintes informações:</p>
    
    <div className="bg-cinza-claro rounded-lg p-4 my-4">
      <h3 className="font-semibold text-cinza-escuro mb-2">Campos Obrigatórios:</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Nome do Produto:</strong> Nome que aparecerá no PDV</li>
        <li><strong>Grupo/Categoria:</strong> Classificação do produto (ex: Bebidas, Pratos)</li>
        <li><strong>Unidade de Medida:</strong> Unidade (unidade, kg, porção, etc.)</li>
        <li><strong>Preço de Venda:</strong> Valor cobrado do cliente</li>
      </ul>
    </div>

    <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Configurações Avançadas</h2>
    <p>Para um controle mais detalhado, configure também:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Preço de Custo:</strong> Para cálculo de margem de contribuição</li>
      <li><strong>Tributação:</strong> Alíquota fiscal, NCM e CST</li>
      <li><strong>Composição:</strong> Para produtos que contêm outros insumos</li>
      <li><strong>Promoções:</strong> Descontos e regras especiais</li>
    </ul>

    <div className="bg-azul-claro border-l-4 border-azul-confianca p-4 my-6 rounded">
      <h3 className="font-semibold text-cinza-escuro mb-2">Dica Profissional:</h3>
      <p>Preencha sempre os campos de custo e tributação para ter relatórios financeiros precisos e evitar problemas com o fisco.</p>
    </div>

    <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Sincronização com o PDV</h2>
    <p>Após salvar o produto, é fundamental sincronizar com o PDV:</p>
    <ol className="list-decimal pl-6 space-y-2 my-4">
      <li>Acesse o módulo de <strong>Sincronização</strong> no menu principal</li>
      <li>Selecione os pontos de venda que receberão o produto</li>
      <li>Clique em <strong>Sincronizar</strong> e aguarde o processo concluir</li>
      <li>Verifique no PDV se o produto aparece corretamente</li>
    </ol>

    <div className="relative my-8 rounded-xl overflow-hidden bg-gray-100 border-2 border-dashed min-h-[300px] flex items-center justify-center">
      <span className="text-cinza-medio">Player de vídeo do YouTube será incorporado aqui</span>
    </div>

    <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Verificação Final</h2>
    <p>Para garantir que tudo está funcionando corretamente:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Faça uma venda de teste no PDV com o novo produto</li>
      <li>Verifique se o estoque é atualizado corretamente</li>
      <li>Confirme se os relatórios refletem a nova venda</li>
    </ul>

    <p className="mt-6">Com esses passos, você terá cadastrado corretamente seus produtos no Colibri Back Office, garantindo uma operação integrada e eficiente.</p>
  `
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="section-container py-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-azul-confianca hover:text-azul-confianca/80 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o blog
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm text-cinza-medio mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(blogPost.date).toLocaleDateString('pt-BR')}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {blogPost.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {blogPost.readTime} de leitura
            </span>
            <span className="bg-azul-confianca text-white px-2 py-1 rounded-full text-xs">
              {blogPost.category}
            </span>
          </div>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-cinza-escuro mb-6">
            {blogPost.title}
          </h1>
        </div>
      </div>

      <div className="section-container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <article className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 text-cinza-medio hover:text-azul-confianca">
                      <Share2 className="w-5 h-5" />
                      Compartilhar
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                      Facebook
                    </button>
                    <button className="bg-sky-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-sky-600">
                      Twitter
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-azul-confianca to-verde-sucesso rounded-xl p-8 text-white mt-8">
              <h3 className="font-poppins font-bold text-2xl mb-4">
                Quer ver isso funcionando no seu restaurante?
              </h3>
              <p className="mb-6 opacity-90">
                Agende uma demonstração gratuita do sistema Colibri e descubra como ele pode transformar sua gestão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-azul-confianca font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                  Solicitar Demonstração
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Falar no WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Lead Magnet Form */}
            <LeadMagnetForm />

            {/* About Author */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-lg text-cinza-escuro mb-4">Sobre o Autor</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div>
                  <h4 className="font-semibold text-cinza-escuro">Equipe Agile</h4>
                  <p className="text-sm text-cinza-medio">Especialistas em automação de restaurantes</p>
                </div>
              </div>
              <p className="text-cinza-medio text-sm">
                Com mais de 20 anos de experiência no setor gastronômico, nossa equipe ajuda restaurantes a otimizar sua gestão com tecnologia.
              </p>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-lg text-cinza-escuro mb-4">Artigos Relacionados</h3>
              <div className="space-y-4">
                <Link href="/blog/sincronizacao-pdv-backoffice" className="flex gap-3 group">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-cinza-escuro group-hover:text-azul-confianca transition-colors text-sm">
                      Sincronização PDV x Back Office: Guia Completo
                    </h4>
                    <p className="text-xs text-cinza-medio mt-1">10 de março de 2024</p>
                  </div>
                </Link>
                <Link href="/blog/controle-financeiro-colibri" className="flex gap-3 group">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-cinza-escuro group-hover:text-azul-confianca transition-colors text-sm">
                      Controle Financeiro com Colibri: Dicas Essenciais
                    </h4>
                    <p className="text-xs text-cinza-medio mt-1">5 de março de 2024</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}