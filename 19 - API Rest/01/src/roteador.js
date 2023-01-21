// GET, POST e DELETE.
const express = require('express')
const alunos = require('./controladores/alunos')

const rotas = express()

rotas.get('/alunos', alunos.listarAlunos)
rotas.get('/alunos/:id', alunos.encontrarAluno)
rotas.post('/alunos', alunos.adicionarAluno)
rotas.delete('/:id', alunos.deletarAluno)
rotas.put('/alunos/:id', alunos.atualizandoFichaDoAluno)
rotas.patch('/alunos/:id', alunos.atualizandoDadoDoAluno)

module.exports = rotas

