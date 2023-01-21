const express = require('express')
const app = express()

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let contador = 0

app.get('/', (req, res) => {
    res.send(`É a vez de ${jogadores[contador]} jogar!`)
    contador++
    if (contador === jogadores.length) {
        contador = 0
    }
})

app.get('/remover', (req, res) => {
    const { indice } = req.query
    if (indice >= 0 && indice < jogadores.length) {
        jogadores.splice(indice, 1)
        res.send(jogadores)
    } else {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`)
    }
})

app.get('/adicionar', (req, res) => {
    let { nome, indice } = req.query
    if (!nome) {
        return res.send('Nenhum nome informado!')
    }

    nome = nome[0].toUpperCase() + nome.slice(1).toLowerCase()

    if (jogadores.includes(nome)) {
        return res.send(`Jogador já existente.`)
    }

    if (!indice) {
        jogadores.push(nome)
        return res.send(jogadores)
    }

    if (indice < 0 || indice >= jogadores.length) {
        return res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`)
    }

    jogadores.splice(indice, 0, nome)
    res.send(jogadores)
})

app.listen(8000)