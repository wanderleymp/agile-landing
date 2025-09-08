const fs = require('fs');
const path = require('path');

// Testar o parsing do JSON do post
const postsDir = path.join(__dirname, '..', 'src', 'app', 'blog', '[slug]', 'posts');
const filePath = path.join(postsDir, 'cadastro-produtos-colibri-pos.json');

console.log('Testando o arquivo:', filePath);

// Verificar se o arquivo existe
if (!fs.existsSync(filePath)) {
  console.error('Arquivo não encontrado:', filePath);
  process.exit(1);
}

// Ler o conteúdo do arquivo
const fileContents = fs.readFileSync(filePath, 'utf8');
console.log('Tamanho do arquivo:', fileContents.length, 'caracteres');

// Tentar fazer o parsing do JSON
try {
  const post = JSON.parse(fileContents);
  console.log('Parsing JSON bem-sucedido!');
  console.log('Título:', post.title);
  console.log('Data:', post.date);
  console.log('Autor:', post.author);
  console.log('Categoria:', post.category);
  console.log('Tempo de leitura:', post.readTime);
  console.log('Tamanho do conteúdo:', post.content ? post.content.length : 0, 'caracteres');
} catch (error) {
  console.error('Erro ao fazer parsing do JSON:', error.message);
  
  // Tentar identificar a posição do erro
  if (error.message.includes('position')) {
    const match = error.message.match(/position (\d+)/);
    if (match) {
      const position = parseInt(match[1]);
      console.log('Caracteres ao redor da posição do erro:');
      const start = Math.max(0, position - 20);
      const end = Math.min(fileContents.length, position + 20);
      console.log('Contexto:', fileContents.substring(start, end));
    }
  }
}