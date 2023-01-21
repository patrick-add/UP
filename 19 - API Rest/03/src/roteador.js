const express = require('express')
const livros = require('./controladores/livros')

const rotas = express()

rotas.get('/livros', livros.listarLivros)
rotas.get('/livros/:id', livros.encontrandoLivro)
rotas.post('/livros', livros.adicionarLivro)
rotas.put('/livros/:id', livros.substituirLivro)
rotas.patch('/livros/:id', livros.alterarLivro)
rotas.delete('/livros/:id', livros.removerLivro)

module.exports = rotas