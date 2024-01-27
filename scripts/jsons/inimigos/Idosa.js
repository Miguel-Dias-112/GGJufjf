import { getJogador } from "../../Jogador.js"
function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function criarFala(texto,dano){
    let fala = {}
    fala.texto = texto
    fala.dano = dano
    return fala
}
export const Idosa = {
    nome:'Idosa',
    graca:0,
    falas:{
        efetivo:criarFala("Muito bom!",1),
        nefetivo:criarFala("Você vai pro inferno, meu filho",2),
        neutro:criarFala("viu a previsão do tempo, hoje?",3),
    },
    atacar: function(efetividade){
       
        let jogador = getJogador()
        const fala = this.falas[efetividade]

        jogador.vida -= fala.dano
        return fala.texto
    }
}

