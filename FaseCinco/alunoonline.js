/*
Mesmo com aulas online, os alunos do cursinho continuam sendo avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada. 
Pela soma dos pontos, o aluno saberá sua situação na disciplina.
Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10
*/

const ler = require("prompt-sync")();

var p1 = ler("Digite a nota da sua P1: ");
var p2 = ler("Digite a nota da sua P2: ");

var media = parseInt(p1) + parseInt(p2);

if (media >=8 && media <= 10){
    console.log("Média Final: " + media + "\nDestaque!");
}
if (media >=6 && media <= 7.99){
    console.log("Média Final: " + media + "\nAprovado!");
}
if (media >= 5 && media <= 5.99){
    console.log("Média Final: " + media + "\nRecuperação!");
} else if (media >= 0 && media <= 4.99){
    console.log("Média Final: " + media + "\nReprovado!");
} else{
    console.log("Você não digitou a média certa, por favor, insira os valores corretos.");
}