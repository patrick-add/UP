const taAberto = (data) => {
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let diaDaSemana = data.getDay()

    if (diaDaSemana === 6 && hora < 8 || diaDaSemana === 6 && hora > 12 || diaDaSemana === 6 && hora === 12 && minuto > 0) {
        return false
    }

    if (hora < 8 || hora > 18 || hora === 18 && minuto > 0 || diaDaSemana === 0) {
        return false
    }
    return true
}

// sábados das 8h as 12h
console.log(taAberto(new Date(2021, 3, 25, 12)));
console.log(taAberto(new Date(2021, 3, 26, 12)));
console.log(taAberto(new Date(2021, 3, 26, 7, 59)));
console.log(taAberto(new Date(2021, 3, 24, 9, 30)));

// taAberto(newDate(2021,3,25,12)); // deve retornar false, pois é um domingo

// taAberto(newDate(2021,3,26,12)); // deve retornar true, pois é uma segunda

// taAberto(newDate(2021,3,26,7,59)); // deve retornar false, pois é muito cedo (7h59)

// taAberto(newDate(2021,3,24,9,30)); // deve retornar true, pois é sábado de manhã (9h30)