class Locacao {
    modelo: string
    diaria: number
    dias: number

    constructor(modelo: string, diaria: number, dias: number) {
        this.modelo = modelo
        this.diaria = diaria
        this.dias = dias
    }

    valorTotal(): number {
        return this.diaria * this.dias
    }

    resumo(): void {
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Valor da diária: R$ ${this.diaria}`)
        console.log(`Quantidade de dias: ${this.dias}`)
        console.log(`Valor total: R$ ${this.valorTotal()}`)
    }
}

let continuar: number = Number(prompt("Digite: \n1 - Fazer uma locação \n2 - Sair"))

while (continuar != 2) {

    let modelo: string = String(prompt("Modelo do carro: "))
    let diaria: number = Number(prompt("Valor da diária: "))
    let dias: number = Number(prompt("Quantidade de dias: "))

    let locacao = new Locacao(modelo, diaria, dias)

    locacao.resumo()

    continuar = Number(prompt("Deseja fazer uma nova locação? \n1 - Sim \n2 - Não"))
}