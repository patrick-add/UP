//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13_000;
let valorFinal;

if (tipoDePagamento === 'dinheiro' || tipoDePagamento === 'debito') {
    valorFinal = valorDoProduto - (valorDoProduto * 0.10)
} else if (tipoDePagamento === 'credito') {
    valorFinal = valorDoProduto - (valorDoProduto * 0.05)
} else {
    valorFinal = valorDoProduto - (valorDoProduto * 0.03)
}
console.log(`Valor a ser pago: R$ ${(valorFinal / 100).toFixed(2)}`)

