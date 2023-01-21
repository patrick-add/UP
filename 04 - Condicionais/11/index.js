//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 150_000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1_000_000;

if (rendaMensalEmCentavos < 200_000) {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`)
} else if (mesesDecorridos > 60) {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o tempo decorrido de contrato ultrapassa 60 meses.`)
} else if (totalJaPagoPeloAluno > 18_000_000) {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a soma das parcelas já pagas pelo aluno nos meses anteriores é igual a 18 mil reais, então o aluno não deve pagar mais nada, pois já quitou a dívida.`)
} else {
    const parcela = 18 * rendaMensalEmCentavos / 100
    console.log(`O valor da parcela desse mês é R$ ${(parcela / 100).toFixed(2)} reais.`)
}
