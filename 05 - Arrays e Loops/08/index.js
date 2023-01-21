const numeros = [3, 24, 1, 8, 11, 7, 15, 38, 47];
let maior = numeros[0]

for (let num of numeros) {
    if (num > maior) {
        maior = num
    }
}

console.log(maior)
