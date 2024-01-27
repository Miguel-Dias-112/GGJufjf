function criaJogador(){
    let maodoJogador = [];

    
    
    function definirCliquePraDescerMao(){
        maodoJogador.forEach(mao => {
            mao.cartaContainer.addEventListener('click', function(){

                const cartaIndex = maodoJogador.indexOf(mao);
                maodoJogador.splice(cartaIndex, 1);
           

            });
        });


    }
}