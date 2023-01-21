const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

//   Filtre o array e retorne apenas os/as programadores e programadoras que sejam maiores de 20 anos;
const filtrandoProgramadores = pessoas.filter((pessoa) => {
    return pessoa.profissao === 'Programador' && pessoa.idade > 20
})

// console.log(filtrandoProgramadores);

// Filtre o array e retorne apenas os/as jornalistas que tenha mais de 30 anos;
const filtrandoJornalistas = pessoas.filter((pessoa) => {
    return pessoa.profissao === 'Jornalista' && pessoa.idade > 30
})

// console.log(filtrandoJornalistas);

// Filtre o array e retorne os/as jornalistas e programadores e programadoras que sejam jovens. Sabendo que, segundo o IBGE, é considerado jovem aquele que tem até 29 anos;

const jovens = pessoas.filter((pessoa) => {
    return pessoa.idade <= 29
})

console.log(jovens);