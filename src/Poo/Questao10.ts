class Bichinho {
    nome: string
    fome: number
    saude: number
    idade: number

    constructor(nome: string, fome: number, saude: number, idade: number) {
        this.nome = nome
        this.fome = fome
        this.saude = saude
        this.idade = idade
    }

    alterarNome(nome: string): void {
        this.nome = nome
    }

    alterarFome(fome: number): void {
        this.fome = fome
    }

    alterarSaude(saude: number): void {
        this.saude = saude
    }

    alterarIdade(idade: number): void {
        this.idade = idade
    }

    retornarNome(): string {
        return this.nome
    }

    retornarFome(): number {
        return this.fome
    }

    retornarSaude(): number {
        return this.saude
    }

    retornarIdade(): number {
        return this.idade
    }

    retornarHumor(): number {
        return this.fome + this.saude
    }
}

let nome: string = String(prompt("Nome do bichinho: "))
let fome: number = Number(prompt("Fome: "))
let saude: number = Number(prompt("Saúde: "))
let idade: number = Number(prompt("Idade: "))

let bichinho = new Bichinho(nome, fome, saude, idade)

console.log(`Nome: ${bichinho.retornarNome()}`)
console.log(`Fome: ${bichinho.retornarFome()}`)
console.log(`Saúde: ${bichinho.retornarSaude()}`)
console.log(`Idade: ${bichinho.retornarIdade()}`)
console.log(`Humor: ${bichinho.retornarHumor()}`)