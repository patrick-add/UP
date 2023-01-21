const cpf = "011.022.033-44";
// let cpf = "011.022.033-44";
let cpfFormatado = ''

// while (cpf !== cpf.replace(".", "").replace("-", "").replace("/", "")) {
//     cpf = cpf.replace(".", "").replace("-", "").replace("/", "")
// }

for (const numeros of cpf) {
    cpfFormatado += numeros.replace(".", "").replace("-", "").replace("/", "")
}

// console.log(cpf)
console.log(cpfFormatado)