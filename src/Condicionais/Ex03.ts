// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

let num1:number = Number(prompt("Informe o primeiro número"))
let num2:number = Number(prompt("Informe o segundo número"))
let op: number = Number(prompt("Qual a operação? \n 1- Soma\n 2- Subtração\n 3- Multiplicação\n 4- Dvisão"))
let resultado:number

switch(op) {
    case 1:
        resultado = num1 + num2
        alert(`Resultado: ${resultado}`)
        break
    case 2:
        resultado = num1 - num2
        alert(`Resultado: ${resultado}`)
        break
    case 3:
        resultado = num1 * num2
        alert(`Resultado: ${resultado}`)
    case 4: 
        resultado = num1 / num2
        alert(`Resultado: ${resultado}`)
        break
}