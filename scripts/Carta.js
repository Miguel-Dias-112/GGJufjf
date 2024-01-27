import CARTAS from './jsons/carta.js' 

export function pegarCarta(index){
    const carta ={}
    /// referencia ao html

 
    carta.dados = CARTAS[index]
    carta.cartaContainer = document.createElement('div');

    carta.ataque =  function (inimigo){

        let muitoefetivo =  carta.dados.efetividade.includes(inimigo.nome);
        let poucoEfetivo = carta.dados.inefetivade.includes(inimigo.nome);

        if(muitoefetivo){
            inimigo.graca += 2
            return "efetivo";
        }
        if(poucoEfetivo){
            inimigo.graca -= 0;
            return "nefetivo";
        }
        
        inimigo.graca += 1;
        return "neutro"
    }
    

            
    return carta;
}

