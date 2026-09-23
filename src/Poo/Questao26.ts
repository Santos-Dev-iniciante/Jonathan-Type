abstract class Conta {
    private titular: string;
    private saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    public getTitular(): string {
        return this.titular;
    }

    public setTitular(titular: string): void {
        this.titular = titular;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    protected setSaldo(saldo: number): void {
        this.saldo = saldo;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    abstract sacar(valor: number): void;
}

class ContaCorrente extends Conta {
    sacar(valor: number): void {
        let valorTotal: number = valor + 2;

        if (valorTotal <= this.getSaldo()) {
            this.setSaldo(this.getSaldo() - valorTotal);
        } else {
            console.log("Saldo insuficiente.");
        }
    }
}

class ContaPoupanca extends Conta {
    sacar(valor: number): void {
        if (valor <= this.getSaldo()) {
            this.setSaldo(this.getSaldo() - valor);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    public render(): void {
        this.setSaldo(this.getSaldo() * 1.01);
    }
}

let contas: Conta[] = [];

let titular1: string = String(prompt("Digite o nome do titular da conta corrente:"));
let saldo1: number = Number(prompt("Digite o saldo inicial:"));
contas.push(new ContaCorrente(titular1, saldo1));

let titular2: string = String(prompt("Digite o nome do titular da conta poupança:"));
let saldo2: number = Number(prompt("Digite o saldo inicial:"));
contas.push(new ContaPoupanca(titular2, saldo2));

let opcao: number = 0;

while (opcao != 4) {
    console.log("=== MENU ===");
    console.log("1 - Depositar");
    console.log("2 - Sacar");
    console.log("3 - Aplicar rendimento na poupança");
    console.log("4 - Sair");

    opcao = Number(prompt("Digite uma opção:"));

    if (opcao >= 1 && opcao <= 3) {
        let conta: number = Number(prompt("Digite 1 para Conta Corrente ou 2 para Conta Poupança:"));
        let contaSelecionada: Conta = contas[conta - 1];

        if (opcao == 1) {
            let valor: number = Number(prompt("Digite o valor do depósito:"));
            contaSelecionada.depositar(valor);
        }

        if (opcao == 2) {
            let valor: number = Number(prompt("Digite o valor do saque:"));
            contaSelecionada.sacar(valor);
        }

        if (opcao == 3) {
            if (contaSelecionada instanceof ContaPoupanca) {
                contaSelecionada.render();
            } else {
                console.log("Apenas a Conta Poupança possui rendimento.");
            }
        }

        console.log("Saldo atual: R$ " + contaSelecionada.getSaldo().toFixed(2));
    }
}