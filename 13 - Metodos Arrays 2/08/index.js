const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]
// let contador = -1

const imprimirFrutas = frutas.map((fruta, index) => {
    return index + " - " + fruta[0].toUpperCase() + fruta.slice(1, fruta.length).toLowerCase()
    // contador++
    // const primeiraParte = `${contador} - ${fruta[0].toUpperCase()}`
    // const segundaParte = fruta.slice(1).toLowerCase()
    // return primeiraParte + segundaParte
})

console.log(imprimirFrutas);