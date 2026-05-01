// Faça um programa que leia um conjunto de números (X) e imprima
//  a quantidade de números pares (QPares) e a quantidade de números ímpares (QImpares) lidos.
//  Admita que o valor -1 é utilizado como sentinela para fim de leitura.

let QPares = 0, QImpares = 0
let opcao:number = Number(prompt("Escolha: \n 1- Entar no programa! \n -1- Sair do programa!"))

let valor:number = Number(prompt("Informe um número: "))

while(opcao != -1){
    if(valor % 2 == 0){
        QImpares ++
    }
    else {
        QPares ++
    }

    opcao = Number(prompt("Escolha: \n 1- Entar no programa! \n -1- Sair do programa!"))

}
document.writeln(`A quantidades de números pares é: ${QPares}`)
document.writeln(`A quantidades de números ímpares é: ${QImpares}`)