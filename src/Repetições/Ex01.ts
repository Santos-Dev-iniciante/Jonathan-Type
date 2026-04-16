// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

let soma = 0
let contador = 0
let num: number

  num = Number(prompt("Digite um número (0 para parar):"))

 while (num !== 0){
  num = Number(prompt("Digite um número (0 para parar):"))

  if (num !== 0) {
    soma += num
    contador++
  }
  num = Number(prompt("Digite um número (0 para parar):"))

} 

console.log("Quantidade de números:", contador)
console.log("Soma total:", soma)