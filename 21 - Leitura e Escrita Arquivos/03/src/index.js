const express = require('express')
const { buscarEnderecos } = require('./controladores/endereco')

const app = express()

app.use(express.json())

app.get('/enderecos/:cep', buscarEnderecos)

app.listen(3000)