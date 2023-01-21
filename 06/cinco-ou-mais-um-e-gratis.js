const valores = [100, 500, 100, 200, 50]
let menor = valores[0]
let soma = 0


for (let valor of valores) {
    soma += valor
    if (valor < menor) {
        menor = valor
    }
}

if (valores.length >= 5) {
    soma -= menor
}

console.log(soma)