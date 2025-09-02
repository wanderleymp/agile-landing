# Deploy com Vercel

## Pré-requisitos
- Conta no GitHub
- Conta no Vercel (https://vercel.com)

## Passos:

### 1. Preparar o repositório
```bash
# Commitar todas as mudanças
git add .
git commit -m "feat: prepare for deployment"

# Criar repositório no GitHub
# Vá para https://github.com/new
# Nome: agile-gestao-landing
```

### 2. Conectar ao GitHub
```bash
# Adicionar origin remoto (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/agile-gestao-landing.git
git branch -M main
git push -u origin main
```

### 3. Deploy no Vercel
1. Acesse https://vercel.com
2. Clique em "New Project"
3. Conecte sua conta GitHub
4. Selecione o repositório "agile-gestao-landing"
5. Configure:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: deixe vazio
6. Clique "Deploy"

### 4. Domínio personalizado (opcional)
- Nas configurações do projeto no Vercel
- Adicione seu domínio personalizado
- Configure DNS conforme instruções

## Resultado:
- Site disponível em: https://seu-projeto.vercel.app
- Deploy automático a cada push no GitHub
- SSL gratuito
- CDN global