
const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado) {
            this.ligarDesligar('ligado')
        } else {
            this.ligado = true
            this.status()
        }
    },
    desligar: function () {
        if (this.ligado && this.velocidade === 0) {
            this.ligado = false
            this.status()
        } else if (this.ligado && this.velocidade > 0) {
            console.log('Desacerele mais para poder desligar o carro.')
        } else {
            this.ligarDesligar('desligado')
        }

    },
    acelerar: function () {
        if (!this.ligado) {
            this.ligado = true
        }
        this.velocidade += 10
        this.status()
    },
    desacelerar: function () {
        if (!this.ligado) {
            console.log(`Não é possível desacelerar um carro desligado.`)
        } else {
            this.velocidade -= 10
            if (this.velocidade <= 0) {
                this.velocidade = 0
                this.ligado = false
            }
            this.status()
        }
    },
    status: function () {
        let ligadoDesligado = ''
        this.ligado ? ligadoDesligado = 'ligado' : ligadoDesligado = 'desligado'
        console.log(`Carro ${ligadoDesligado}. Velocidade: ${this.velocidade}.`)
    },
    ligarDesligar: function (status) {
        console.log(`Este carro já está ${status}.`)
    },
}

carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()
carro.desacelerar()
carro.desacelerar()
carro.acelerar()
carro.acelerar()
carro.desligar()
carro.ligar()

