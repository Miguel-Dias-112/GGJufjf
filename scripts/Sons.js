
//let temaMenu = new Audio('assets/Menu/Menu.mp3');

export function tocarTema(nome) {

    let tema = new Audio('assets/'+nome+'/'+nome+'.mp3');
    tema.loop = true;
    tema.play();

   
}