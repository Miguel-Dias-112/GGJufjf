import { getJogador } from "../../Jogador.js";
import { PorDecknaTela } from "../../Tela.js";


export function MissãoIdosa(carta){

    
    console.log('por deck na tela')
    const j1 = getJogador();
    let cartas = j1.maodoJogador;

    const cartaIndex = cartas.indexOf(carta);
    cartas.splice(cartaIndex, 1);
   
    PorDecknaTela(j1.maodoJogador);
    j1.checarVida();    
    
  

}
