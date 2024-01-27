export function porCartaTela(cartas){
    
    const mesaCartas = document.querySelector('#mesaCartas');
    function criarContainerCarta(descricao){
        let cartaContainer = document.createElement('div');
        let descricaoCtn = document.createElement('p');
        descricaoCtn.textContent = descricao
        cartaContainer.classList.add('carta');
        cartaContainer.appendChild(descricaoCtn);
        mesaCartas.appendChild(cartaContainer);
    }
    
    cartas.forEach(carta => {
        criarContainerCarta(carta.descricao);
    });
}