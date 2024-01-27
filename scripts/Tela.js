function porCartaTela(cartas){
    
    const mesaCartas = document.querySelector('#mesaCartas');
    function criarCarta(descricao){
        let cartaContainer = document.createElement('div');
        let descricao = document.createElement('p');
        descricao.textContent = descricao
        cartaContainer.classList.add('carta');
        cartaContainer.appendChild(descricao);
        mesaCartas.appendChild(cartaContainer);
    }
    
    cartas.forEach(carta => {
        criarCarta(carta.descricao);
    });
}