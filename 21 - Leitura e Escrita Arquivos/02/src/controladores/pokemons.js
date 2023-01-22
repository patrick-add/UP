const { listarPokemons, detalharPokemon } = require('utils-playground');

const listaPokemons = async (req, res) => {
    try {
        const pokemons = await listarPokemons();

        return res.send(pokemons.results);
    } catch (error) {
        return res.status(500).json('Erro servidor!!!')
    }

}

const detalhesPokemon = async (req, res) => {
    const { procurar } = req.params;
    try {
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
    } catch (error) {
        return res.status(500).json('Erro servidor!!!')
    }

}

module.exports = {
    listaPokemons,
    detalhesPokemon
}