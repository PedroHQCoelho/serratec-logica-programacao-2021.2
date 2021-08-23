/*
Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. 
Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.
*/

var jogos = 345.00;
console.log("\nJogos ............  R$" + jogos.toFixed(2));

var videoGame = 1545.00;
console.log("Videogame ........ R$" + videoGame.toFixed(2));

var juros = (jogos + videoGame) * (1.5/100);
var totalSemJuros= jogos + videoGame;
console.log("Total da compra .. R$" + totalSemJuros.toFixed(2));

var totalComJuros = jogos + videoGame + juros;
var parcelas3 = totalSemJuros/3;
var parcelas5 = totalSemJuros/5;
var parcelas10 = totalComJuros/10;

console.log("\nVocê tem 3 opcões de parcelamento: ");
console.log("3x de R$" + parcelas3.toFixed(2) + " sem juros,  Total de ........... R$" + totalSemJuros.toFixed(2));
console.log("5x de R$" + parcelas5.toFixed(2) + " sem juros,  Total de ........... R$" + totalSemJuros.toFixed(2));
console.log("10x de R$" + parcelas10.toFixed(2) + " com juros de 1,5%,  Total de .. R$" + totalComJuros.toFixed(2) + "\n");