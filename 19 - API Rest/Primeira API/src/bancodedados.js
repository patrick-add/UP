const bancoDeDados = {
    identificadorAula: 2,
    identificadorInstrutor: 3,
    instrutores: [
        {
            id: 1,
            nome: "Guido",
            email: "guido@email.com",
            status: true
        },
        {
            id: 2,
            nome: "Dani",
            email: "dani@email.com",
            status: true
        }
    ],
    aulas: [
        {
            id: 1,
            idInstrutor: 1,
            titulo: "Primeiro servidor",
            descricao: "Criando primeiro servidor"
        }
    ]
}

module.exports = bancoDeDados