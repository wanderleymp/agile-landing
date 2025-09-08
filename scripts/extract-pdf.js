const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function extractPdfContent() {
  try {
    const pdfPath = path.join(__dirname, '..', 'docs', 'CADASTRO  DE PRODUTO POS (CATALOGO).pdf');
    
    if (!fs.existsSync(pdfPath)) {
      console.log('Arquivo PDF não encontrado:', pdfPath);
      return;
    }
    
    const dataBuffer = fs.readFileSync(pdfPath);
    
    const data = await pdf(dataBuffer);
    
    console.log('Conteúdo extraído do PDF:');
    console.log('========================');
    console.log(data.text);
    
    // Salvar o conteúdo em um arquivo de texto
    const outputPath = path.join(__dirname, '..', 'docs', 'cadastro-produto-pos-extracted.txt');
    fs.writeFileSync(outputPath, data.text);
    console.log('\nConteúdo salvo em:', outputPath);
    
  } catch (error) {
    console.error('Erro ao extrair conteúdo do PDF:', error);
  }
}

extractPdfContent();