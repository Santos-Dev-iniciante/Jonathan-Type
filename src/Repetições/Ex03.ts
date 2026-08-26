// Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o programa.
// Calcule e imprima: 
// Salário total dos funcionários, o maior salário, juntamente com o nome de quem o recebeu; 
// O número de funcionários do sexo masculino e feminino cadastrado; 
// O percentual de funcionários homens e mulheres cadastrados.

let contM = 0, contF = 0, sal = 0, maiorsal = 0, nomemaior = ""

let opc:number = Number(prompt("1- Entrar \n 0- Sair"))

while(opc != 0){
    let integrante = prompt("Qual o nome do integrante do grupo?: ")
    let horas:number = Number(prompt("Informe a quantidade de horas trabalhadas: "))
    let salhor:number = Number(prompt("Informe o salário-hora: "))
    let sexo:number = Number(prompt("Informe o sexo:\n 1- Masculino\n 2- Feminino"))
    let salario = salhor * horas

    sal += salario

    if(sexo === 1){
        contM ++
    }
    else if(sexo === 2){
        contF ++
    }
    else if(sexo < 1 || sexo > 2 ){
        alert("1 ou 2")
    }

    if(salario > maiorsal){
        maiorsal = salario
        nomemaior = integrante!
    }

     opc = Number(prompt("1- Entrar \n 0- Sair"))

}
let total = contM + contF;

document.writeln(`Salário total: ${sal} <br>`);
document.writeln(`Maior salário: ${maiorsal} - Nome: ${nomemaior} <br>`);
document.writeln(`Masculino: ${contM} <br>`);
document.writeln(`Feminino: ${contF} <br>`);