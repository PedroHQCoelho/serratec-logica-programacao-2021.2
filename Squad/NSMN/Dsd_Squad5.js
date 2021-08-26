/*
# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Rafael Alves.
● Squad de Origem (Requisito): “Dsd” dragon slayer developers (Squad 5)
● Data: 23/08/2021
## Descrição:
Limpar a casa. Crie um programa que mostre se o cômodo da casa que você escolher está limpo ou se ele tem que ser limpo. 
Você deve ter a entrada com os cômodos da casa, e criar um sistema que indique se o cômodo esta limpo ou não, exibindo uma mensagem no console para cada cômodo que for da sua escolha.*/

var prompt = require('prompt-sync')();

function numvalido(B){

    return (B == 1) || (B == 2) || (B == 3) || (B == 4) || (B == 5) || (B == 6) || (B == 7) || (B == 8) || (B == 9) || (B == 10); 
}

function comodoValido(B){

    return ( (resposta == comodo[0]) || (resposta == comodo[1]) || (resposta == comodo[2]) || (resposta == comodo[3]) || (resposta == comodo[4]) || (resposta == comodo[5]) || (resposta == comodo[6]) || (resposta == comodo[7]) || (resposta == comodo[8]) || (resposta == comodo[9]) )
}

do{
    var qtdComodo = prompt("Qual a quantidade de comodos da casa? ");

    if(!numvalido(qtdComodo)){
        console.log("O limite de comodos que este software armazena é 10.");
    } 
}
while(!numvalido(qtdComodo))

var comodo = [];

for(var i = 0; i<qtdComodo; i++){

    comodo[i] = prompt("Qual o nome desse comodo " + (i + 1) +" ?");

}

do{

    var resposta = prompt("Qual comodo deseja verificar? ");

    if(!comodoValido(resposta))
        console.log("Resposta inválida!!");

}
while(!comodoValido(resposta))


var sujeira = Math.round(Math.random()*1);

console.log(sujeira);

if(sujeira == 1)
    console.log(resposta + " está sujo!");
else
    console.log(resposta + " está limpo!");
