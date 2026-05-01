// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo

let numero:number = Number(prompt("Qual o número: "))

    if(numero % 2 == 0){
        alert(`${numero} é par!`)
    }else{
        alert(`${numero} é impar!`)
    }