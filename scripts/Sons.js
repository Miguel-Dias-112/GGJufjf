
//let temaMenu = new Audio('assets/Menu/Menu.mp3');
let audio=''


export function pararAudio() {
    audio.pause();
}


export function tocarTema(nome) {
  
    audio = new Audio('assets/'+nome+'/'+nome+'.mp3');
    
    
    audio.loop = true;
    audio.play();

    audio.volume = 0.25;
   
}