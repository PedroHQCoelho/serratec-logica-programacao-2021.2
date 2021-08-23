/*
O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, onde o cliente poderá consultar seu saldo de pontos. 
O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto. 
*/

var ler = require("prompt-sync")();

var cupons = ler("Digite seus cupons: ");

var pontos = cupons * 1;

console.log("De acordo com seus cupons, você possui " + pontos + " Pontos no programa de fidelidade!");