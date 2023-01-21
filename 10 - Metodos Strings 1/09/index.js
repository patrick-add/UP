function geradorDeNickname(usuario) {
    let nickname = usuario.toLowerCase().trim()
    while (nickname !== nickname.replace(" ", "")) {
        nickname = nickname.replace(" ", "")
    }
    nickname = nickname.slice(0, 12)
    console.log(`@${nickname}`)
}

const nome = 'Guido Cerqueira';

geradorDeNickname(nome)

