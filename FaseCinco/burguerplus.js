/*
No tablet da lanchonete, o cliente agora pode escolher trΓͺs complementos. E os pedidos tambΓ©m ganharam mais opΓ§Γ΅es!
Q= queijo, B= bacon, A= alface, T= tomate, P= picles, C= cebola, O= ovo frito
*/

var ler = require("prompt-sync")();

console.log("π Lanchonete π");
console.log("Complementos: Q = Queijo π§ | B = Bacon π₯ | A = Alface π₯¬ | T = Tomate π | P = Picles π₯ | C = Cebola | O = Ovo Frito");

var item1 = ler("Item 1:");
var item2 = ler("Item 2:");
var item3 = ler("Item 3:");

var complemento1 = "";

switch (item1.toUpperCase()) {
    case "Q": complemento1 = "Queijo π§";
    break;
    case "B": complemento1 = "Bacon π₯";
    break;
    case "A": complemento1 = "Alface π₯¬";
    break;
    case "T": complemento1 = "Tomate π";
    break;
    case "P": complemento1 = "Picles π₯";
    break;
    case "C": complemento1 = "Cebola π§";
    break;
    case "O": complemento1 = "Ovo Frito π₯";
    break;
}

var complemento2 = "";

switch (item2.toUpperCase()) {
    case "Q": complemento2 = "Queijo π§";
    break;
    case "B": complemento2 = "Bacon π₯";
    break;
    case "A": complemento2 = "Alface π₯¬";
    break;
    case "T": complemento2 = "Tomate π";
    break;
    case "P": complemento2 = "Picles π₯";
    break;
    case "C": complemento2 = "Cebola π§";
    break;
    case "O": complemento2 = "Ovo Frito π₯";
    break;
}

var complemento3 = "";

switch (item3.toUpperCase()) {
    case "Q": complemento3 = "Queijo π§";
    break;
    case "B": complemento3 = "Bacon π₯";
    break;
    case "A": complemento3 = "Alface π₯¬";
    break;
    case "T": complemento3 = "Tomate π";
    break;
    case "P": complemento3 = "Picles π₯";
    break;
    case "C": complemento3 = "Cebola π§";
    break;
    case "O": complemento3 = "Ovo Frito π₯";
    break;
}

var teraMolho = (item1.toUpperCase() == "A") || (item1.toUpperCase() == "T") || (item1.toUpperCase() == "P") || (item1.toUpperCase() == "C") || (item2.toUpperCase() == "A") || (item2.toUpperCase() == "T") || (item2.toUpperCase() == "P") || (item2.toUpperCase() == "C") || (item3.toUpperCase() == "A") || (item3.toUpperCase() == "T") || (item3.toUpperCase() == "P") || (item3.toUpperCase() == "C");

if (teraMolho){
    var molho = ler("Adicionar molho: "); 
    if(molho.toLowerCase() == 'sim' || molho.toLowerCase() == 's'){
        molho = "com";
    }else{
        molho = 'sem';
    }
}else{
    molho = "sem";
}

console.log("[Cozinha]");
console.log("Lanche com " + complemento1 + " , " + complemento2 + ", " + complemento3 + ", " + molho + " molho");