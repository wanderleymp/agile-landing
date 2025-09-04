import Link from 'next/link'
import { Calendar, User, Clock, Share2, ArrowLeft } from 'lucide-react'
import LeadMagnetForm from '@/components/blog/LeadMagnetForm'
import BlogImage from '@/components/blog/BlogImage'

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
];

// Mock data - will be replaced with real data fetching
const getBlogPost = (slug: string) => {
  const posts: Record<string, {
    title: string;
    date: string;
    author: string;
    readTime: string;
    category: string;
    content: string;
  }> = {
    'cadastro-produtos-colibri-back-office': {
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
    },
    'sincronizacao-pdv-backoffice': {
      title: "Sincronização PDV x Back Office: Guia Completo",
      date: "2024-03-10",
      author: "Equipe Agile",
      readTime: "4 min",
      category: "Tutoriais",
      content: `
        <p>A sincronização entre o Colibri PDV e o Back Office é fundamental para manter todos os dados atualizados e consistentes. Este guia completo vai mostrar como realizar esse processo corretamente.</p>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Importância da Sincronização</h2>
        <p>Manter os sistemas sincronizados garante que:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Produtos cadastrados no Back Office apareçam no PDV</li>
          <li>Preços atualizados sejam refletidos nas vendas</li>
          <li>Estoque seja controlado em tempo real</li>
          <li>Promoções e descontos sejam aplicados corretamente</li>
        </ul>
        
        <div className="bg-azul-claro border-l-4 border-azul-confianca p-4 my-6 rounded">
          <h3 className="font-semibold text-cinza-escuro mb-2">Dica Importante:</h3>
          <p>Sempre sincronize após qualquer alteração no Back Office para evitar inconsistências.</p>
        </div>
      `
    },
    'controle-financeiro-colibri': {
      title: "Controle Financeiro com Colibri: Dicas Essenciais",
      date: "2024-03-05",
      author: "Equipe Agile",
      readTime: "6 min",
      category: "Gestão",
      content: `
        <p>O módulo financeiro do Colibri é uma ferramenta poderosa para controlar as finanças do seu restaurante. Veja como utilizá-lo da melhor forma.</p>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Configurações Iniciais</h2>
        <p>Antes de começar, configure corretamente:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Plano de contas adequado ao seu negócio</li>
          <li>Centros de custo (se necessário)</li>
          <li>Formas de pagamento aceitas</li>
          <li>Conciliação bancária inicial</li>
        </ul>
      `
    },
    'colibri-ped-comandas-eletronicas': {
      title: "Como Usar o Colibri PED+ para Comandas Eletrônicas",
      date: "2024-03-01",
      author: "Equipe Agile",
      readTime: "7 min",
      category: "Tutoriais",
      content: `
        <p>O Colibri PED+ é uma solução inovadora que permite aos garçons anotar pedidos diretamente em tablets ou smartphones Android, integrando-se perfeitamente com o sistema Colibri. Este guia mostrará como configurar e utilizar essa funcionalidade.</p>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Requisitos Necessários</h2>
        <p>Antes de começar, certifique-se de ter:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Dispositivos Android (tablets ou smartphones) com acesso à internet</li>
          <li>Aplicativo Colibri PED+ instalado nos dispositivos</li>
          <li>Permissões adequadas configuradas no Back Office</li>
          <li>Produtos cadastrados e sincronizados com o PDV</li>
        </ul>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Configuração no Back Office</h2>
        <p>Para habilitar o uso do PED+, siga estas etapas:</p>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>Acesse o menu <strong>Configurações</strong> > <strong>Módulos</strong></li>
          <li>Ative o módulo <strong>PED+</strong></li>
          <li>Configure os perfis de acesso para os garçons</li>
          <li>Defina as mesas e suas respectivas seções</li>
        </ol>
        
        <div className="bg-azul-claro border-l-4 border-azul-confianca p-4 my-6 rounded">
          <h3 className="font-semibold text-cinza-escuro mb-2">Dica Profissional:</h3>
          <p>Organize as mesas por seções (ex: térreo, mezanino, área externa) para facilitar a navegação dos garçons no aplicativo.</p>
        </div>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Utilização no Dispositivo</h2>
        <p>No tablet ou smartphone, os garçons devem:</p>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>Abrir o aplicativo Colibri PED+</li>
          <li>Selecionar a mesa desejada</li>
          <li>Adicionar os itens do pedido</li>
          <li>Enviar o pedido diretamente para a cozinha</li>
          <li>Fechar a comanda quando o cliente solicitar a conta</li>
        </ol>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Benefícios do Sistema</h2>
        <p>O uso do PED+ traz diversos benefícios:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Redução de erros:</strong> Menos pedidos perdidos ou mal interpretados</li>
          <li><strong>Agilidade:</strong> Pedidos enviados instantaneamente para a cozinha</li>
          <li><strong>Controle em tempo real:</strong> Acompanhamento de mesas ocupadas e livres</li>
          <li><strong>Melhor experiência do cliente:</strong> Atendimento mais rápido e eficiente</li>
        </ul>
        
        <p className="mt-6">Com o Colibri PED+, sua equipe de garçons terá uma ferramenta poderosa para melhorar a eficiência do atendimento e aumentar a satisfação dos clientes.</p>
      `
    },
    'colibri-ifood-integracao': {
      title: "Integração do Colibri com iFood: Automatize Seus Pedidos",
      date: "2024-02-25",
      author: "Equipe Agile",
      readTime: "6 min",
      category: "Integrações",
      content: `
        <p>A integração automática do Colibri com iFood permite que você receba pedidos diretamente no seu sistema, eliminando a necessidade de digitação manual e reduzindo erros. Veja como configurar essa integração.</p>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Pré-requisitos</h2>
        <p>Antes de configurar a integração, verifique se você possui:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Conta ativa no iFood para restaurantes</li>
          <li>Sistema Colibri atualizado para a versão mais recente</li>
          <li>Conexão estável com a internet</li>
          <li>Permissões de administrador no Back Office</li>
        </ul>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Configuração Inicial</h2>
        <p>Siga estes passos para configurar a integração:</p>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>No Back Office, acesse <strong>Integrações</strong> > <strong>iFood</strong></li>
          <li>Clique em <strong>Conectar Conta</strong></li>
          <li>Insira suas credenciais do iFood</li>
          <li>Autorize o acesso aos dados do restaurante</li>
          <li>Configure os mapeamentos de produtos</li>
        </ol>
        
        <div className="bg-azul-claro border-l-4 border-azul-confianca p-4 my-6 rounded">
          <h3 className="font-semibold text-cinza-escuro mb-2">Importante:</h3>
          <p>Mantenha os preços sincronizados entre o iFood e o Colibri para evitar discrepâncias que possam confundir os clientes.</p>
        </div>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Mapeamento de Produtos</h2>
        <p>Para que os pedidos sejam processados corretamente:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Mapeie cada produto do iFood com o correspondente no Colibri</li>
          <li>Configure opções e adicionais de forma consistente</li>
          <li>Defina regras para produtos indisponíveis</li>
          <li>Teste a integração com pedidos de teste</li>
        </ul>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Monitoramento e Manutenção</h2>
        <p>Após a configuração, é importante:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Verificar regularmente o status da conexão</li>
          <li>Atualizar mapeamentos quando produtos forem modificados</li>
          <li>Monitorar pedidos para identificar possíveis problemas</li>
          <li>Manter o sistema Colibri atualizado</li>
        </ul>
        
        <p className="mt-6">Com a integração do iFood configurada corretamente, você poderá focar no preparo dos pedidos enquanto o sistema cuida da gestão automática.</p>
      `
    },
    'fechamento-caixa-colibri': {
      title: "Fechamento de Caixa do Colibri: Passo a Passo",
      date: "2024-02-20",
      author: "Equipe Agile",
      readTime: "8 min",
      category: "Tutoriais",
      content: `
        <p>O fechamento de caixa é uma das atividades mais importantes do dia a dia de um restaurante. O Colibri oferece uma ferramenta completa para realizar esse processo de forma eficiente e segura. Veja como fazer corretamente.</p>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Preparação para o Fechamento</h2>
        <p>Antes de iniciar o fechamento, verifique:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Todos os pedidos foram finalizados</li>
          <li>Não há mesas abertas pendentes</li>
          <li>Todos os pagamentos foram processados</li>
          <li>As sangrias foram registradas corretamente</li>
        </ul>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Iniciando o Fechamento</h2>
        <p>Para iniciar o processo de fechamento:</p>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>No PDV, selecione <strong>Fechamento de Caixa</strong></li>
          <li>Confirme os dados do operador</li>
          <li>Insira o valor em caixa físico</li>
          <li>Verifique as diferenças entre o sistema e o físico</li>
        </ol>
        
        <div className="bg-azul-claro border-l-4 border-azul-confianca p-4 my-6 rounded">
          <h3 className="font-semibold text-cinza-escuro mb-2">Dica Importante:</h3>
          <p>Faça o fechamento de caixa no final de cada turno para manter um melhor controle financeiro e identificar possíveis discrepâncias rapidamente.</p>
        </div>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Análise dos Relatórios</h2>
        <p>O Colibri gera diversos relatórios durante o fechamento:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Resumo de Vendas:</strong> Total de vendas por forma de pagamento</li>
          <li><strong>Detalhamento de Produtos:</strong> Quantidade e valor vendido por item</li>
          <li><strong>Sangrias e Reforços:</strong> Movimentações de caixa durante o dia</li>
          <li><strong>Comissões:</strong> Cálculo de comissões de garçons</li>
        </ul>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Finalização</h2>
        <p>Após confirmar todos os dados:</p>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>Confirme o fechamento no sistema</li>
          <li>Imprima os relatórios para arquivo</li>
          <li>Transfira o dinheiro excedente para o cofre</li>
          <li>Prepare o caixa para o próximo turno</li>
        </ol>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Dicas para um Fechamento Eficiente</h2>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Realize sangrias regulares durante o dia para evitar excesso de dinheiro em caixa</li>
          <li>Treine sua equipe para identificar notas falsas</li>
          <li>Mantenha um controle rigoroso de despesas pagas em dinheiro</li>
          <li>Compare os relatórios diariamente para identificar tendências</li>
        </ul>
        
        <p className="mt-6">Com um fechamento de caixa bem executado, você terá total controle sobre as finanças do seu restaurante e poderá tomar decisões baseadas em dados precisos.</p>
      `
    },
    'relatorios-gerenciais-colibri': {
      title: "Relatórios Gerenciais do Colibri: Tomada de Decisão",
      date: "2024-02-15",
      author: "Equipe Agile",
      readTime: "6 min",
      category: "Gestão",
      content: `
        <p>Os relatórios gerenciais do Colibri são ferramentas poderosas para entender o desempenho do seu restaurante e tomar decisões estratégicas. Aprenda a interpretar os principais indicadores.</p>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Relatório de Vendas por Período</h2>
        <p>Este relatório mostra:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Tendências de vendas diárias, semanais e mensais</li>
          <li>Horários de pico de movimento</li>
          <li>Comparação com períodos anteriores</li>
          <li>Impacto de promoções e eventos</li>
        </ul>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Análise de Produtos</h2>
        <p>Para otimizar seu cardápio:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Identifique os produtos mais vendidos</li>
          <li>Descubra itens com baixo giro</li>
          <li>Analise a margem de contribuição de cada item</li>
          <li>Monitore o ticket médio por categoria</li>
        </ul>
        
        <div className="bg-azul-claro border-l-4 border-azul-confianca p-4 my-6 rounded">
          <h3 className="font-semibold text-cinza-escuro mb-2">Dica Estratégica:</h3>
          <p>Use os dados de produtos com baixo giro para criar promoções direcionadas ou removê-los do cardápio para reduzir custos.</p>
        </div>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Controle de Estoque</h2>
        <p>O relatório de estoque ajuda a:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Prevenir rupturas de produtos essenciais</li>
          <li>Identificar excessos que podem gerar perdas</li>
          <li>Calcular a necessidade de compras</li>
          <li>Monitorar a rotatividade dos insumos</li>
        </ul>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Indicadores Financeiros</h2>
        <p>Principais KPIs para monitorar:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Ticket Médio:</strong> Valor médio por cliente</li>
          <li><strong>Covers:</strong> Número de clientes atendidos</li>
          <li><strong>Lucro Bruto:</strong> Diferença entre vendas e custos</li>
          <li><strong>CMV:</strong> Custo das mercadorias vendidas</li>
        </ul>
        
        <p className="mt-6">Ao utilizar os relatórios gerenciais de forma consistente, você transformará dados em insights valiosos para o crescimento do seu negócio.</p>
      `
    },
    'gestao-estoque-colibri': {
      title: "Gestão de Estoque Inteligente com Colibri",
      date: "2024-02-10",
      author: "Equipe Agile",
      readTime: "7 min",
      category: "Tutoriais",
      content: `
        <p>Uma gestão de estoque eficiente é crucial para a saúde financeira de um restaurante. O Colibri oferece ferramentas inteligentes para controlar seus insumos com precisão. Veja como utilizar.</p>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Cadastro de Insumos</h2>
        <p>Para começar, cadastre todos os seus insumos:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Acesse <strong>Cadastros</strong> > <strong>Insumos</strong></li>
          <li>Preencha nome, unidade de medida e categoria</li>
          <li>Informe o estoque inicial</li>
          <li>Defina o ponto de pedido mínimo</li>
        </ul>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Integração com Produtos Vendáveis</h2>
        <p>Conecte insumos aos produtos do cardápio:</p>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>Edite cada produto vendável</li>
          <li>Acesse a aba <strong>Composição</strong></li>
          <li>Adicione os insumos utilizados e suas quantidades</li>
          <li>Salve e sincronize as alterações</li>
        </ol>
        
        <div className="bg-azul-claro border-l-4 border-azul-confianca p-4 my-6 rounded">
          <h3 className="font-semibold text-cinza-escuro mb-2">Dica Profissional:</h3>
          <p>Cadastre insumos com o maior nível de detalhe possível, incluindo marca e fornecedor, para facilitar a reposição.</p>
        </div>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Movimentações de Estoque</h2>
        <p>Registre todas as entradas e saídas:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Entradas:</strong> Compras, transferências, devoluções</li>
          <li><strong>Saídas:</strong> Consumo em produtos, perdas, avarias</li>
          <li><strong>Ajustes:</strong> Correções de inventário</li>
        </ul>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Alertas e Relatórios</h2>
        <p>O sistema gera alertas para:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Estoque abaixo do mínimo configurado</li>
          <li>Produtos próximos da data de validade</li>
          <li>Insumos com baixa rotatividade</li>
          <li>Sugestões de compras baseadas no consumo</li>
        </ul>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Controle de Validade</h2>
        <p>Para produtos perecíveis:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Registre a data de validade no recebimento</li>
          <li>Utilize o critério de primeiro a vencer, primeiro a sair</li>
          <li>Monitore alertas de produtos próximos do vencimento</li>
          <li>Registre perdas por vencimento para análise</li>
        </ul>
        
        <p className="mt-6">Com uma gestão de estoque eficiente no Colibri, você reduzirá perdas, otimizará compras e melhorará sua margem de lucro.</p>
      `
    },
    'fidelizacao-clientes-colibri': {
      title: "Fidelização de Clientes com o Colibri Delivery",
      date: "2024-02-05",
      author: "Equipe Agile",
      readTime: "5 min",
      category: "Gestão",
      content: `
        <p>Fidelizar clientes é essencial para manter um negócio de delivery lucrativo. O Colibri Delivery oferece ferramentas poderosas para criar programas de fidelização eficazes. Descubra como utilizar.</p>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Cadastro de Clientes</h2>
        <p>Organize seu banco de clientes:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Registre dados completos no primeiro pedido</li>
          <li>Mantenha histórico de pedidos e preferências</li>
          <li>Classifique clientes por valor e frequência</li>
          <li>Segmente por bairros e perfis de consumo</li>
        </ul>
        
        <h2 className="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Programa de Pontos</h2>
        <p>Crie um sistema de recompensas:</p>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>Defina a pontuação por real gasto</li>
          <li>Crie recompensas atrativas (cupons, brindes)</li>
          <li>Automatize o acúmulo de pontos</li>
          <li>Envie notificações sobre pontos disponíveis</li>
        </ol>
        
        <div class="bg-azul-claro border-l-4 border-azul-confianca p-4 my-6 rounded">
          <h3 class="font-semibold text-cinza-escuro mb-2">Dica de Marketing:</h3>
          <p>Ofereça bônus por indicações para transformar clientes fiéis em promotores da sua marca.</p>
        </div>
        
        <h2 class="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Campanhas Personalizadas</h2>
        <p>Envie ofertas direcionadas:</p>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li>Aniversariantes do mês</li>
          <li>Clientes inativos há mais de 30 dias</li>
          <li>Preferências de cardápio específicas</li>
          <li>Pedidos recorrentes (ex: sexta-feira à noite)</li>
        </ul>
        
        <h2 class="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Feedback e Melhoria Contínua</h2>
        <p>Utilize o feedback dos clientes para:</p>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li>Melhorar a qualidade dos produtos</li>
          <li>Ajustar o tempo de entrega</li>
          <li>Identificar oportunidades de upsell</li>
          <li>Resolver problemas rapidamente</li>
        </ul>
        
        <h2 class="font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4">Métricas de Sucesso</h2>
        <p>Acompanhe indicadores importantes:</p>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li><strong>Taxa de Retenção:</strong> % de clientes que repetem pedidos</li>
          <li><strong>Valor do Cliente:</strong> Ticket médio x frequência</li>
          <li><strong>NPS:</strong> Índice de satisfação e recomendação</li>
          <li><strong>Custo de Aquisição:</strong> Investimento em campanhas</li>
        </ul>
        
        <p class="mt-6">Um programa de fidelização bem estruturado pode aumentar significativamente o lifetime value dos seus clientes e garantir a sustentabilidade do seu negócio de delivery.</p>
      `
    }
  };
  
  return posts[slug];
};

