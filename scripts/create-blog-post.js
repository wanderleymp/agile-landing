#!/usr/bin/env node

// Script para criar um novo post no blog do Colibri
const fs = require('fs');
const path = require('path');

// Função para converter título em slug
function createSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/[\s_-]+/g, '-') // Substitui espaços por hífens
    .replace(/^-+|-+$/g, ''); // Remove hífens do início e fim
}

// Função para obter a data formatada em português
function getFormattedDate() {
  const months = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];
  
  const now = new Date();
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  
  return `${day} de ${month} de ${year}`;
}

// Função para obter a data em formato ISO
function getISODate() {
  return new Date().toISOString().split('T')[0];
}

// Verifica argumentos
const args = process.argv.slice(2);
if (args.length < 1) {
  console.log('Uso: npm run create-post "Título do Post" [categoria] [tempo-leitura]');
  console.log('Exemplo: npm run create-post "Como Usar o Módulo de Delivery" "Tutoriais" "8 min"');
  process.exit(1);
}

const title = args[0];
const category = args[1] || 'Tutoriais';
const readTime = args[2] || '5 min';
const slug = args[3] || createSlug(title);

// Diretório do blog
const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog', '[slug]', 'posts');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

// Conteúdo do template do post
const postContent = `{
  "title": "${title}",
  "date": "${getISODate()}",
  "formattedDate": "${getFormattedDate()}",
  "author": "Equipe Agile",
  "category": "${category}",
  "readTime": "${readTime}",
  "excerpt": "Resumo do conteúdo do post aqui...",
  "content": "
    <p>Introdução do seu post aqui...</p>
    
    <h2 className=\\"font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4\\">Tópico Principal</h2>
    <p>Conteúdo detalhado do tópico...</p>
    
    <div className=\\"bg-azul-claro border-l-4 border-azul-confianca p-4 my-6 rounded\\">
      <h3 className=\\"font-semibold text-cinza-escuro mb-2\\">Dica Profissional:</h3>
      <p>Dica valiosa relacionada ao tópico...</p>
    </div>
    
    <h2 className=\\"font-poppins font-bold text-2xl text-cinza-escuro mt-8 mb-4\\">Conclusão</h2>
    <p>Conclusão do seu post aqui...</p>
  "
}`;

// Caminho do arquivo do post
const postPath = path.join(blogDir, `${slug}.json`);

// Verifica se o arquivo já existe
if (fs.existsSync(postPath)) {
  console.log(`ATENÇÃO: O post com slug "${slug}" já existe!`);
  console.log('Deseja sobrescrever? (s/N)');
  
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      if (chunk.trim().toLowerCase() === 's') {
        fs.writeFileSync(postPath, postContent);
        console.log(`\n✅ Post atualizado em: ${postPath}`);
        console.log(`🔗 Acesse em: /blog/${slug}`);
      } else {
        console.log('Operação cancelada.');
      }
      process.exit(0);
    }
  });
} else {
  fs.writeFileSync(postPath, postContent);
  console.log(`\n✅ Post criado em: ${postPath}`);
  console.log(`🔗 Acesse em: /blog/${slug}`);
  
  // Adiciona instruções para o próximo passo
  console.log('\n📝 Próximos passos:');
  console.log('1. Edite o arquivo JSON para adicionar o conteúdo completo');
  console.log('2. Adicione uma imagem para o post em /public/images/blog/');
  console.log('3. Atualize os dados mockados no arquivo de página do blog');
  console.log('4. Teste o post localmente');
}