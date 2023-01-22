const express = require('express')
const { listaDeProdutos, encontrandoProduto, calculandoFrete } = require('./controladores/produtos')

const app = express()

app.use(express.json())

app.get('/produtos', listaDeProdutos)
app.get('/produtos/:idProduto', encontrandoProduto)
app.get('/produtos/:idProduto/frete/:cep', calculandoFrete)

app.listen(3000)