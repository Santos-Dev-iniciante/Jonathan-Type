class Empresa{
    nome: string
    cargo: string
    salario: number

        constructor(nome: string, cargo: string, salario: number){
            this.nome = nome
            this.cargo = cargo
            this.salario = salario
        }
        percentual(): number{
            let aumento = this.salario * 5/100
            return aumento
        }
        novosal(): number{
            let novoSalario: number 
            let sal= this.percentual()
            novoSalario = this.salario + sal
            return novoSalario

        }
}

let nome: string = String(prompt("Qual seu o nome? "))
let cargo: string = String(prompt("Qual o seu cargo? "))
let salario: number = Number(prompt("Qual o seu salário? "))

let empresa = new Empresa(nome, cargo, salario)

console.log ("=== DADOS INICIAS ===")
console.log ("Noma: ", empresa.nome)
console.log ("Cargo: ", empresa.cargo)
console.log ("Salário: ", empresa.salario)

console.log ("=== DADOS ATUALIZADOS ===")
console.log ("Nome: ", empresa.nome)
console.log ("Salário atualizado: ", empresa.novosal)