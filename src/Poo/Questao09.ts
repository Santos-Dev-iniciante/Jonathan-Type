class Produto {
    nome: string
    preco: number
    quantidade: number

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    valorTotal(): number {
        return this.preco * this.quantidade
    }
}

let nome: string = String(prompt("Nome do produto: "))
let preco: number = Number(prompt("Preço: "))
let quantidade: number = Number(prompt("Quantidade em estoque: "))

let produto = new Produto(nome, preco, quantidade)

console.log(`Nome: ${produto.nome}`)
console.log(`Preço: R$ ${produto.preco}`)
console.log(`Quantidade: ${produto.quantidade}`)
console.log(`Valor total em estoque: R$ ${produto.valorTotal()}`)