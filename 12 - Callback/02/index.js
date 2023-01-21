const tabuada = (arrayNumeros, callback) => {
    let tabela = ''
    for (let i = 0; i < arrayNumeros.length; i++) {
        for (let j = 0; j <= 10; j++) {
            tabela += `${arrayNumeros[i]} x ${j} = ${arrayNumeros[i] * j}\n`;
        }
        tabela += `--------------------------------\n`
    }
    callback(tabela)
}


tabuada([1, 5, 2], (resultado) => {
    console.log(resultado)
})