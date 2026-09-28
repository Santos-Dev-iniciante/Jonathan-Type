class Cliente {
    private nome: string;
    private email: string;
    private cashback: number;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
        this.cashback = 0;
    }

    public processarCompra(valor: number): void {
    }

    public getCashback(): number {
        return this.cashback;
    }

    protected adicionarCashback(valor: number): void {
        this.cashback += valor;
    }

    public getNome(): string {
        return this.nome;
    }
}

class ClientePadrao extends Cliente {
    public processarCompra(valor: number): void {
        this.adicionarCashback(valor * 0.01);
    }
}

class ClienteVIP extends Cliente {
    public processarCompra(valor: number): void {
        this.adicionarCashback(valor * 0.05);
        console.log("Frete grátis garantido.");
    }
}

let clientes: Cliente[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let nome: string = String(prompt("Nome do cliente: "));
    let email: string = String(prompt("E-mail do cliente: "));
    let tipo: number = Number(prompt("1 - Cliente Padrão\n2 - Cliente VIP"));
    let valor: number = Number(prompt("Valor da compra: "));

    let cliente: Cliente;

    if (tipo == 1) {
        cliente = new ClientePadrao(nome, email);
    } else {
        cliente = new ClienteVIP(nome, email);
    }

    cliente.processarCompra(valor);
    clientes.push(cliente);

    continuar = Number(prompt("Deseja registrar outra compra? 1 - Sim / 2 - Não"));
}

let totalCashback: number = 0;

for (let cliente of clientes) {
    console.log(`Cliente: ${cliente.getNome()}`);
    console.log(`Cashback: R$ ${cliente.getCashback().toFixed(2)}`);
    console.log("--------------------");

    totalCashback += cliente.getCashback();
}

console.log(`Total de cashback concedido: R$ ${totalCashback.toFixed(2)}`);