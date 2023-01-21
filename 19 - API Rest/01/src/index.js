const express = require('express')
const rotas = require('./roteador')
const { validacaoSenha } = require('./intermediarios')

const app = express()

app.use(express.json())
app.use(validacaoSenha)
app.use(rotas)


app.listen(3000)