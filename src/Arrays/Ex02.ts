// 2. Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
// entrada de dados, faça o seguinte:
// a) Mostre a quantidade de notas que foram lidas.
// b) Exiba todas as notas na ordem em que foram informadas.
// c) Exiba todas as notas na ordem inversa à que foram informadas.
// d) Calcule e mostre a soma das notas.
// e) Calcule e mostre a média das notas.
// f) Calcule e mostre a quantidade de notas acima da média calculada.

let quantia: number [] = []
let ordem: number [] = []
let inverso: number [] = []
let somar :number = 0
let media: number = 0
let acimaMedia: number [] = []

let nota: number = Number(prompt("Digite 1- Entrar \n ou -1 para encerrar:"))

while (nota == 1){
    let valor: number = Number(prompt("Digite a nota:"))
    quantia.push(valor)
    
}