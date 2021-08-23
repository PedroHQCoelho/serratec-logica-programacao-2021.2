/*O sistema “Mais que mil” apresenta o resultado da soma dos 4 primeiros múltiplos de 4 acima de mil, subtracaotraindo dos 4 primeiros números primos a partir de zero. */

//4 primeiros multiplos de 4 acima de mil são 1004, 1008, 1012 e 1016
//4 primeiros primos a partir do zero são 2, 3, 5 e 7 ou poderia ser 2357

var soma = 1004 + 1008 + 1012 + 1016;
console.log("A soma dos múltiplos de 4 acima de 1000 é: " + soma);

var subtracao = 2 + 3 + 5 + 7;
console.log("A soma dos quatro primeiros números primos a partir de 0 é: " + subtracao);

var result = soma - subtracao;
console.log("O resultado final é: " + result);

subtracao = 2357;
console.log("\nA junção dos 4 primeiros números primos a partir do zero é " + subtracao);

result = soma - subtracao;
console.log("O resultado final é: " + result);