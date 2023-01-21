const express = require('express')
const app = express()

let minutos = 00
let segundos = 00
let tempo;
let cronometro;

app.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, '0')} minutos e ${segundos.toString().padStart(2, '0')} segundos`)

})

app.get('/iniciar', (req, res) => {
    cronometro = () => {
        tempo = setInterval(() => {
            if (segundos === 59) {
                minutos++
                segundos = 00
            } else {
                segundos++
            }
        }, 1000)
    }
    cronometro()

    res.send(`Cronômetro iniciado!`)

})

app.get('/pausar', (req, res) => {
    clearInterval(tempo)
    res.send(`Cronômetro pausado!`)
})

app.get('/continuar', (req, res) => {
    cronometro()
    res.send(`Cronômetro continuando!`)
})

app.get('/zerar', (req, res) => {
    minutos = 00
    segundos = 00
    res.send(`Cronômetro zerado!`)
})


app.listen(8000)