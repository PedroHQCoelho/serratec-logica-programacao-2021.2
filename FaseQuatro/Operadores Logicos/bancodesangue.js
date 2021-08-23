/*
Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). 
Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições.
*/

const ler = require("prompt-sync")();

console.log("====BANCO DE SANGUE====");
console.log("Digite 'sim' ou 'não' nas restrições a seguir");

var idade= ler("Você está abaixo de 16 ou acima de 69 anos: ");
var peso=ler("Pesa menos de 50kg:");
var hepatite= ler("Portador de hepatite:");
var malaria=ler("Já teve malária: ");
var recente=ler("fez doação recente: ");


var resultado = !(idade == "sim" || peso == "sim" || hepatite == "sim" || malaria == "sim" || recente == "sim");


console.log("[RESULTADO DA TRIAGEM]");
console.log("Pode doar sangue?", resultado);