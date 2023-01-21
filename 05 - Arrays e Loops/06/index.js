const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let soma = 0

for (let par of numeros) {
    if (par % 2 === 0) {
        soma += par
    }
}

console.log(soma)

