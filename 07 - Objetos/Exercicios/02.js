const livro = {
    nome: 'O poder do hábito',
    capitulos: [
        {
            nome: "O loop do hábito",
        },
        {
            nome: "O cérebro ansioso",
        },
        {
            nome: "A regra de ouro da mudança de hábito",
        },
        {
            nome: "Hábitos angulares, ou a balada de Paul O`neill",
        },
        {
            nome: "Starbucks e o hábito do sucesso",
        },
        {
            nome: "O poder de uma crise",
        },
        {
            nome: "Como a target sabe o que você quer antes que você saiba",
        },
        {
            nome: "A Saddleback Church e o boicote aos ônibus de Montgomery",
        },
        {
            nome: "A neorologia do livre-arbítrio",
        },
    ]
}

// 1° forma de resolver

let numeroCapitulo = 1;
for (const capitulo of livro.capitulos) {
    capitulo.numero = numeroCapitulo;
    numeroCapitulo++
}

// 2° forma de resolver

for (let i in livro.capitulos) {
    livro.capitulos[i] = { numero: parseInt(i) + 1, ...livro.capitulos[i] }
}
console.log(livro.capitulos);