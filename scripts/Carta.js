export function criarCarta(_descricao, _status, _efetividadeCom,_poucoEfetivoCom){
    const carta ={}
    /// referencia ao html

    carta.cartaContainer = document.createElement('div');
    //variaveis estasticas

    carta.descricao = _descricao
    carta.dano = _status.dano
    carta.defesa = _status.defesa 

    carta.efetividadeCom = _efetividadeCom
    carta.poucoEfetivoCom = _poucoEfetivoCom

    // funções

    carta.ataque =  function ( inimigo ){

        muitoefetivo = inimigo.nome in efetividadeCom;
        poucoEfetivo = inimigo.nome in poucoEfetivoCom;
        if(muitoefetivo){
            inimigo.graca += (carta.dano - carta.defesa) * 1.5;
            return;
        }
        if(poucoEfetivo){
            inimigo.graca -= (carta.dano - carta.defesa) * 0.5;
            return;
        }
        inimigo.graca += (carta.dano - carta.defesa);

    }
    

            
    return carta;
}

