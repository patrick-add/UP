const tabuada = (numero, callback) => {
    let tabela = ''
    for (let i = 0; i <= 10; i++) {
        tabela += `${numero} x ${i} = ${numero * i}\n`
    }
    callback(tabela)
}


tabuada(5, (resultado) => {
    console.log(resultado)
})