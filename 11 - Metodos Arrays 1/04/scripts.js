function fila(lista, operacao1, nomePaciente) {
    if (operacao1 === 'agendar' && lista.includes(nomePaciente)) {
        lista.splice(lista.length, 0, nomePaciente)
        lista.splice(lista.indexOf(nomePaciente), 1)
        return lista.join(",")
    } else if (operacao1 === 'atender') {
        lista.splice(lista.indexOf(nomePaciente), 1)
        return lista.join(",")
    } else {
        lista.push(nomePaciente)
        return lista.join(",")
    }
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
//agendar ou atender
console.log(fila(pacientes, "agendar", pacientes[0]))
