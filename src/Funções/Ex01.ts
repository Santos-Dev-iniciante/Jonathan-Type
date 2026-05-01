// 1. Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).

function somarAte(num: number ):number{
     let soma = 0

     for(let i = 1; i <= num; i++){
        soma += i
     }
      
     return soma 
}

let number:number = Number(prompt("Informe um número"))

document.writeln(`Resultado: ${somarAte(number)}`)