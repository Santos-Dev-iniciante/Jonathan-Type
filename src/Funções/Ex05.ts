// 5. Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
// esse intervalo e imprimir apenas os números que são múltiplos de 3.

function multiplosDe3(inicio: number, fim: number): void {
    for (let i = inicio; i <= fim; i++) {
        if (i % 3 === 0) {
            document.writeln(i + "<br>")
        }
    }      
}

let inicio: number = Number(prompt("Digite o número de início:"))
let fim: number = Number(prompt("Digite o número de fim:")) 
multiplosDe3(inicio, fim)
