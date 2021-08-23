/* 
A “continha oposta” lê um número e mostra seu valor negativo.
*/

const ler = require("prompt-sync")();

var  numero= ler ("Digite um número: ");
var resultado= - + numero;

console.log("Seu número negativo é:", resultado);