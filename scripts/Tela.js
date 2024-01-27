


import {pegarCarta} from './Carta.js';
function porCartaTela(cartas){
    
    const mesaCartas = document.querySelector('#mesaCartas');
    mesaCartas.innerHTML = '';

    function criarContainerCarta(descricao,carta){
            let  cartaContainer = document.createElement('div');
            let descricaoCtn = document.createElement('p');


            cartaContainer.addEventListener('click', function(){
                const cartaIndex = cartas.indexOf(carta);
                cartas.splice(cartaIndex, 1);
                porCartaTela(cartas);
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

function puxarCarta(maodoJogador){
    console.log('puxando carta')
    maodoJogador.push(pegarCarta(2));
    maodoJogador.push(pegarCarta(1));
    maodoJogador.push(pegarCarta(0));

    // while(maodoJogador.length < 3)
    // {
    //     const totalCarta = 2; // tamanho de cartas do json
    //     let cNova = Math.floor(Math.random() * (totalCarta )) ;
    //     let tamanho = maodoJogador.length;

    //     for (let i=0;i<tamanho;i++)
    //     {
    //         if (cNova == maodoJogador[i])
    //         {
    //             cNova = Math.floor(Math.random() * (tamanho )) + 1;
    //             i=0;
    //         }
    //     }

        
    // }

} 
export function start(maodoJogador){
    puxarCarta(maodoJogador);
    porCartaTela(maodoJogador);
}
    
export function addclick(maodoJogador){
  
    maodoJogador.forEach(carta => {
        carta.cartaContainer.addEventListener('click', function(){
           
        });
    });

    
}