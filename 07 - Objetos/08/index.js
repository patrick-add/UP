
const usuarios = [
    {
        nome: "João",
        pets: [],
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

for (const usuario of usuarios) {
    const { pets, nome } = usuario
    if (pets.length > 0) {
        const palavra = pets.length > 1 ? 'pets' : 'pet'
        console.log(`Sou ${nome} e tenho ${pets.length} ${palavra}`)
    } else {
        console.log(`Sou ${nome} e não tenho pets`)
    }
}
