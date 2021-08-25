/*Desafio - Raquel
E então um milagre aconteceu e em uma linda sexta-feira, o nosso bebê nasceu.
Uau! Que incrível, nossa família cresceu! Somos papais de primeira viagem!
Mas espera um pouco aí, o que eu faço agora? Que choro é esse?
Será que é: fome, sono, desconforto ou dor?
Você consegue me ajudar? Socorro!!

Crie um programa que ajude esses papais de primeira viagem a identificar o que o bebê precisa através do seu choro. 
Caso o bebê tenha um choro diferente dos especificados, diga que o choro não foi reconhecido e que os papais precisam levar o bebê ao médico. 

Dica:
Choro de desconforto = "Éh" -> Verificar a fralda, frio ou calor.
Choro de fome = "Néh" ou "Nhé" -> Mamadeira ou Amamentar
Choro de sono = "Own" ou "Au" ou "Ai" -> Colocar para dormir 
Choro de dor = "Unhé" -> Pediatra e medicação
*/

const ler = require("prompt-sync")();

var choro = ler("Olá, mamãe e/ou papai!\nVamos ter ajudar a indentificar o problema do seu bebê! Qual som ele faz ao chorar?\n'Eh', 'Néh', 'Nhé','Own', 'Au', 'Ai' ou 'Unhe': ");

switch (choro.toLowerCase()) {
    case "eh": console.log("Choro de desconforto.\nVerificar a fralda, frio ou calor.");
    break;
    case "neh": console.log("Choro de fome.\nMamadeira ou amamentar.");
    break;
    case "nhe": console.log("Choro de fome.\nMamadeira ou amamentar.");
    break;
    case "own": console.log("Choro de sono.\nColocar para dormir.");
    break;
    case "au": console.log("Choro de sono.\nColocar para dormir.");
    break;
    case "ai": console.log("Choro de sono.\nColocar para dormir.");
    break;
    case "unhe": console.log("Choro de dor.\nPediatra e medicação.");
    break;
    default:
    console.log("Não consegui indentificar o problema do seu bebê.");
}   

