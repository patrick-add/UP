//valor do produto comprado.
const valorDoProduto = 100_000; //centavos

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let parcelasQueFalta = quantidadeDoParcelamento - valorPago / ((valorDoProduto / 100) / quantidadeDoParcelamento)
let valorParcela = (valorDoProduto / 100) / quantidadeDoParcelamento

console.log(`Restam ${parcelasQueFalta} parcelas de R$ ${valorParcela.toFixed(2)}`) 