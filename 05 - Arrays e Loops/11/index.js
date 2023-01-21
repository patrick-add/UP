const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];
let entre1020 = []

for (let valor of original) {
    if (valor >= 10 && valor <= 20 || valor > 100) {
        entre1020.push(valor)
    }
}

console.log(entre1020)

