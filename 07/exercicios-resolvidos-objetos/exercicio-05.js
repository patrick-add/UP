const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

// 1ª forma criando um array contendo os objetos das aulas e adicionando dentro do 
// array de aulas da constante curso
// let arrayAulas = [
//     {
//         identificador: 1,
//         nome_da_aula: "Introdução a programação"
//     },
//     {
//         identificador: 2,
//         nome_da_aula: "Variáveis"
//     },
//     {
//         identificador: 3,
//         nome_da_aula: "Condicionais"
//     },
//     {
//         identificador: 4,
//         nome_da_aula: "Arrays"
//     }
// ]
// for (const aula of arrayAulas) {
//     curso.aulas.push(aula);
// }

// 2ª forma utilizando apenas push() na propriedade aulas da constante curso
// curso.aulas.push(
//     {
//         identificador: 1,
//         nome_da_aula: "Introdução a programação"
//     },
//     {
//         identificador: 2,
//         nome_da_aula: "Variáveis"
//     },
//     {
//         identificador: 3,
//         nome_da_aula: "Condicionais"
//     },
//     {
//         identificador: 4,
//         nome_da_aula: "Arrays"
//     }
// )

console.log(curso.aulas)