const sequencia = ['<']
let contador = 0

for (let passo of sequencia) {
    if (passo === '>') {
        contador++
        if (contador > 6 && passo === '>') {
            contador = 0
        }
    } else if (passo === '<') {
        contador--
        if (contador < 0 && passo === '<') {
            contador = 6
        }
    }
}
console.log(contador)
