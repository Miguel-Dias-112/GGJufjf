import {pegarCarta} from './Carta.js';


export function criaJogador(){
    let jogador = {};
    
    jogador.maodoJogador = [];
    jogador.vida=4;
    jogador.alegriaCtn= document.querySelector('#alegria');
    

    return jogador;

}