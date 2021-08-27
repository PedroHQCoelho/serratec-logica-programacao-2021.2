/*
O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos impressos, tanto nos plurais quanto na quantidade de visitas.
*/

var ler = require("prompt-sync")();

var visita = ler("Quantas vezes já nos visitou? ");

if( visita == 1){
    console.log("Visitas: " + visita);
        console.log("Você já nos visitou " + visita + " vez");
    }
    else if( visita >= 2){
        console.log("Visitas: " + visita);
        console.log("Você já nos visitou " + visita + " vezes");
    } else if(visita == 0){
    console.log("Visitas: " + visita);
    console.log("Você não nos visitou " + visita);
}else{
    console.log("Informação errada, digite por favor um número correto.");
}