
import {pegarCarta} from './Carta.js';
import CARTAS from './jsons/carta.js'
function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }
function puxarCarta(maodoJogador){
   
    while(maodoJogador.length < 3)
    {
        const totalCarta = CARTAS.length-1; // tamanho de cartas do json
        let indexCNova = randomNumberInterval(0,totalCarta);

        let tamanho = maodoJogador.length;

        for (let i=0;i<tamanho;i++)
        {
            let index= CARTAS.indexOf(maodoJogador[i]);
            if (indexCNova == index){
                console.log(maodoJogador,indexCNova);

                indexCNova =randomNumberInterval(0,totalCarta);
                i=0;
            }
        }
        maodoJogador.push(pegarCarta(indexCNova));
    }

} 
function porCartaTela(cartas,missão){
    
    const mesaCartas = document.querySelector('#mesaCartas');
    mesaCartas.innerHTML = '';

    function criarContainerCarta(descricao,carta){
            let  cartaContainer = document.createElement('div');
            let descricaoCtn = document.createElement('p');

            cartaContainer.addEventListener('click', function(){

                
              

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


export function PorDecknaTela(maodoJogador){
    console.log('por deck na tela')
    puxarCarta(maodoJogador);
    porCartaTela(maodoJogador);
    
}
    
