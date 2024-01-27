import { setInimigo,startGame} from "./jsons/Jogo/Jogo.js"
import { inimigos } from "./jsons/inimigos/Inimigos.js";
export function criarFase(){
    console.log("main")
    let main = document.createElement('main')
    main.id='main'

    let centralizador = document.createElement('div')

    let vidainimigo = document.createElement("div")
    vidainimigo.id="alegriaInimigo"
    let progressInimigo= document.createElement("progress")
    progressInimigo.id="progressoAlegriaInimigo"
    vidainimigo.appendChild(progressInimigo)
    main.appendChild(vidainimigo)

    let vidaSua = document.createElement("div")
    vidaSua.id="alegriaSua"
    let progressSeu= document.createElement("progress")
    progressSeu.id="progressoAlegriaSua"
    vidaSua.appendChild(progressSeu)
    main.appendChild(vidaSua)

    let mesa = document.createElement('div')
    let inimigo = document.createElement('div')
    inimigo.id="inimigo"
    mesa.id="mesaCartas"
    
    main.appendChild(mesa)
    main.appendChild(inimigo)

    main.appendChild(centralizador)
    progressSeu.value=10
    progressSeu.max=10
    progressInimigo.value=0
    progressInimigo.max=10

    progressInimigo.min=0
    progressSeu.min=0
    document.body.appendChild(main)
    

}
export function criarMapa(){

    let main = document.querySelector("#body")
    main.innerHTML = "";    

    var mapa = document.createElement("div");   
    mapa.classList.add("mapa");

    for (let i = 0; i <4; i++) {    
        const moldura = document.createElement("div");
        moldura.classList.add("molduarPersonagem");
        moldura.classList.add("a"+i);
     
        moldura.addEventListener("click", function(){
            main.innerHTML = "";
            criarFase()
            setInimigo(inimigos[i])

            console.log(inimigos[i])    
            startGame()
        })

        mapa.appendChild(moldura);
    }

      
    document.body.appendChild(mapa);

    console.log("mapa criado");
}