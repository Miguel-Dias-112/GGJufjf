function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function criarFala(texto,dano){
    fala = {}
    fala.texto = texto
    fala.dano = dano
    return fala
}
export const Idosa = {
    falas:[
        criarFala("aaa",1),
        criarFala("bbb",1),
        criarFala("ccc",1),
    ],
    atacar: function(jogador){
        const falaIndex = randomNumberInterval(0,2)
        window.alert(this.falas[falaIndex].texto)
        const fala = this.falas[falaIndex]
        jogador.vida -= fala.dano
        return fala.texto
    }
}