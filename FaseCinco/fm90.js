/*
***Aguardando a resposta certa***

O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, diga “90FM é show”!
*/

const ler = require("prompt-sync")();

do{
//Entradas

    var telefone = ler("Ligando pra você: ");

    //Processamento

    var errado = (telefone != "90FM show");

    //Saída
    if(errado)
        console.log("ERROU!!!");
    else
        console.log("Parabéns, você ganhou!!!");
}
while (errado);