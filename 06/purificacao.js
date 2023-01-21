const palavra = '*Canis %lupus )familiaris'
const especiais = ['!', '@', '#', '$', '%', '&', '*', '(', ')']
let filtrado = ''

for (let letra of palavra) {
    if (!especiais.includes(letra)) {
        filtrado += letra
    }
}
console.log(filtrado)