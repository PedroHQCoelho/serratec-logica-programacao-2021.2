/*
“No abecedário da Xuxa, vamos aprender” Lembra da música? 
Então, crie um programa que recebe uma letra maiúscula e canta sua “definição musical”.
*/

var ler = require("prompt-sync")();

var letra = ler("Letra: ");

switch (letra.toUpperCase()) {
    case "A": console.log("A de amor");        
    break;
    case "B": console.log("B de baixinho");        
    break;
    case "C": console.log("C de coração");        
    break;
    case "D": console.log("D de docinho");        
    break;
    case "E": console.log("E de escola");        
    break;
    case "F": console.log("F de feijão");        
    break;
    case "G": console.log("G de gente");        
    break;
    case "H": console.log("H de humano");        
    break;
    case "I": console.log("I de igualdade");        
    break;
    case "J": console.log("J, juventude");        
    break;
    case "L": console.log("L, liberdade");        
    break;
    case "M": console.log("M, molecagem");        
    break;
    case "N": console.log("N, natureza");        
    break;
    case "O": console.log("O, obrigado");        
    break;
    case "P": console.log("P, proteção");        
    break;
    case "Q": console.log("Q, quero-quero");        
    break;
    case "R": console.log("R, riacho");        
    break;
    case "S": console.log("S, saudade");        
    break;
    case "T": console.log("T de terra");        
    break;
    case "U": console.log("U de universo");        
    break;
    case "V": console.log("V de vitória");        
    break;
    case "X": console.log("X, o que ?\nÉ Xuxa");        
    break;
    case "Z": console.log("E Z é zum-zum-zum-zum-zum");        
    break;
    default: console.log("Digite uma letra certa");
    break;
}