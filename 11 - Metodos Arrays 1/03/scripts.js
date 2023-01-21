function separdorDeCarro(modelos, indice) {
    let tresModelos = modelos.slice(indice, indice + 3).join(" - ")
    return tresModelos
}

// Corola - Fusca - Chevete

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

console.log(separdorDeCarro(nomes, posicao))