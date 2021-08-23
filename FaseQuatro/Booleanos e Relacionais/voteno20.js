/*No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. */

var ler = require("prompt-sync")();

console.log("== Eleições 2020 ==");
var idade = ler("Digite sua idade: ");
var resp = idade >= 16;

console.log("Você já pode votar? " + resp);