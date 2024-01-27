import {pegarCarta} from './Carta.js';


let jogador = {};
jogador.maodoJogador = [];
jogador.vida=10;
jogador.alegriaCtn= document.querySelector('#alegria');
jogador.checarVida = function(){
    if(this.vida <= 0){
        window.alert('Você perdeu');
        window.location.reload();
    }
}


export function getJogador(){
  
   
    return jogador;

}