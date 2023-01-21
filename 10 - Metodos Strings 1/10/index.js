function validandoArquivo(dado) {
    const arquivosPermitidos = ['jpg', 'jpeg', 'gif', 'png']
    const tipo = dado.slice(-3)

    arquivosPermitidos.includes(tipo) ? console.log("Arquivo válido") : console.log('Arquivo inválido')
}

const nomeArquivo = 'Foto da Familia.png';

validandoArquivo(nomeArquivo)
