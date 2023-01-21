const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

// while (filaDeDentro.length < 5) {
//     const primeiroDeFora = filaDeFora.shift()
//     if (primeiroDeFora === undefined) {
//         break
//     }
//     filaDeDentro.push(primeiroDeFora)
// }

for (let nome = 0; nome <= filaDeDentro.length; nome++) {
    if (filaDeDentro.length < 5 && filaDeFora.length > 0) {
        filaDeDentro.push(filaDeFora[0])
        filaDeFora.shift()
    }
}
console.log(filaDeDentro)
console.log(filaDeFora)

