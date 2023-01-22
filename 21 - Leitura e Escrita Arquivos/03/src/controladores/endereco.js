const fs = require('fs/promises');
const { buscarEndereco } = require('utils-playground');

const buscarEnderecos = async (req, res) => {
    const { cep } = req.params
    try {
        if (!cep || Number(cep) <= 0 || isNaN(Number(cep)) || cep.length < 8) {
            return res.status(400).json({ mensagem: 'Valor inválido' })
        }

        const todosEnderecos = await fs.readFile('./03/src/db/enderecos.json');
        const objEnderecos = JSON.parse(todosEnderecos);

        let buscarCep = objEnderecos.find((objEndereco) => {
            return objEndereco.cep.replace("-", '') === cep
        })

        if (!buscarCep) {
            const endereco = await buscarEndereco(cep);
            objEnderecos.push(endereco)
        }

        const atualizandoEnderecos = JSON.stringify(objEnderecos);
        await fs.writeFile('./03/src/db/enderecos.json', atualizandoEnderecos);

        return res.status(200).json(atualizandoEnderecos)

    } catch (error) {
        return res.status(500).json("Erro no servidor!!!")
    }

}

module.exports = {
    buscarEnderecos
}