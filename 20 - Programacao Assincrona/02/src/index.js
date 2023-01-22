const express = require('express');
const { listarPokemons, detalharPokemon } = require('utils-playground');

const app = express()


app.get('/pokemon', async (req, res) => {
    const pokemons = await listarPokemons();

    return res.send(pokemons.results);

});

app.get('/pokemon/:procurar', async (req, res) => {
    const { procurar } = req.params;
    const pokemons = await detalharPokemon(procurar);


    const { id,
        name,
        height,
        weight,
        base_experience,
        forms,
        abilities,
        species } = pokemons

    const pokemon = {
        id,
        name,
        height,
        weight,
        base_experience,
        forms,
        abilities,
        species
    }

    return res.json(pokemon)
})



app.listen(3000)