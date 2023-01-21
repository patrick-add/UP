const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

// let contador = 0

// while (contador < original.length) {
//     if (original[contador] % 2 === 0) {
//         pares.push(original[contador])
//     } else {
//         impares.push(original[contador])
//     }
//     contador++
// }

// for (let contador = 0; contador < original.length; contador++) {
//     if (original[contador] % 2 === 0) {
//         pares.push(original[contador])
//     } else {
//         impares.push(original[contador])
//     }
// }

for (let contador of original) {
    if (contador % 2 === 0) {
        pares.push(contador)
    } else {
        impares.push(contador)
    }
}

console.log(pares)
console.log(impares)