const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "a",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "b"
        },
        {
            resposta: "a",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let { aluno, valor, questoes } = prova
    let quantidadeAcertos = 0

    for (const questao of questoes) {
        if (questao.resposta === questao.correta) {
            quantidadeAcertos++
        }
    }

    let pontosPorQuestao = valor / questoes.length
    let resultadoAluno = quantidadeAcertos * pontosPorQuestao
    let singularPlural = quantidadeAcertos === 1 ? 'questão' : 'questões'

    if (quantidadeAcertos === 0) {
        console.log(`O aluno(a) ${aluno} não acertou nenhuma questão e sua nota foi zero.`);
    } else {
        console.log(`O aluno(a) ${aluno} acertou ${quantidadeAcertos} ${singularPlural} e obteve nota ${resultadoAluno}`)
    }
}

corrigirProva(prova)