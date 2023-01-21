let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, '0')
let nomeArray = nome.split(" ")
nome = ""
email = email.trim()

for (const nomes of nomeArray) {
    nome += nomes[0].toUpperCase() + nomes.slice(1) + " "
}

console.log(identificador)
console.log(nome)
console.log(email)