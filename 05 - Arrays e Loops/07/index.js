const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let nomeComA = []

for (let nome of nomes) {
    if (nome[0] === 'A' || nome[0] === 'a') {
        nomeComA.push(nome)
    }
}

console.log(nomeComA)

// for (let i = 0; i < nomes.length; i++) {
//     if (nomes[i][0] === 'A' || nomes[i][0] === 'a') {
//         nomeComA.push(nomes[i])
//     }
// }
// console.log(nomeComA)