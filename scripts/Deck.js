

export function criarDeck( cartas ){
    const deck = {};    
    deck.cartas = cartas;

    
    puxarCartas = function(){
        const tamanho = deck.cartas.length;
        let randomizadores=[]
        for(let i = 0; i < 3; i++){
            randomizadores[i] = Math.floor(Math.random() * (tamanho )) + 1;
        }
        
        while(randomizadores[0] == randomizadores[1] || randomizadores[0] == randomizadores[2] || randomizadores[1] == randomizadores[2]){
            randomizadores[1]= Math.floor(Math.random() * (tamanho )) + 1;
            randomizadores[2]= Math.floor(Math.random() * (tamanho )) + 1;
        }
        
        let cartas =[]
        randomizadores.forEach(randomizador => {
            cartas.push(deck.cartas[randomizador])
        });

        return cartas;
        
        
       
        return 
    }
}

