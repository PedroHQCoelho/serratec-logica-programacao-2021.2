/*
Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.
*/

var ler = require("prompt-sync")();

var numero1 = ler("Digite o primeiro número: ");
var numero2 = ler("Digite o segundo número: ");

var soma = parseInt(numero1) + parseInt(numero2);
console.log("A soma dos numeros é: " + soma);
var sub = numero1 - numero2;
console.log("A subtração dos numeros é: " + sub);
var mult = numero1 * numero2;
console.log("A multiplicação dos numeros é: " + mult);
var div = numero1/numero2;
console.log("A divisão dos numeros é: " + div);