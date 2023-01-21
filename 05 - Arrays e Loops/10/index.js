const numeros = [8, 11, 4, 1, 15]
let maior = -Number.MAX_VALUE

for (let num of numeros) {
    for (const n of numeros) {
        let subtracao = num - n
        if (subtracao > maior) {
            maior = subtracao
        }
    }
}

console.log(maior)


// let maior = [numeros[0]]
// let menor = [numeros[0]]

// for (let num of numeros) {
//     if (num > maior) {
//         maior = num
//     } else if (num < menor) {
//         menor = num
//     }
// }

// console.log(maior - menor)