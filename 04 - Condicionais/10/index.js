const caractere = "E";

if (isNaN(caractere)) {
    if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
        console.log('Vogal minúscula.')
    } else if (caractere === 'A' || caractere === 'E' || caractere === 'I' || caractere === 'O' || caractere === 'U') {
        console.log('Vogal maiúscula.')
    } else {
        console.log('Consoante.')
    }
} else {
    console.log('Número.')
}
