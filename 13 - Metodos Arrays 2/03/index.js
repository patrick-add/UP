const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

const bebidaAlcoolica = palavras.some((palavra) => {
    return palavra === 'vodka' || palavra === 'cerveja'
})

if (bebidaAlcoolica) {
    console.log('revise sua lista, joão. possui bebida com venda proibida!');
} else {
    console.log('tudo certo, vamos as compras!');
}