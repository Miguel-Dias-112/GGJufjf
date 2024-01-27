import { criarCarta } from "./Carta.js";
import { porCartaTela } from "./Tela.js";
const c1 = criarCarta('Ontem eu matei um mendigo!', {dano: 10, defesa: 0}, ['Idoso']);
const c2 = criarCarta('Ontem eu matei uma idosa!', {dano: 10, defesa: 0}, ['Idoso']);
const c3 = criarCarta('Ontem eu matei uma criança!', {dano: 10, defesa: 0}, ['Idoso']);
const c4 = criarCarta('Ontem eu matei um cachorro!', {dano: 10, defesa: 0}, ['Idoso']);
const c5 = criarCarta('Ontem eu matei um gato!', {dano: 10, defesa: 0}, ['Idoso']);
const c6 = criarCarta('Ontem eu matei um periquito!', {dano: 10, defesa: 0}, ['Idoso']);
const c7 = criarCarta('Ontem eu me matei!', {dano: 10, defesa: 0}, ['Idoso']);

porCartaTela([c1,c2,c3]);