/* 
O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. 
Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.
*/

var ler = require("prompt-sync")();

var limite = 10;

var pessoas = ler("Quantas pessoas estão dentro da loja?");

if(pessoas < 10){
    console.log("O próximo cliente pode entrar!");
}else{
    console.log("A loja esta cheia, aguarde!");
}