/*
O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. 
Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame.
*/

var ler = require("prompt-sync")();

var capacidade = ler("Digite a capacidade da garrafa (em ml)?");

var gel = capacidade * (30/100);
var alcool = capacidade * (70/100);

console.log("Para uma garrafa de " + capacidade + " ml. O volume de álcool deve ser de " + alcool + " ml e o volume de gel deve ser de " + gel + " ml.");