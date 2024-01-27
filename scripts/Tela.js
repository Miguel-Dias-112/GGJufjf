


import {pegarCarta} from './Carta.js';
function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }
function puxarCarta(maodoJogador){
    console.log('puxando carta')
   
    while(maodoJogador.length < 3)
    {
        const totalCarta = 3; // tamanho de cartas do json
        let cNova = randomNumberInterval(0,totalCarta);
        let tamanho = maodoJogador.length;

        for (let i=0;i<tamanho;i++)
        {
            if (cNova == maodoJogador[i])
            {
                cNova =randomNumberInterval(0,totalCarta);
                i=0;
            }
        }
        maodoJogador.push(pegarCarta(cNova));
    }

} 
function porCartaTela(cartas){
    
    const mesaCartas = document.querySelector('#mesaCartas');
    mesaCartas.innerHTML = '';

    function criarContainerCarta(descricao,carta){
            let  cartaContainer = document.createElement('div');
            let descricaoCtn = document.createElement('p');


            cartaContainer.addEventListener('click', function(){

                const cartaIndex = cartas.indexOf(carta);
                cartas.splice(cartaIndex, 1);
                puxarCarta(cartas);
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


export function start(maodoJogador){
    puxarCarta(maodoJogador);
    porCartaTela(maodoJogador);
    
}
    
