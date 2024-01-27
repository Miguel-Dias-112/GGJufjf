

import { getJogador } from "../../Jogador.js";
import { PorDecknaTela, atualizarValores } from "../../Tela.js";
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





criarMapa();
export  function cicloJogo(carta){
    
    let cartas = j1.maodoJogador;
    PorDecknaTela(cartas);
    let efetividadeJogada = carta.ataque(inimigo)
    inimigo.atacar(efetividadeJogada)
    atualizarValores()
}
