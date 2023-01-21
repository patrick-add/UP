const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        let totalAPagar = ((this.calcularTotalAPagar() - this.calcularDesconto()) / 100).toFixed(2)

        console.log(`Cliente: ${this.nomeDoCliente}`)
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`)
        console.log(`Total a pagar: R$ ${totalAPagar}`)
    },
    addProduto: function (produto) {
        let naoTemOProduto = true
        for (const item of this.produtos) {
            if (item.id === produto.id) {
                item.qtd += produto.qtd
                naoTemOProduto = false
            }
        }
        if (naoTemOProduto) {
            this.produtos.push(produto)
        }
    },
    imprimirDetalhes: function () {
        let totalAPagar = ((this.calcularTotalAPagar() - this.calcularDesconto()) / 100).toFixed(2)

        console.log(`Cliente: ${this.nomeDoCliente} \n`)

        for (let i = 0; i < this.produtos.length; i++) {
            const produto = this.produtos[i]
            console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${(produto.precoUnit / 100).toFixed(2)}`)
        }

        console.log('')
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`)
        console.log(`Total a pagar: R$ ${totalAPagar}`)
    },
    calcularTotalDeItens: function () {
        let qtdTotal = 0
        for (const produto of this.produtos) {
            qtdTotal += produto.qtd
        }
        return qtdTotal
    },
    calcularTotalAPagar: function () {
        let totalAPagar = 0
        for (const produto of this.produtos) {
            totalAPagar += produto.precoUnit * produto.qtd
        }
        return totalAPagar
    },
    calcularDesconto: function () {
        let descontoCompraAcimaDeMil = 0
        let descontoPorMenorItem = 0

        // O primeiro é um desconto para compras acima de 4 itens, o item mais barato sai de graça.

        if (this.calcularTotalDeItens() > 4) {
            descontoPorMenorItem = this.produtos[0].precoUnit
            for (const produto of this.produtos) {
                if (produto.precoUnit < descontoPorMenorItem) {
                    descontoPorMenorItem = produto.precoUnit
                }
            }
        }

        // O segundo é desconto de 10% é para compras acima de 100 reais.

        if (this.calcularTotalAPagar() > 10000) {
            descontoCompraAcimaDeMil = this.calcularTotalAPagar() * 0.1
        }

        return descontoPorMenorItem > descontoCompraAcimaDeMil ? descontoPorMenorItem : descontoCompraAcimaDeMil

    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);
// carrinho.imprimirResumo();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);
// carrinho.imprimirResumo();
carrinho.imprimirDetalhes()

