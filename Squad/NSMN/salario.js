/*
# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Pedro Coelho
● Squad de Origem (Requisito): Time NSMN (Squad 6)
● Arquivo: salario.js
● Data: 22/08/2021

Implemente um programa que receba do usuário o valor do salário bruto de um
funcionário e imprima o valor com descontos de INSS, FGTS e Plano de Saúde. O programa
deve utilizar uma função para calcular cada um dos descontos, sendo que estas funções
devem receber o valor do salário bruto e retornar o valor a ser descontado. Os valores
descontados devem ser:
 INSS: 10% do valor bruto
 FGTS: 8%
 Plano de Saúde: R$100,00

 O programa deve informar um salário com valor igual ou acima do salário mínimo.
 Se for informado um salário menor, informar que está errado.
*/


const planoSaude = 100;

var prompt = require("prompt-sync")();

var salarioBruto = "float";

function salarioDescontado(){
    var inss = salarioBruto/10;
    var fgts = salarioBruto * 0.08;
    
    var salarioLiquido = salarioBruto - (inss + fgts + planoSaude);
    return salarioLiquido.toFixed(2);
}

salarioBruto = prompt("Informe o seu salário bruto: ");
if (salarioBruto < 1147.00){
    console.log("Salário informado abaixo do mínimo, INFORMAÇÃO ERRADA!");
} else{
    console.log("O salário com descontos é de R$" + salarioDescontado() );
}