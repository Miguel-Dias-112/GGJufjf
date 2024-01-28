

import { getJogador } from "../../Jogador.js";
import { PorDecknaTela, animaCartasDescendo, atualizarValores, imprimeResultado } from "../../Tela.js";
import { criarMapa } from "../../mapa.js";
import { inimigos } from "../inimigos/Inimigos.js";
const j1 = getJogador();

export let inimigo = inimigos[0]  

export function setInimigo(_inimigo){
    inimigo=_inimigo
}

export function startGame(){
    PorDecknaTela(j1.maodoJogador);
    atualizarValores()

}

export function checaResultado(){

    if(inimigo.graca >= 10 && j1.vida > 0) {
        return 'Vitoria';
    }
    if(inimigo.graca < 10 && j1.vida <= 0) {
            return 'Vitoria';
    }
    if(inimigo.graca < 10 && j1.vida > 0){
        return "continua";
    }
    
    return "Empate"
}


criarMapa();
export  function cicloJogo(carta){
    console.log(carta)
    animaCartasDescendo()
    setTimeout(function(){

        let cartas = j1.maodoJogador;
        PorDecknaTela(cartas);
        let efetividadeJogada = carta.ataque(inimigo);
        inimigo.atacar(efetividadeJogada);
        atualizarValores();
        

        let resultado = checaResultado()
        imprimeResultado()
        if(resultado!="continua"){
          //  imprimeResultado(resultado)
        }
    }, 1000);

    
    
}
