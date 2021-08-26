/*
# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Marcos Moraes
● Squad de Origem (Requisito): Time NSMN (Squad 6)
● Arquivo: barraquinha.js
● Data: 22/08/2021

Zepa tem uma barraquinha na feira, onde vende café e 5 tipos de doces: bala, pirulito, bombom, paçoca e jujuba. 
Mas quem é cliente do Zepa sabe que nunca tem café nem paçoca na sua barraquinha. Quando chega um cliente, ele é sempre gentil e saudoso, avisando sobre tudo que ele vende. 
Quando alguém escolhe um item que ele tem na barraquinha, ele agradece a pessoa pelo item comprado, e quando alguém pede paçoca ou café, ele confessa seus vícios e pede desculpa pois devorou o estoque.
E se o cliente pedir algo que ele não vende, o Zepa educadamente pede para que o cliente escolha um produto válido.
Dica: Use paçoca como "pacoca" e café como "cafe". 
*/

const ler = require("prompt-sync")();

console.log("==BARRAQUINHA DO ZEPA==")
console.log("Olá, Tudo bem? Vendemos Café, bala, pirulito, bombom , paçoca e jujuba.");
var produto = ler("Qual produto você quer? ");

switch (produto.toLowerCase()) {
    case "jujuba": console.log("Aqui está a sua jujuba: 🍬 \nMuito obrigado e volte sempre.");
    break;
    case "pirulito": console.log("Aqui está o seu pirulito: 🍭 \nMuito obrigado e volte sempre.");
    break;
    case "bala": console.log("Aqui está a sua bala: 🍬 \nMuito obrigado e volte sempre.");
    break;
    case "bombom": console.log("Aqui está o seu bombom: 🍬 \nMuito obrigado e volte sempre.");
    break;
    case "cafe": console.log("Peço desculpas, mas infelizmente eu tomei todo o café que tinha. ☕");
    break;
    case "pacoca": console.log("Peço desculpas, mas infelizmente eu comi todas as paçocas.🥜");
    break;
    default:
        console.log("Não tenho esse produto, sinto muito. Mas temos café, bala, pirulito, bombom, paçoca e jujuba.");
}