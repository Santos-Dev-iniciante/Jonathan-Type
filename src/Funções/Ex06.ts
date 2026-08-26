// 6. Faça um programa para o cálculo de uma folha de pagamento fictício, sabendo que os
// descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo),
// 3% para o Sindicato, 6% de vale transporte, 8% de vale alimentação, 10% do INSS e o FGTS
// que corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).

let salarioBruto: number = Number(prompt("Digite o salário bruto:"))        
let impostoDeRenda: number = 0

if (salarioBruto <= 1903.98) {
    impostoDeRenda = 0
}
else if (salarioBruto <= 2826.65) {
    impostoDeRenda = salarioBruto * 0.075
}
else if (salarioBruto <= 3751.05) {
    impostoDeRenda = salarioBruto * 0.15
}
else if (salarioBruto <= 4664.68) {
    impostoDeRenda = salarioBruto * 0.225
}   
else {
    impostoDeRenda = salarioBruto * 0.275
}

let sindicato: number = salarioBruto * 3 / 100
let valeTransporte: number = salarioBruto * 6 / 100
let valeAlimentacao: number = salarioBruto * 8 / 100
let inss: number = salarioBruto * 10 / 100
let fgts: number = salarioBruto * 11 / 100

let totalDescontos: number = impostoDeRenda + sindicato + valeTransporte + valeAlimentacao + inss
let salarioLiquido: number = salarioBruto - totalDescontos

document.writeln(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}<br>`)

document.writeln(`Desconto do Imposto de Renda: R$ ${impostoDeRenda.toFixed(2)}<br>`)
document.writeln(`Desconto do Sindicato: R$ ${sindicato.toFixed(2)}<br>`)
document.writeln(`Desconto do Vale Transporte: R$ ${valeTransporte.toFixed(2)}<br>`)
document.writeln(`Desconto do Vale Alimentação: R$ ${valeAlimentacao.toFixed(2)}<br>`)
document.writeln(`Desconto do INSS: R$ ${inss.toFixed(2)}<br>`)
document.writeln(`FGTS (não descontado): R$ ${fgts.toFixed(2)}<br>`)    
document.writeln(`Total de Descontos: R$ ${totalDescontos.toFixed(2)}<br>`)
document.writeln(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}<br>`)
