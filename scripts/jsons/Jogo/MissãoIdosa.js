import { getJogador } from "../../Jogador.js";
import { PorDecknaTela } from "../../Tela.js";


export function MissãoIdosa(){
    console.log('por deck na tela')
    const j1 = getJogador();
    PorDecknaTela(j1.maodoJogador);
    j1.checarVida();    
    
  

}
