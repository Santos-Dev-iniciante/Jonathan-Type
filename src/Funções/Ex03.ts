// 3. Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***

function recebe(n: number): void {
    for(let i = 1; i <= n; i++){
        let linha: string = ""
    
        for(let x = 1; x <= i; x++){
            linha += "*"
        }
        document.writeln(linha + "<br>")
    }
}

let val: number = Number(prompt("Digite um número:"))

let fun = recebe(val)