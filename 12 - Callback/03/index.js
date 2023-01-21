const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];

const imprimindoRodada = (arrayJogadores) => {
    let tempo = 10 * 1000 / arrayJogadores.length
    let contador = 0

    const rodada = setInterval(() => {
        if (contador < arrayJogadores.length) {
            console.log(arrayJogadores[contador]);
            contador++
        } else {
            console.log('A rodada terminou!');
            clearInterval(rodada)
        }
    }, tempo);
}

imprimindoRodada(jogadores)