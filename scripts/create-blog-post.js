#!/usr/bin/env node

// Simple script to create a new blog post template
const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node create-blog-post.js "Post Title" slug');
  process.exit(1);
}

const title = args[0];
const slug = args[1];

// Create blog post directory if it doesn't exist
const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog', slug);
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

// Create the blog post content
const postContent = `---
title: "${title}"
date: "${new Date().toISOString().split('T')[0]}"
author: "Equipe Agile"
category: "Tutoriais"
tags: []
---

## Introdução

Conteúdo do seu post aqui...

## Conclusão

Conclusão do seu post aqui...
`;

// Write the post file
const postPath = path.join(blogDir, 'content.md');
fs.writeFileSync(postPath, postContent);

console.log(`Blog post created at: ${postPath}`);
console.log(`Access it at: /blog/${slug}`);