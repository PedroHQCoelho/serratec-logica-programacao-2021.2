/*O menino, os tênis e os apitos
Observe as quatro equações abaixo, a partir das quais você pode identificar que cada figura (menino, tênis e apitos) possui um valor diferente. 
Seu desafio é descobrir qual é o resultado da última equação. Preste muita atenção, pois os detalhes fazem a diferença!
 */

var sapato = 5;
var menino = 3;
var apito = 2;

console.log("2 sapatos  + 2 sapatos + 2 sapatos =", ((2*sapato)+(2*sapato)+(2*sapato)));
console.log("2 sapatos + 1 menino com 1 apito + 1 menino com 1 apito =",((2*sapato)+(menino+apito)+(menino+apito)));
console.log("1 menino com apito  + 2 apitos + 2 apitos =", ((menino+apito)+(2*apito)+(2*apito)));
console.log("1 sapato  + 1 menino * 1 apito =", ((1*sapato)+((1*menino)*(1*apito))));