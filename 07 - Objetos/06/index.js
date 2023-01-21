const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

// Todos os usuários menores de 18 anos devem ser inseridos na constante `jovens` e os demais na constante `adultos`.
const jovens = []
const adultos = []

for (const pessoas of usuarios) {
    pessoas.idade < 18 ? jovens.push(pessoas) : adultos.push(pessoas)
}

console.log(jovens)
console.log(adultos)