/*
No blog “Incentivo ao consumo de frutas”, o aluno digita o nome de sua fruta favorita, e receberá alguma informação singular sobre ela. 
Para se tornar interessante, a lista deve conter pelo menos 6 curiosidades, e uma sobre frutas de modo geral.
*/

const ler = require("prompt-sync")();

var nome = ler("Digite seu nome: ")
console.log("--Seja Muito Bem vindo", nome, "--");
console.log("=============================================");

var fruta =ler("Digite o nome de uma fruta: ");

switch (fruta.toLowerCase()) {
    case ("maca"):
            console.log("1 - É boa para o coração");
            console.log("2 - Ajuda na digestão");
            console.log("3 - Afasta a prisão de ventre");
            console.log("4 - Bom contra diarria");
            console.log("5 - Previne cáries");
            console.log("6 - Previne o câncer");
        break;
    case ("pera"):
            console.log("1 - Ajuda no funcionamento do intestino");
            console.log("2 - Faz bem para o coração");
            console.log("3 - Combate inflamação");
            console.log("4 - Melhora o controle glicêmico");
            console.log("5 - Aumenta a saciedade");
            console.log("6 - faz bem para os ossos");
        break;
    case ("banana"):
            console.log("1 - Recuperação muscular");
            console.log("2 - Melhora no humor");
            console.log("3 - Ajuda a emagrecer");
            console.log("4 - Equilíbrio da glicose no sangue");
            console.log("5 - Aumento da saúde do sistema digestório.");
            console.log("6 - Disposição física e mental");
        break;
    case ("abacate"):
            console.log("1 - Afasta o colesterol");
            console.log("2 - Faz bem para o coração");
            console.log("3 - Diminui o cortisol, hormônio do estresse");
            console.log("4 - Fortalece o organismo após os exercícios");
            console.log("5 - Ajuda a perder peso");
            console.log("6 - Faz bem para os olhos");
        break;
    case ("melancia"):
            console.log("1 - Os japoneses desenvolveram melancias quadradas para que elas fossem armazenadas facilmente");
            console.log("2 - É um alimento altamente nutritivo");
            console.log("3 - Todas as partes da melancia são comestíveis (casca, sementes, polpa)");
            console.log("4 - O consumo regular ajuda a prevenir doenças cardiovasculares e melhora a imunidade");
            console.log("5 - Por ter muita água, ela ajuda a hidratar o organismo");
            console.log("6 - Têm um componente chamado citrulina, que funciona como Viagra");
        break;
    case ("abacaxi"):
            console.log("1 - Retarda o envelhecimento");
            console.log("2 - É um alimento muito energético");
            console.log("3 - Uma forma de reduzir o sabor ácido dessa fruta é adicionar uma pitadinha de sal a ela");
            console.log("4 - Há séculos, os abacaxis eram tão caros nos EUA que as pessoas alugavam um abacaxi para expor durante uma festa e mostrar sua riqueza");
            console.log("5 - Expectorante natural");
            console.log("6 - Cai muito bem no churrasco, grelhado na brasa, fica delicioso e bem digestivo");
        break;
    default:
        console.log("Milhões de mortes prematuras seriam evitadas se as pessoas comessem dez porções de frutas e vegetais por dia.")
        break;
}