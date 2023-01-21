function agendarPaciente(lista, nomePaciente) {
    if (lista.indexOf(nomePaciente) === -1) {
        lista.splice(lista.length, 0, nomePaciente)
    } else {
        lista.splice(lista.length, 0, nomePaciente)
        lista.splice(lista.indexOf(nomePaciente), 1)
    }
    return lista.join(",")
}
function atenderPaciente(lista) {
    lista.splice(0, 1)
    return lista.join(",")
}
function cancelarAtendimento(lista, nomePaciente) {
    lista.splice(lista.indexOf(nomePaciente), 1)
    return lista.join(",")
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

console.log(agendarPaciente(pacientes, "Maria"))
