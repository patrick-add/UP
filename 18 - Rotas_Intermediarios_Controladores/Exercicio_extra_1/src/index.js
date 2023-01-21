const express = require('express')
const app = express()

const { listagemCarros, encontrandoCarro } = require('./controladores/carros')

app.get('/carros', listagemCarros)

app.get('/carros/:idCarro', encontrandoCarro)

app.listen(3000)