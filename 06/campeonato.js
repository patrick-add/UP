const resultados = [
    "V",
    "E",
    "V",
    "E"
]
let pontos = 0

for (result of resultados) {
    if (result === 'V') {
        pontos += 3
    } else if (result === 'E') {
        pontos++
    }
}
console.log(pontos)