/*
# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Angelita
● Squad de Origem (Requisito): Time NSMN (Squad 6)
● Arquivo: rpg.js
● Data: 22/08/2021

"UM DESAFIO" : Tente adivinhar qual o numero que eu estouto pensando?
 Você tem três chance para acertar, (de 0 - 20). 
 Se a pessoa acertar "Parabéns! Você é esperto. Se a pessoa errar "
  Pode tentar outra vez, você tem mais N chance!  Se não acertar,
   o programa fala o numero que ele tava pensando e diz,
 "Haha, Você Perdeu!
 */

 const ler = require("prompt-sync")();

 var numero = Math.round(Math.random()*20);
 console.log("Tente adivinhar o numero que eu estou pensando, você tem 3 Tentativas");
 var pensando = ler("");
 var ganhou = false;
 var tentativas = 3;
 do{
   if(numero == pensando){
     console.log("Parabéns! Você é esperto.");
     ganhou = true; 
   }else{
    tentativas = tentativas - 1;
    console.log("Pode tentar outra vez, você tem mais "+ tentativas +" chance!");
    pensando = ler("");
    ganhou = false;
   }

 }while(tentativas > 1 && ganhou == false);

if(ganhou == false){
  console.log("Eu estava pensando no numero "+ numero + " Haha, Você Perdeu!");
}