export function pegarCarta(index){
    const carta ={}
    /// referencia ao html

    const _dados = JSON.parse( readFile('../jsons/carta.json', 'utf8'));
    carta.dados = _dados[index]

    carta.cartaContainer = document.createElement('div');

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

