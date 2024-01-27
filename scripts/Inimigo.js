import { criaJogador } from "./Jogador";
function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }
criaJInimigo(){
    let inimigo = {};
    
    inimigo.maodoInimigo = [];
    inimigo.vida=4;
    inimigo.gracaCtn= document.querySelector('#graca');
    

    return inimigo;
}