// This function is required for static export
export async function generateStaticParams() {
  // For now, return empty array as we'll generate pages dynamically
  // In a real implementation, this would fetch from a CMS or database
  return [
    { slug: 'cadastro-produtos-colibri-back-office' },
    { slug: 'sincronizacao-pdv-backoffice' },
    { slug: 'controle-financeiro-colibri' },
    { slug: 'colibri-ped-comandas-eletronicas' },
    { slug: 'colibri-ifood-integracao' },
    { slug: 'fechamento-caixa-colibri' },
    { slug: 'relatorios-gerenciais-colibri' },
    { slug: 'gestao-estoque-colibri' },
    { slug: 'fidelizacao-clientes-colibri' }
  ]
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blogPost = getBlogPost(params.slug);
  // Find the post in our mock data to get the image
  const allPosts = getAllBlogPosts();
  const postWithImage = allPosts.find(post => post.slug === params.slug);
  
  // Handle case where blog post is not found
  if (!blogPost) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-poppins font-bold text-3xl text-cinza-escuro mb-4">Post não encontrado</h1>
          <p className="text-cinza-medio mb-6">O artigo que você está procurando não existe ou foi removido.</p>
          <Link 
            href="/blog" 
            className="btn-primary"
          >
            Voltar para o blog
          </Link>
        </div>
      </div>
    );
  }
  
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
              {postWithImage?.image && (
                <div className="mb-8 rounded-xl overflow-hidden">
                  <BlogImage 
                    src={postWithImage.image} 
                    alt={blogPost.title}
                    className="w-full h-auto object-cover"
                    fallbackText="Imagem indisponível"
                  />
                </div>
              )}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content || '' }}
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