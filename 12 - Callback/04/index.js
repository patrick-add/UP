
let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;

const alarme = (vaiDespertarEm, despertando) => {
    let contador = 1

    console.log(`Timer iniciado, disparando alarme em ${vaiDespertarEm} segundos!`);

    const depertadorInicia = () => {
        const tempo = setInterval(() => {
            if (contador <= despertando) {
                console.log('Beep beep!');
                contador++
            } else {
                clearInterval(tempo)
            }
        }, 1000);
    }

    setTimeout(depertadorInicia, vaiDespertarEm * 1000);
}

alarme(tempoParaAlarmarEmSegundos, tempoAlarmandoEmSegundos)

