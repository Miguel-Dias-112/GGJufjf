

import { Idosa } from "../inimigos/Inimigos.js";
import { getJogador } from "../../Jogador.js";
import { PorDecknaTela, atualizarValores } from "../../Tela.js";
import { criarMapa } from "../../mapa.js";

const j1 = getJogador();
export const inimigo = Idosa


atualizarValores()
PorDecknaTela(j1.maodoJogador);
j1.checarVida();    

criarMapa();
export  function cicloJogo(carta){
    
    let cartas = j1.maodoJogador;
    PorDecknaTela(cartas);
    let efetividadeJogada = carta.ataque(inimigo)
    inimigo.atacar(efetividadeJogada)
    atualizarValores()
}
