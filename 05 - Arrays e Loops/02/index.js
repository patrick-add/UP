const letras = ["A", "a", "B", "C", "E", "e"];
let totalDeLetrasE = 0

for (let letra of letras) {
    if (letra === 'E' || letra === 'e') {
        totalDeLetrasE++
    }
}

if (totalDeLetrasE === 0) {
    // Isso é chamado de escape \ , a barra invertida para tratar com caractere as aspas.
    console.log("Nenhuma letra \"E\" ou \"e\" foi encontrada.")
} else {
    console.log(`Foram encontradas ${totalDeLetrasE} letra(s) "E" ou "e".`)
}
