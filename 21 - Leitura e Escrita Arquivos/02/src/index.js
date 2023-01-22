const express = require('express');
const { listaPokemons, detalhesPokemon } = require('./controladores/pokemons');

const app = express()

app.use(express.json())

app.get('/pokemon', listaPokemons);
app.get('/pokemon/:procurar', detalhesPokemon)



app.listen(3000)