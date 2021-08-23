/* 
O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.
*/

var ler = require("prompt-sync")();

var x = ler("Digite um número: ");
var y = x*x;

console.log("O quadrado de " + x + " é " + y + ".");