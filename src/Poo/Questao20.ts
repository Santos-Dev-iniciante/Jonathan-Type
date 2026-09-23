abstract class Pedido {
    private mesa: number;
    private valorIngredientes: number;

    constructor(mesa: number, valorIngredientes: number) {
        this.mesa = mesa;
        this.valorIngredientes = valorIngredientes;
    }

    public getMesa(): number {
        return this.mesa;
    }

    public setMesa(mesa: number): void {
        this.mesa = mesa;
    }

    public getValorIngredientes(): number {
        return this.valorIngredientes;
    }

    public setValorIngredientes(valorIngredientes: number): void {
        this.valorIngredientes = valorIngredientes;
    }

    abstract calcularValorFinal(): number;
}

class PedidoLocal extends Pedido {
    calcularValorFinal(): number {
        return this.getValorIngredientes();
    }
}

class PedidoDelivery extends Pedido {
    private taxaEntrega: number;
    private endereco: string;

    constructor(mesa: number, valorIngredientes: number, taxaEntrega: number, endereco: string) {
        super(mesa, valorIngredientes);
        this.taxaEntrega = taxaEntrega;
        this.endereco = endereco;
    }

    public getTaxaEntrega(): number {
        return this.taxaEntrega;
    }

    public setTaxaEntrega(taxaEntrega: number): void {
        this.taxaEntrega = taxaEntrega;
    }

    public getEndereco(): string {
        return this.endereco;
    }

    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    calcularValorFinal(): number {
        return this.getValorIngredientes() + this.getTaxaEntrega();
    }
}

let pedidos: Pedido[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let tipo: number = Number(prompt("Digite 1 para pedido local ou 2 para delivery:"));
    let mesa: number = Number(prompt("Digite o número da mesa:"));
    let valor: number = Number(prompt("Digite o valor dos ingredientes:"));

    if (tipo == 1) {
        pedidos.push(new PedidoLocal(mesa, valor));
    } else if (tipo == 2) {
        let taxa: number = Number(prompt("Digite a taxa de entrega:"));
        let endereco: string = String(prompt("Digite o endereço:"));

        pedidos.push(new PedidoDelivery(mesa, valor, taxa, endereco));
    }

    continuar = Number(prompt("Deseja cadastrar outro pedido? 1-Sim / 2-Não"));
}

let faturamento: number = 0;

console.log("=== FECHAMENTO DO CAIXA ===");

for (let pedido of pedidos) {
    let valorFinal: number = pedido.calcularValorFinal();

    console.log("Mesa: " + pedido.getMesa());
    console.log("Valor final: R$ " + valorFinal.toFixed(2));

    faturamento += valorFinal;
}

console.log("Faturamento total: R$ " + faturamento.toFixed(2));