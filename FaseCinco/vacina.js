/* 
O posto de Saúde irá vacinar hoje contra a Covid os cidadãos com 67 anos. Ao entrar, deve ser solicitada a idade, para então exibir as mensagens de direcionamento:
acima de 67 anos = Por quê não vacinou ainda?
Abaixo de 67 anos = Volte na próxima semana
67 anos completos = Vacinação hoje. 
*/

var ler = require("prompt-sync")();

var idade = ler ("Qual a sua idade? ");

if(idade >= '67'){
    if(idade == '67'){
    console.log("Vacinação hoje.");
    }else{
        console.log("Por quê não vacinou ainda?");
    }
}else{
    console.log("Volte na próxima semana.");
}