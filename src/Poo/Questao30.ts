abstract class Passagem {
    private nome: string;
    private cpf: string;
    private valorBase: number;

    constructor(nome: string, cpf: string, valorBase: number) {
        this.nome = nome;
        this.cpf = cpf;
        this.valorBase = valorBase;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public getValorBase(): number {
        return this.valorBase;
    }

    public setValorBase(valorBase: number): void {
        this.valorBase = valorBase;
    }

    abstract calcularValor(): number;
}

class PassagemComum extends Passagem {
    calcularValor(): number {
        return this.getValorBase();
    }
}

class PassagemEstudantil extends Passagem {
    calcularValor(): number {
        return this.getValorBase() * 0.50;
    }
}

let passagens: Passagem[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let nome: string = String(prompt("Digite o nome do passageiro:"));
    let cpf: string = String(prompt("Digite o CPF:"));
    let valor: number = Number(prompt("Digite o valor base da passagem:"));
    let tipo: number = Number(prompt("Digite 1 para Passagem Comum ou 2 para Passagem Estudantil:"));

    if (tipo == 1) {
        passagens.push(
            new PassagemComum(nome, cpf, valor)
        );
    } else if (tipo == 2) {
        passagens.push(
            new PassagemEstudantil(nome, cpf, valor)
        );
    }

    continuar = Number(prompt("Deseja cadastrar outra passagem? 1-Sim / 2-Não"));
}

let faturamento: number = 0;

console.log("=== RELATÓRIO DE PASSAGENS ===");

for (let passagem of passagens) {
    let valorFinal: number = passagem.calcularValor();

    console.log("Passageiro: " + passagem.getNome());
    console.log("CPF: " + passagem.getCpf());
    console.log("Valor pago: R$ " + valorFinal.toFixed(2));
    console.log("----------------------");

    faturamento += valorFinal;
}

console.log("Faturamento total do dia: R$ " + faturamento.toFixed(2));