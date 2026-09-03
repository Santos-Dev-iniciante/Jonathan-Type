class Pessoa {
    nome: string
    idade: number
    peso: number
    altura: number

    constructor(nome: string, idade: number, peso: number, altura: number) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }

    envelhecer() {
        this.idade++

        if (this.idade < 21) {
            this.altura = this.altura + 0.5
        }
    }

    engordar(peso: number) {
        this.peso = this.peso + peso
    }

    emagrecer(peso: number) {
        this.peso = this.peso - peso
    }

    crescer(altura: number) {
        this.altura = this.altura + altura
    }
}

let pessoa = new Pessoa("João", 18, 70, 1.70)

console.log("Nome:", pessoa.nome)
console.log("Idade:", pessoa.idade)
console.log("Peso:", pessoa.peso)
console.log("Altura:", pessoa.altura)

pessoa.envelhecer()

console.log("Depois de envelhecer:")
console.log("Idade:", pessoa.idade)
console.log("Altura:", pessoa.altura)

pessoa.engordar(2)  
console.log("Peso depois de engordar:", pessoa.peso)

pessoa.emagrecer(1)
console.log("Peso depois de emagrecer:", pessoa.peso)

pessoa.crescer(0.5)
console.log("Altura depois de crescer:", pessoa.altura)