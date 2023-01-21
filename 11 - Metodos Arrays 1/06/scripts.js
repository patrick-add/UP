function procurandoDono(donosPets, pet) {
    let naoEncontrou = true
    for (const donoPet of donosPets) {
        if (donoPet.pets.includes(pet)) {
            console.log(`O dono(a) do(a) ${pet} é o(a) ${donoPet.nome}`)
            naoEncontrou = false
        }
    }
    if (naoEncontrou) {
        console.log(`Que pena ${pet}, não encontramos seu dono(a).`)
    }
}

const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

procurandoDono(usuarios, "Max")