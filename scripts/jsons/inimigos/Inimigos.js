import { getJogador } from "../../Jogador.js"
import { mostrarFrase } from "../../Tela.js"
export function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}


function criarFala(texto,dano){
    let fala = {}
    fala.texto = texto
    fala.dano = dano
    return fala
}




function criarInimigo(nome,fala,area,bottom){
    let inimigo = {}
    inimigo.graca = 0
    inimigo.cenario='../../../assets/'+nome+'/fundo.png'
    inimigo.sprite='../../../assets/'+nome+'/sprite.png'
    inimigo.area=area
    inimigo.nome = nome
    inimigo.bottom=bottom
    inimigo.derrotado=false
    inimigo.falas = {
        efetivo:fala[0],
        neutro:fala[1],
        nefetivo:fala[2],
    }
    inimigo.atacar = function(efetividade){
        let jogador = getJogador()

        const fala = this.falas[efetividade]
        mostrarFrase(fala.texto)
        jogador.vida -= fala.dano

        return fala.texto
    }
    return inimigo;
}

 const Idosa = criarInimigo('Idosa',[criarFala("Muito bom!",0),criarFala("Não entendi",1),criarFala("Você vai pro inferno, meu filho",2)],{x1:6,x2:6,x3:8,x4:8},80)

 const GerZ = criarInimigo('GenZ',[criarFala("Aí sim heim, de ladinho é muito poggers!! ",0),criarFala("Kkkk as ideia",1),criarFala("Porra cringe essa piada ai",2)],{x1:6,x2:8,x3:7,x4:0},120)

 const Militar = criarInimigo('Militar',[criarFala("HAHAHA BRASIL!!",0),criarFala("Era melhor ta servindo a patria brasileira meu jovem...",1),criarFala("Que isso, seu bizonho?",2)],{x1:6,x2:8,x3:0,x4:0},100)

 const Padre = criarInimigo('Padre',[criarFala("Hahaha, Que piada divina!",0),criarFala("Que Deus ande contigo",1),criarFala("Que horror, Deus perdoe seus pecados",2)],{x1:7,x2:9,x3:0,x4:0},120)

export let inimigos=    [Idosa,GerZ,Militar,Padre]