class Pedido {
    cliente: string
    pedido: string
    valor: number

    constructor(cliente: string, pedido: string, valor: number) {
        this.cliente = cliente
        this.pedido = pedido
        this.valor = valor
    }

    resumo(): void {
        console.log(`Cliente: ${this.cliente}`)
        console.log(`Pedido: ${this.pedido}`)
        console.log(`Valor total: R$ ${this.valor}`)
    }
}

let cliente: string = String(prompt("Nome do cliente: "))
let pedido: string = String(prompt("Nome do pedido: "))
let valor: number = Number(prompt("Valor: "))

let pedidoCliente = new Pedido(cliente, pedido, valor)

pedidoCliente.resumo()