function criarCarta(_nome, _descricao, _status, _efetividadeCom){
    const carta ={}
    /// referencia ao html

    //variaveis estasticas
    const nome = _nome
    const descricao = _descricao
    const dano = _status.dano
    const defesa = _status.defesa 

    const efetividadeCom = _efetividadeCom
    const poucoEfetivoCom = _poucoEfetivoCom
    // funções
    function ataque ( inimigo ){
        muitoefetivo = inimigo.nome in efetividadeCom 
        poucoEfetivo = inimigo.nome in poucoEfetivoCom
        if(muitoefetivo){
            inimigo.graca += ( dano - defesa) * 1.5;
            return
        }
        if(poucoEfetivo){
            return
        }
        inimigo.graca += ( dano - defesa) 
    }

    carta.nome = nome
    
    carta.acao = function( player ){
        player.graca += 1
    }   
}