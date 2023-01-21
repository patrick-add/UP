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
    const { nome, pets } = usuario
    if (pets.length > 0) {
        if (pets.length > 1) {
            console.log(`Sou ${nome} e tenho ${pets.length} pets`)
        } else {
            console.log(`Sou ${nome} e tenho ${pets.length} pet`)
        }
    } else {
        console.log(`Sou ${nome} e não tenho pets`)
    }
}