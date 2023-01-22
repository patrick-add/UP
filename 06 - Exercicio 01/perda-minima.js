const precos = [30, 10, 54, 76, 1, 4, 35]
let menorDiferenca = precos[0] - precos[1]

if (menorDiferenca < 0) {
    menorDiferenca = -(menorDiferenca)
}

for (let valor = 0; valor < precos.length; valor++) {
    for (let val = valor + 1; val < precos.length; val++) {
        if (precos[valor] - precos[val] < menorDiferenca && precos[valor] - precos[val] > 0) {
            menorDiferenca = precos[valor] - precos[val]
        }
    }
}
console.log(menorDiferenca)