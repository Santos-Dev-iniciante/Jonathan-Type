class Funcionario {
    nome: string

    constructor(nome: string) {
        this.nome = nome
    }
}

class FuncionarioHorista extends Funcionario {
    horas: number
    valorHora: number

    constructor(nome: string, horas: number, valorHora: number) {
        super(nome)
        this.horas = horas
        this.valorHora = valorHora
    }

    calcularSalario(): number {
        return this.horas * this.valorHora
    }
}

class FuncionarioAssalariado extends Funcionario {
    salario: number

    constructor(nome: string, salario: number) {
        super(nome)
        this.salario = salario
    }

    calcularSalario(): number {
        return this.salario
    }
}

let nome1: string = String(prompt("Nome do funcionário horista: "))
let horas: number = Number(prompt("Horas trabalhadas: "))
let valorHora: number = Number(prompt("Valor da hora: "))

let horista = new FuncionarioHorista(nome1, horas, valorHora)

console.log(`Nome: ${horista.nome}`)
console.log(`Salário: R$ ${horista.calcularSalario()}`)

let nome2: string = String(prompt("Nome do funcionário assalariado: "))
let salario: number = Number(prompt("Salário mensal: "))

let assalariado = new FuncionarioAssalariado(nome2, salario)

console.log(`Nome: ${assalariado.nome}`)
console.log(`Salário:  R$ ${assalariado.calcularSalario()}`)