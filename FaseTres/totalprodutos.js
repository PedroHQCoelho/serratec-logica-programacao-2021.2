/*
Um programa "Total de produtos" irá solicitar que o cliente digite quantos produtos irá comprar. Depois, exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade.
*/

var ler = require("prompt-sync")();

var totalProd = ler("Quantos produtos irá comprar: ");

console.log("Parabéns por comprar " + totalProd + " produtos!");