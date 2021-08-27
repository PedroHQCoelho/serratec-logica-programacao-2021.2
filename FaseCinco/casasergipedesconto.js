/*
O vendedor das Casas Sergipe não pode perder negócio. 
Por isso, após o item, o sistema pergunta se deseja “Exibir preço com desconto”, que deve abater 5% no valor do produto.
*/

var ler = require("prompt-sync")();

var codigo = ler("Digite o código do item: ");
var valor = 0;
var produto = "";

switch (codigo) {
    case "001":
        console.log("Cadeira simples - R$ 100,00");
        produto = "Cadeira simples - ";
        valor = 100.00;     
        break;
    case "002":
        console.log("Cadeira luxo - R$ 200,00");
        produto = "Cadeira luxo - ";
        valor = 200.00; 
        break;
    case "003":
        console.log("Mesa simples - R$ 450,00");
        produto = "Mesa simples - ";
        valor = 450.00;
        break;
    case "004":
        console.log("Mesa luxo - R$ 900,00");
        produto = "Mesa luxo - ";
        valor = 900.00;        
        break;
    case "005":
        console.log("Cama - R$ 1500,00");
        produto = "Cama - ";
        valor = 1500.00;       
        break;
}

var desconto = ler("Exibir preço com desconto? (S ou N):")
var descontoTratado = desconto.toUpperCase();
var valorDesconto = 0, novoValor = 0;


if (descontoTratado == "S") {
    valorDesconto = valor * (5/100);
    novoValor = valor - valorDesconto;
    console.log("Com desconto: " + produto + " R$ " + novoValor.toFixed(2));
}else{
    console.log("Obrigado!");
}