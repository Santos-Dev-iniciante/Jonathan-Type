abstract class Pedido {
    private numeroPedido: number;
    private valorBase: number;

    constructor(numeroPedido: number, valorBase: number) {
        this.numeroPedido = numeroPedido;
        this.valorBase = valorBase;
    }

    public abstract calcularTotal(): number;

    public getNumeroPedido(): number {
        return this.numeroPedido;
    }

    public getValorBase(): number {
        return this.valorBase;
    }
}

class PedidoLocal extends Pedido {
    public calcularTotal(): number {
        return this.getValorBase() + (this.getValorBase() * 0.10);
    }
}

class PedidoDriveThru extends Pedido {
    public calcularTotal(): number {
        return this.getValorBase() + 3;
    }
}

let faturamentoBruto: number = 0;
let continuar: number = 1;

while (continuar == 1) {
    let numeroPedido: number = Number(prompt("Número do pedido: "));
    let valorBase: number = Number(prompt("Valor base dos itens: "));
    let tipo: number = Number(prompt("1 - Pedido Local\n2 - Pedido Drive-Thru"));

    let pedido: Pedido;

    if (tipo == 1) {
        pedido = new PedidoLocal(numeroPedido, valorBase);
    } else {
        pedido = new PedidoDriveThru(numeroPedido, valorBase);
    }

    let total: number = pedido.calcularTotal();
    faturamentoBruto += total;

    console.log(`Pedido: ${pedido.getNumeroPedido()}`);
    console.log(`Valor base: R$ ${pedido.getValorBase().toFixed(2)}`);
    console.log(`Total: R$ ${total.toFixed(2)}`);
    console.log("--------------------");

    continuar = Number(prompt("Deseja registrar outro pedido? 1 - Sim / 2 - Não"));
}

console.log(`Faturamento bruto: R$ ${faturamentoBruto.toFixed(2)}`);