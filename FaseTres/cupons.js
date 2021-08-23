/* 
É muito comum vermos promoções em mercados e shoppings relacionadas ao valor das compras. 
Se a Alice fez suas compras em um shopping cuja promoção era que a cada R$ 190,00 em compras ela ganhava um cupom, quantos cupons ela ganhou?
*/

//Alice comprou R$ 1890,00

var compra = 1890.00;
var cupons = Math.trunc(compra/190);

console.log("\nPor ter comprado R$" + compra.toFixed(2) + " em produtos, você ganhou " + cupons + " cupons! Parabéns!\n");