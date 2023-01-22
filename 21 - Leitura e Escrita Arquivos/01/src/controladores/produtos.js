const produtos = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground');

const listaDeProdutos = async (req, res) => {
    try {
        return res.status(200).json(produtos)
    } catch (error) {
        return res.status(500).json("Erro no servidor!!!")
    }
}

const encontrandoProduto = async (req, res) => {
    const { idProduto } = req.params

    try {
        if (!idProduto || Number(idProduto) < 0 || isNaN(Number(idProduto))) {
            return res.status(400).json({ mensagem: 'Valor inválido' })
        }

        const produto = produtos.find((produto) => {
            return produto.id === Number(idProduto)
        })

        if (!produto) {
            return res.status(404).json({ mensagem: 'Não existe esse produto.' })
        }

        return res.status(200).json(produto)
    } catch (error) {
        return res.status(500).json("Erro no servidor!!!")
    }


}

const calculandoFrete = async (req, res) => {
    const { idProduto, cep } = req.params
    try {
        if (!idProduto || Number(idProduto) < 0 || isNaN(Number(idProduto))) {
            return res.status(400).json({ mensagem: 'Valor inválido' })
        }

        if (!cep || Number(cep) <= 0 || isNaN(Number(cep)) || cep.length < 8) {
            return res.status(400).json({ mensagem: 'Valor inválido' })
        }

        const produto = produtos.find((produto) => {
            return produto.id === Number(idProduto)
        })

        if (!produto) {
            return res.status(404).json({ mensagem: 'Não existe esse produto.' })
        }

        const estado = await getStateFromZipcode(cep);

        //     O valor padrão do frete será de 12% do valor do produto
        let valorFrete = produto.valor * 0.12

        // Para os estados BA, SE, AL, PE e PB o valor do frete será de 10%
        const estadosDesconto10 = ['BA', 'SE', 'AL', 'PE', 'PB']
        if (estadosDesconto10.includes(estado)) {
            valorFrete = produto.valor * 0.10
        }

        // Para os estados SP e RJ o valor do frete será de 15%
        const estadosDesconto15 = ['SP', 'RJ']
        if (estadosDesconto15.includes(estado)) {
            valorFrete = produto.valor * 0.15
        }

        return res.status(200).json({ produto, estado, valorFrete })
    } catch (error) {
        return res.status(500).json("Erro no servidor!!!")
    }
}

module.exports = {
    listaDeProdutos,
    encontrandoProduto,
    calculandoFrete
}