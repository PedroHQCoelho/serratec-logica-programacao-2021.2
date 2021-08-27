const prompt = require("prompt-sync")();

const respostaOficial = "digitacao";

for (var i = 0; i < 3; i++){
    console.log("Alô ouvinte " + (i + 1));
    var chances = 2;

    do {
        var resposta = prompt("Qual a sua resposta para a pergunta ao vivo? ");
        var acertou = resposta == respostaOficial;

        if (acertou){
            console.log("Ouvinte " + (i + 1) + " ganhou caneca!");
        } else{
            chances --;
            console.log("ERROU!", chances);
        }
    }while (!acertou && (chances > 0));
}

console.log("90FM é show!");