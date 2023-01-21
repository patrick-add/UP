const palavra = '*Canis %lupus )familiaris'
const especiais = ['!', '@', '#', '$', '%', '&', '*', '(', ')']
let filtrado = ''

for (let letra of palavra) {
    //array.includes(procurar) -> Serve para procurar um item dentro de outro array, e retorna true ou false.
    if (!especiais.includes(letra)) {
        filtrado += letra
    }
}
console.log(filtrado)
// console.log(filtrado.join('')) ->Quando é um array para juntar todas os indices ou adicionar algo entre eles.

//
//uma comparação
// não precisa filtro e letra, um ou outro. E não precisam ser array