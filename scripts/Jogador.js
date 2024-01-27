function criaJogador(){
    let maodoJogador = [];

    
    function puxarCarta(mao){
        while(mao.length < 3)
        {
            cNova = Math.floor(Math.random() * (tamanho )) + 1;
            for (let i=0;i<3;i++)
            {
                if (cNova === mao[i])
                {
                    cNova = Math.floor(Math.random() * (tamanho )) + 1;
                    i=0;
                }
            }
        }
    }
    function definirCliquePraDescerMao(){
        maodoJogador.forEach(carta => {
            carta.cartaContainer.addEventListener('click', function(){

                
                const cartaIndex = maodoJogador.indexOf(carta);
                maodoJogador.splice(cartaIndex, 1);
           

            });
        });
    }

}