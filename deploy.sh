#!/bin/bash

# Script de Deploy Manual
# Para usar: chmod +x deploy.sh && ./deploy.sh

echo "🚀 Iniciando processo de deploy..."

# 1. Instalar dependências
echo "📦 Instalando dependências..."
npm install

# 2. Build do projeto
echo "🔨 Fazendo build do projeto..."
npm run build

# 3. Verificar se build foi bem-sucedido
if [ -d "out" ]; then
    echo "✅ Build concluído com sucesso!"
    echo "📁 Arquivos estáticos gerados em ./out/"
    
    # 4. Informações para upload
    echo ""
    echo "📋 PRÓXIMOS PASSOS:"
    echo "1. Faça upload da pasta 'out' para seu servidor web"
    echo "2. Configure o servidor para servir arquivos estáticos"
    echo "3. Aponte seu domínio para o servidor"
    echo ""
    echo "🌐 HOSPEDAGENS RECOMENDADAS:"
    echo "- Hostinger (hospedagem compartilhada)"
    echo "- DigitalOcean (VPS)"
    echo "- AWS S3 + CloudFront"
    echo "- Google Cloud Storage"
    
else
    echo "❌ Erro no build! Verifique os logs acima."
    exit 1
fi