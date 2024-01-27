

import { Idosa } from "../inimigos/Idosa.js";
import { getJogador } from "../../Jogador.js";
import { PorDecknaTela } from "../../Tela.js";
const j1 = getJogador();
const inimigo = Idosa

PorDecknaTela(j1.maodoJogador);
j1.checarVida();    


export  function cicloJogo(carta){
    
    let cartas = j1.maodoJogador;
    PorDecknaTela(cartas);
    let efetividadeJogada = carta.ataque(inimigo)
    inimigo.atacar(efetividadeJogada)

    console.log(inimigo.graca, j1.vida)
}
