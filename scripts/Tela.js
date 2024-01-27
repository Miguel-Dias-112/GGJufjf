
import {pegarCarta} from './Carta.js';
import CARTAS from './jsons/carta.js'
import { getJogador } from './Jogador.js';
import { cicloJogo,inimigo    } from './jsons/Jogo/Jogo.js';
function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function randomizarCartas(maodoJogador){
   
    const totalCarta = CARTAS.length; // tamanho de cartas do json
    let indexC1 
    let indexC2 
    do{
        indexC1 = randomNumberInterval(0,totalCarta-1);
        indexC2 = randomNumberInterval(0,totalCarta-1);
    }while(indexC1==indexC2)
    
    maodoJogador.push(pegarCarta(indexC1));
    maodoJogador.push(pegarCarta(indexC2));
}

function porCartaTela(cartas, missão){
    const mesaCartas = document.querySelector('#mesaCartas');
    mesaCartas.innerHTML = '';

    function criarContainerCarta(descricao,carta){
            let  cartaContainer = document.createElement('div');
            let descricaoCtn = document.createElement('p');

            cartaContainer.addEventListener('click', function(){
                
                //////CICLO JOGO
                cicloJogo(carta);
            });
            descricaoCtn.textContent = descricao
            cartaContainer.classList.add('carta');
            cartaContainer.appendChild(descricaoCtn);

            mesaCartas.appendChild(cartaContainer);
    }
    
    cartas.forEach(carta => {
        criarContainerCarta(carta.dados.descricao,carta);
    });

}


export function PorDecknaTela(){
    let maodoJogador = getJogador().maodoJogador;
    
    getJogador().maodoJogador = [];
    randomizarCartas(maodoJogador);
    porCartaTela(maodoJogador);
    
}

export function atualizarValores(){
    const jogador = getJogador();
    
    const barraJogador = document.querySelector('#progressoAlegriaSua');
    const barraInimigo = document.querySelector('#progressoAlegriaInimigo');
 
    barraInimigo.value = inimigo.graca;
    barraJogador.value = jogador.vida;
}
