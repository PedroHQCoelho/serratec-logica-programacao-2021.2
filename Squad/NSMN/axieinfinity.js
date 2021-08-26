/*
# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Rodrigo de Paula Ribeiro
● Squad de Origem (Requisito): Time NSMN (Squad 6)
● Arquivo: axieinfinity.js
● Data: 22/08/2021

Cliente precisa de um programa para obter informações a respeito dos elementos dos seus Axies.
O programa deve informar qual elemento do Axie é mais forte e mais fraco sobre o outro no jogo Axie Infinity
("Beast", "Bug" e "Mech) < ("Aquatic", "Bird" e "Dawn") <("Reptile", "Plant" e "Dusk") < ("Beast", "Bug" e "Mech)
*/

 const ler = require("prompt-sync")();

 var elementos = ler("Informe o elemento do seu Axie: ")

 //Processamento
 switch (elementos.toLowerCase()) {
     case "beast":{
        console.log("Seu Axie é forte contra Reptile, Plant e Dusk.");
        console.log("Seu Axie é fraco contra Aquatic, Bird e Dawn.");
     }
     break;
     case "bug":{
        console.log("Seu Axie é forte contra Reptile, Plant e Dusk.");
        console.log("Seu Axie é fraco contra Aquatic, Bird e Dawn.");
     }
     break;
     case "mech":{
        console.log("Seu Axie é forte contra Reptile, Plant e Dusk.");
        console.log("Seu Axie é fraco contra Aquatic, Bird e Dawn.");
     }
     break;
     case "aquatic":{
        console.log("Seu Axie é forte contra Beast, Bug e Mech.");
        console.log("Seu Axie é fraco contra Reptile, Plant e Dusk.");
     }
     break;
     case "bird":{
        console.log("Seu Axie é forte contra Beast, Bug e Mech.");
        console.log("Seu Axie é fraco contra Reptile, Plant e Dusk.");
     }
     break;
     case "dawn":{
        console.log("Seu Axie é forte contra Beast, Bug e Mech.");
        console.log("Seu Axie é fraco contra Beast, Bug e Mech.");
     }
     break;
     case "reptile":{
        console.log("Seu Axie é forte contra Aquatic, Bird e Dawn.");
        console.log("Seu Axie é fraco contra Beast, Bug e Mech.");
    }
    break;
    case "plant":{
        console.log("Seu Axie é forte contra Aquatic, Bird e Dawn.");
        console.log("Seu Axie é fraco contra Beast, Bug e Mech.");
    }
    break;
    case "dusk":{
        console.log("Seu Axie é forte contra Aquatic, Bird e Dawn.");
        console.log("Seu Axie é fraco contra Beast, Bug e Mech.");
    }
    break;
    default:
     console.log("Não é um elemento Axie");

}