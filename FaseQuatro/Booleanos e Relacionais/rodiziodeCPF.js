/*
A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. 
CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares. 
*/

var ler = require("prompt-sync")();

var dia = ler("Dia de hoje: ");
var finalCpf = ler("Digitos finais do seu CPF: ");

var diaPar = dia%2;
var cpfPar = finalCpf%2;

var comparaPar = diaPar == cpfPar;

console.log("Autorizado a entrar na loja? " + comparaPar);