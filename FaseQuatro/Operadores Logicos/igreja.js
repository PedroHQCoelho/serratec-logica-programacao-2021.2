/* 
Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.
*/

var ler = require("prompt-sync")();

var temperatura = ler("Digite a temperatura: ");
var mascara = ler("Usa máscara (S ou N): ");

var autoriza = (temperatura <= 37.5) && (mascara == 'S');

console.log("Autorizar a entrada? " + autoriza);