import CARTAS from './jsons/carta.js' 

export function pegarCarta(index){
    console.log('pegando carta')
    const carta ={}
    /// referencia ao html

 
    carta.dados = CARTAS[index]
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

