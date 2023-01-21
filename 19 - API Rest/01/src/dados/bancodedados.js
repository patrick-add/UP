// Deverá possuir apenas um recurso alunos que deverá ser acessado através do endereço http://localhost:3000/alunos

// Todos os métodos do recurso único alunos deverão possuir as validações necessárias que serão detalhadas para cada método mais abaixo.

const bancoDeDados = {
    identificador: 3,
    alunos: [

        {
            "id": 1,
            "nome": "Marcos",
            "sobrenome": "Silveira",
            "idade": 36,
            "curso": "Programação do Zero"
        },
        {
            "id": 2,
            "nome": "Lucas",
            "sobrenome": "Andrade",
            "idade": 26,
            "curso": "Programação do Zero"
        }

    ]
}

module.exports = bancoDeDados