import CARTAS from './jsons/carta.js' 

export function pegarCarta(index){
    const carta ={}
    /// referencia ao html

 
    carta.dados = CARTAS[index]
    carta.cartaContainer = document.createElement('div');

    carta.ataque =  function (inimigo){

        let muitoefetivo =  carta.dados.efetividade.includes(inimigo.nome);
        let poucoEfetivo = carta.dados.inefetivade.includes(inimigo.nome);
        console.log(carta.dados)

        if(muitoefetivo){
            inimigo.graca += (carta.dados.status.status.dano - carta.dados.status.defesa) * 1.5;
            return "efetivo";
        }
        if(poucoEfetivo){
            inimigo.graca -= (carta.dados.status.dano - carta.dados.status.defesa) * 0.5;
            return "nefetivo";
        }
        
        inimigo.graca += (carta.dados.status.dano - carta.dados.status.defesa);
        return "neutro"
    }
    

            
    return carta;
}

