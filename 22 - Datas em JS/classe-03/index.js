const taAberto = (data) => {
    let hora = data.getHours()
    let minuto = data.getMinutes()

    // 8h00 (já aberto) às 18h (ainda aberto, fechado as 18h01)

    if (hora < 8 || hora > 18 || hora === 18 && minuto > 0) {
        return false
    }
    return true
}

// console.log(taAberto(new Date(2015, 1, 1, 8, 0)));
// console.log(taAberto(new Date(2015, 1, 1, 18, 1)));