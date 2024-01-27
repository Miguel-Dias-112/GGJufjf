import { getJogador } from "../../Jogador.js"
function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}


function criarFala(texto,dano){
    let fala = {}
    fala.texto = texto
    fala.dano = dano
    return fala
}




function criarInimigo(nome,fala){
    let inimigo = {}
    inimigo.graca = 0
    inimigo.nome = nome
    inimigo.falas = {
        efetivo:fala[0],
        neutro:fala[1],
        nefetivo:fala[2],
    }
    inimigo.atacar = function(efetividade){
        let jogador = getJogador()
        const fala = this.falas[efetividade]
        jogador.vida -= fala.dano

        return fala.texto
    }
    return inimigo;
}

 const Idosa = criarInimigo('Idosa',[criarFala("Muito bom!",0),criarFala("Não entendi",1),criarFala("Você vai pro inferno, meu filho",2)])

 const GerZ = criarInimigo('Geração Z',[criarFala("Aí sim heim, de ladinho é muito poggers!! ",0),criarFala("Kkkk as ideia",1),criarFala("Porra cringe essa piada ai",2)])

 const Militar = criarInimigo('Militar',[criarFala("HAHAHA BRASIL!!",0),criarFala("Mais uma dessas e ",1),criarFala("Que isso, seu bizonho?",2)])

 const Padre = criarInimigo('Padre',[criarFala("Hahaha, Que piada divina!",0),criarFala("Que Deus ande contigo",1),criarFala("Que horror, Deus perdoe seus pecados",2)])

 const Influencer = criarInimigo('Influencer',[criarFala("Essa vai pro story!",0),criarFala("Eu faria melhor, mas você tem potêncial.",1),criarFala("O que?? Te vejo no tribunal.",2)])

export let inimigos=    [Idosa,GerZ,Militar,Padre,Influencer]