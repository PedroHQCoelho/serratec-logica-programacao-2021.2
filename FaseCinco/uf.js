/*
O sistema irá solicitar a digitação da sigla da "UF" de onde você mora. E o programa irá dizer o nome completo do estado. Para as UFs do sudeste, considerar a entrada em maiúsculas ou minúsculas.

Alt + Z - deixa as linhas desse modo sem ter rolagem horizontal
*/

//Prompt

const ler = require("prompt-sync")();

//Entradas

var uf = ler("Qual a sigla da UF de onde você mora? ");

//Processamento

var nomeCompleto = "";

switch (uf){
    case "AC" :	nomeCompleto = "Acre";					break;
    case "AL" :	nomeCompleto = "Alagoas";				break;
    case "AM" :	nomeCompleto = "Amazonas";				break;
    case "AP" :	nomeCompleto = "Amapá";					break;
    case "BA" :	nomeCompleto = "Bahia";					break;
    case "CE" :	nomeCompleto = "Ceará";					break;
    case "DF" :	nomeCompleto = "Distrito Federal";		break;
    case "ES" :	nomeCompleto = "Espírito Santo";		break;
    case "es" :	nomeCompleto = "Espírito Santo";		break;
    case "GO" :	nomeCompleto = "Goiás";					break;
    case "MA" :	nomeCompleto = "Maranhão";				break;
    case "MG" :	nomeCompleto = "Minas Gerais";			break;
    case "mg" :	nomeCompleto = "Minas Gerais";			break;
    case "MS" :	nomeCompleto = "Mato Grosso do Sul";	break;
    case "MT" :	nomeCompleto = "Mato Grosso";			break;
    case "PA" :	nomeCompleto = "Pará";					break;
    case "PB" :	nomeCompleto = "Paraíba";				break;
    case "PE" :	nomeCompleto = "Pernambuco";			break;
    case "PI" :	nomeCompleto = "Piauí";					break;
    case "PR" :	nomeCompleto = "Paraná";				break;
    case "RJ" :	nomeCompleto = "Rio de Janeiro";		break;
    case "rj" :	nomeCompleto = "Rio de Janeiro";		break;
    case "RN" :	nomeCompleto = "Rio Grande do Norte";	break;
    case "RO" :	nomeCompleto = "Rondônia";				break;
    case "RR" :	nomeCompleto = "Roraima";				break;
    case "RS" :	nomeCompleto = "Rio Grande do Sul";		break;
    case "SC" :	nomeCompleto = "Santa Catarina";		break;
    case "SE" :	nomeCompleto = "Sergipe";				break;
    case "SP" :	nomeCompleto = "São Paulo";				break;
    case "sp" :	nomeCompleto = "São Paulo";				break;
    case "TO" :	nomeCompleto = "Tocantíns";				break;

}

//Saída
console.log("Nome completo do estado: " +nomeCompleto);