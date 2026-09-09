class Sistema {
    nome: string
    cargo: string
    sal: number

    constructor(nome: string, cargo: string, sal: number) {
        this.nome = nome
        this.cargo = cargo
        this.sal = sal
    }
}

let continuar: number = Number(prompt("Digite: \n 1- Para cadastrar um novo usuário \n 2- Para sair"))
let total = 0

while (continuar != 2) {

    let nome: string = String(prompt("Nome: "))
    let cargo = String(prompt("Cargo: "))
    let sal = Number(prompt("Salário: "))

    let funcionario = new Sistema(nome, cargo, sal)

    console.log(`Nome: ${funcionario.nome}`)
    console.log(`Cargo: ${funcionario.cargo}`)
    console.log(`Salário: R$ ${funcionario.sal}`)

    total += funcionario.sal

    continuar = Number(prompt("Cadastrar outro? (1/2): "))

    if(continuar > 2 || continuar < 1){
        alert("Opção inválida...")
    }
}

console.log(`Total dos salários: R$ ${total}`)