const primeiraLetra = "a"
const segundaLetra = "v"
const palavras = ["aveia", "manha", "ave"]


const palavrasSelecionada = []

for (let pl of palavras) {
    if (pl[0] === primeiraLetra && pl[1] === segundaLetra) {
        palavrasSelecionada.push(pl)
    }
}
if (palavrasSelecionada.length > 0) {
    for (let pl of palavrasSelecionada) {
        console.log(pl)
    }
} else {
    console.log('NENHUMA')
}
