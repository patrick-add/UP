let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 5;
let numeroDeSonecas = 2;

const alarme = (vaiDespertarEm, despertando, sonecaAtivado, numeroSoneca) => {
    let contador = 1
    console.log(`Timer iniciado, disparando alarme em ${vaiDespertarEm} segundos!`);

    const depertadorInicia = () => {
        const tempo = setInterval(() => {
            if (contador <= despertando) {
                console.log('Beep beep!');
                contador++
            } else {
                clearInterval(tempo)
                if (numeroSoneca <= 0) {
                    console.log("Fim do Timer!");
                } else {
                    contador = 1
                    console.log(`Soneca ativada, próximo alarme em ${sonecaAtivado} segundos`);
                    setTimeout(depertadorInicia, sonecaAtivado * 1000);
                    numeroSoneca--
                }
            }
        }, 3000);
    }

    setTimeout(depertadorInicia, vaiDespertarEm * 1000);

}

alarme(tempoParaAlarmarEmSegundos, tempoAlarmandoEmSegundos, tempoSonecaEmSegundos, numeroDeSonecas)
