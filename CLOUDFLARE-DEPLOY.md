# 🚀 Deploy Automático - Cloudflare Pages

## ⚡ **Por que Cloudflare Pages?**

✅ **Gratuito** - Ilimitado para projetos pessoais  
✅ **Performance** - CDN global com 275+ pontos de presença  
✅ **Deploy rápido** - Build em ~2 minutos  
✅ **SSL automático** - Certificado gratuito  
✅ **Analytics incluído** - Dados de tráfego detalhados  
✅ **DDoS protection** - Proteção automática  

## 📋 **Passo a Passo**

### **1. Acessar Cloudflare Pages**
🔗 **Link direto:** https://pages.cloudflare.com

### **2. Conectar GitHub**
1. Clique em **"Create a project"**
2. Selecione **"Connect to Git"**
3. Autorize acesso ao GitHub
4. Escolha o repositório: **`wanderleymp/agile-landing`**

### **3. Configurar Build**
```
Project name: agile-gestao-landing
Production branch: main
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Root directory: (deixe vazio)
```

### **4. Variáveis de Ambiente (Opcional)**
```
NODE_VERSION = 18
NPM_VERSION = latest
```

### **5. Deploy**
- ✅ Clique **"Save and Deploy"**
- ⏱️ Aguarde ~2-3 minutos
- 🎉 Site no ar!

## 🌐 **URL Final**
Seu site ficará disponível em:
```
https://agile-gestao-landing.pages.dev
```

## 🔄 **Deploy Automático**
- 🔄 **Cada `git push`** → Deploy automático
- 🌿 **Branch preview** → URLs de teste para branches
- 📊 **Analytics** → Painel com estatísticas

## ⚙️ **Configurações Avançadas**

### **Domínio Personalizado**
1. No painel Cloudflare Pages
2. **Custom domains** → **"Set up a custom domain"**
3. Digite: `agilegestaoempresarial.com.br`
4. Configure DNS conforme instruções

### **Headers de Segurança**
✅ **Já configurado** no arquivo `_headers`

### **Redirects**
✅ **Já configurado** no arquivo `public/_redirects`

## 🚀 **Vantagens vs Vercel**

| Feature | Cloudflare | Vercel |
|---------|------------|--------|
| **Bandwidth** | Ilimitado | 100GB/mês |
| **Builds** | 5.000/mês | 6.000/mês |
| **CDN** | 275+ locais | Global |
| **Analytics** | Incluído | Pago |
| **DDoS** | Incluído | Básico |

## 🛠️ **Comandos Úteis**

### **Build local para teste:**
```bash
npm run build:cloudflare
```

### **Verificar arquivos gerados:**
```bash
ls -la out/
```

### **Testar localmente:**
```bash
npx serve out -p 3000
```

## ✅ **Checklist de Deploy**
- ✅ Repositório no GitHub atualizado
- ✅ Configuração Next.js para export
- ✅ Headers e redirects configurados
- ✅ Build command correto
- ✅ Output directory = `out`

## 🎯 **Resultado Final**
- 🌐 **URL personalizada**
- ⚡ **Performance máxima**
- 🔄 **Deploy automático**
- 📊 **Analytics incluído**
- 🔒 **Segurança premium**