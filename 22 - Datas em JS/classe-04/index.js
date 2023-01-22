const taAberto = (data) => {
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let diaDaSemana = data.getDay()

    if (hora < 8 || hora > 18 || hora === 18 && minuto > 0 || diaDaSemana === 0 || diaDaSemana === 6) {
        return false
    }
    return true
}

// console.log(taAberto(new Date(2021, 3, 25, 12))); // deve retornar false, pois é um domingo
// console.log(taAberto(new Date(2021, 3, 26, 12))); // deve retornar true, pois é uma segunda
// console.log(taAberto(new Date(2021, 3, 26, 7, 59))); // deve retornar false, pois é um domingo
