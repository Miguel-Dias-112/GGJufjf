import { criarCarta } from "./Carta.js";
import { porCartaTela } from "./Tela.js";
const c1 = criarCarta('Ontem eu matei um mendigo!', {dano: 10, defesa: 0}, ['Idoso']);
porCartaTela([c1]);