/*Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. 
Vamos saber quem digitou o número maior, pelos resultados na tela. 
*/

var ler = require("prompt-sync")();

console.log("== Maioral ==");
var player1 = ler("  Player 1: ");
var player2 = ler("  Player 2: ");

console.log("  Resultados: ");
var player1Vence = player1  > player2;
console.log("  Player 1 vence: " + player1Vence);
var player2Vence = player1  < player2;
console.log("  Player 2 vence: " + player2Vence);
var empate = player1  == player2;
console.log("  Houve empate: " + empate);