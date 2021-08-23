/* 
Na gincana de arrecadação de alimentos, as equipes A e B têm uma semana para formar uma pilha com as doações. 
Sendo que a empresa irá dobrar a quantidade de quilos de feijão arrecadados. 
Ganha um ponto extra a equipe cuja quantidade de pacotes permitir a montagem de kits com 3 alimentos.
O programa “Gincana” irá apurar as quantidades recolhidas e exibir o nome da equipe vencedora.
*/

var ler = require("prompt-sync")();

console.log("Equipe A:")
var pacotesA = ler("Pacotes: ");
var feijaoA = ler("Feijão: ");

console.log("\nEquipe B: ");
var pacotesB = ler("Pacotes: ");
var feijaoB = ler("Feijão: ");

console.log("\n[Apuração]");
var totalA = (feijaoA * 2) + parseInt(pacotesA);

    if((pacotesA % 3) == 0){
        totalA = (feijaoA * 2) + parseInt(pacotesA) + 1;
    }
console.log("\nEquipe A: " + totalA);

var totalB = (feijaoB * 2) + parseInt(pacotesB);

    if((pacotesB % 3) == 0){
        totalB = (feijaoA * 2) + parseInt(pacotesA) + 1;
    }

console.log("Equipe B: " + totalB);

    if(totalA > totalB){
        console.log("E a vencedora é: Equipe A!");
    }else{
        console.log("E a vencedora é: Equipe B!");
    }