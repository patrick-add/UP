const celular = 21999918888;

const stringCelular = celular.toString() //String(celular)
let ddd = stringCelular.slice(0, 2)
let numero = ''

if (stringCelular.length === 11) {
    console.log(`(${ddd}) ${stringCelular.slice(2, 7)}-${stringCelular.slice(7)}`)
} else if (stringCelular.length === 10) {
    numero = stringCelular.slice(2).padStart(9, "9")
    console.log(`(${ddd}) ${numero.slice(0, 5)}-${numero.slice(5)}`)
} else if (stringCelular.length === 8 || stringCelular.length === 9) {
    numero = stringCelular.padStart(9, "9")
    console.log(`${numero.slice(0, 5)}-${numero.slice(5)}`)
} else {
    console.log('Número inválido.');
}