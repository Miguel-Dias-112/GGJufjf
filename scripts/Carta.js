function criarCarta(){
    let carta ={}

    carta.nome = "batata"
    
    carta.ação = function( player ){
        player.vida += 1
    }   
}