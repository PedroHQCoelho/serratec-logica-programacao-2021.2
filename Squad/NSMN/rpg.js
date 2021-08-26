/*
# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Adrian Menezes
● Squad de Origem (Requisito): Time NSMN (Squad 6)
● Arquivo: rpg.js
● Data: 22/08/2021

Um dia Adrian foi jogar D&D (Dungeons & Dragons) na casa de um amigo, mas adrian esqueceu seus dados, que são essenciais para o desenrolar do jogo. 
Adrian agora precisa criar um programa(DiceRoll) para rolar os dados do jogo, sendo eles 
"d4"(dado de quatro lados),"d6"(dado de seis lados),"d8"(dado de oito lados),"d10"(dado de dez lados),"d12"(dado de doze lados,"d20"(dado de vinte lados).
logo  após o programa dar a Dado d1 - resposta, o programa deve perguntar se ele quer rodar outro dado ou não. Assim executando o código novamente.
*/

const ler = require("prompt-sync")();

var repete;
do {
  var dado = ler("Qual dado você deseja rolar? D4 | D6 | D8 | D10 | D12 | D20 | ");

  var d4 = Math.trunc(Math.random() * (3 + 1) + 1);
  var d6 = Math.trunc(Math.random() * (5 + 1) + 1);
  var d8 = Math.trunc(Math.random() * (7 + 1) + 1);
  var d10 = Math.trunc(Math.random() * (9 + 1) + 1);
  var d12 = Math.trunc(Math.random() * (11 + 1) + 1);
  var d20 = Math.trunc(Math.random() * (19 + 1) + 1);

  switch (dado) {
      case "d4": console.log("Dado d4 - Resultado: " + d4);
      break;
      case "d6": console.log("Dado d6 - Resultado: " + d6);
      break;
      case "d8": console.log("Dado d8 - Resultado: " + d8);
      break;
      case "d10": console.log("Dado d10 - Resultado: " + d10);
      break;
      case "d12": console.log("Dado d12 - Resultado: " + d12);
      break;
      case "d20": console.log("Dado d20 - Resultado: " + d20);
      break;
      default:
        console.log("Perdão, não temos esse tipo de dado para jogar.");
  }

  var novamente = ler("Gostaria de jogar novamente? S/N ")
  switch (novamente.toUpperCase()) {
      case "S": repete = true; 
      break;  
      case "N": repete = false;
    }
    
}

while (repete);
console.log("Muito obrigado por jogar.")