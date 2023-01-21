function grupos(nomes, qtdGrupo) {
    let grupo = []
    let i = 1
    while (nomes.length > 0) {
        grupo = nomes.slice(0, qtdGrupo).join(", ")
        nomes.splice(0, qtdGrupo)
        console.log(`Grupo ${i}: ${grupo}`)
        i++
    }
}

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Jack'];
const tamanhoDoGrupo = 3;

grupos(nomes, tamanhoDoGrupo)