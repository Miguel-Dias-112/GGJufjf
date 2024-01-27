


    
function porMaonaTela(maodoJogador){
    function porCartaTela(cartas){
    
        const mesaCartas = document.querySelector('#mesaCartas');
        function criarContainerCarta(descricao, cartaContainer){
            let descricaoCtn = document.createElement('p');
            descricaoCtn.textContent = descricao
            cartaContainer.classList.add('carta');
            cartaContainer.appendChild(descricaoCtn);
            mesaCartas.appendChild(cartaContainer);
        }
        
        cartas.forEach(carta => {
            criarContainerCarta(carta.descricao, carta.cartaContainer);
        });
    }
    
    function puxarCarta(maodoJogador){
        while(maodoJogador.length < 3)
        {
            const totalCarta = 3; // tamanho de cartas do json
            let cNova = Math.floor(Math.random() * (totalCarta )) + 1;
            let tamanho = maodoJogador.length;

            for (let i=0;i<tamanho;i++)
            {
                if (cNova == mao[i])
                {
                    cNova = Math.floor(Math.random() * (tamanho )) + 1;
                    i=0;
                }
            }

            maodoJogador.push(pegarCarta(cNova));
            
        }


    }
    maodoJogador.forEach(carta => {
        carta.cartaContainer.addEventListener('click', function(){
            const cartaIndex = maodoJogador.indexOf(carta);
            maodoJogador.splice(cartaIndex, 1);

            puxarCarta(maodoJogador);
            porCartaTela(maodoJogador);
        });
    });
}