const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]
let menor = notas[0]
let maior = notas[0]
let notaFinal = 0

for (not of notas) {
    notaFinal += not
    if (not > maior) {
        maior = not
    } else if (not < menor) {
        menor = not
    }
}

notaFinal = (notaFinal - menor - maior) / (notas.length - 2)
console.log(notaFinal)

