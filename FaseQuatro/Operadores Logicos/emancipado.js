/* 
É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. 
Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.
*/

var ler = require("prompt-sync")();

var sexo = ler("Qual o seu sexo? ");
var anoNasc = ler("Qual o seu ano de nascimento? ");

var emancipado = ((sexo == 'Masculino') && (anoNasc <= 2003)) || ((sexo == 'Feminino') && (anoNasc <= 2000));

console.log("Emancipado: " + emancipado);