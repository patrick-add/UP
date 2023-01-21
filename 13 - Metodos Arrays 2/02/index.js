const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const verificadorCaractere = palavras.every((palavra) => {
    return palavra.length <= 5
})

if (verificadorCaractere) {
    console.log('array validado');
} else {
    console.log('existe palavra inválida');
}