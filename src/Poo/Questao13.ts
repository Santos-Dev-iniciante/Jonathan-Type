class Aluno {
    nome: string
    nota1: number
    nota2: number

    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome
        this.nota1 = nota1
        this.nota2 = nota2
    }

    calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2
    }

    situacao(): void {
        let media = this.calcularMedia()

        console.log(`Aluno: ${this.nome}`)
        console.log(`Média: ${media}`)

        if (media >= 7) {
            console.log("Aprovado")
        } else {
            console.log("Reprovado")
        }
    }
}

let nome: string = String(prompt("Nome do aluno: "))
let nota1: number = Number(prompt("Primeira nota: "))
let nota2: number = Number(prompt("Segunda nota: "))

let aluno = new Aluno(nome, nota1, nota2)

aluno.situacao()    