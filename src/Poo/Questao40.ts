abstract class Investimento {
    private valorAplicado: number;
    private tempoMeses: number;

    constructor(valorAplicado: number, tempoMeses: number) {
        this.valorAplicado = valorAplicado;
        this.tempoMeses = tempoMeses;
    }

    public abstract calcularRendimento(): number;

    public getValorAplicado(): number {
        return this.valorAplicado;
    }

    public getTempoMeses(): number {
        return this.tempoMeses;
    }
}

class RendaFixa extends Investimento {
    public calcularRendimento(): number {
        return this.getValorAplicado() * 0.008 * this.getTempoMeses();
    }
}

class Acoes extends Investimento {
    private taxaVariacao: number;

    constructor(valorAplicado: number, tempoMeses: number, taxaVariacao: number) {
        super(valorAplicado, tempoMeses);
        this.taxaVariacao = taxaVariacao;
    }

    public calcularRendimento(): number {
        return this.getValorAplicado() * (this.taxaVariacao / 100);
    }
}

let continuar: number = 1;

while (continuar == 1) {
    let tipo: number = Number(prompt("1 - Renda Fixa\n2 - Ações"));

    let valor: number = Number(prompt("Valor aplicado: "));
    let meses: number = Number(prompt("Tempo em meses: "));

    let investimento: Investimento;

    if (tipo == 1) {
        investimento = new RendaFixa(valor, meses);
    } else {
        let taxa: number = Number(prompt("Taxa de variação (%): "));
        investimento = new Acoes(valor, meses, taxa);
    }

    let rendimento: number = investimento.calcularRendimento();
    let saldoFinal: number = valor + rendimento;

    console.log(`Rendimento: R$ ${rendimento.toFixed(2)}`);
    console.log(`Saldo final projetado: R$ ${saldoFinal.toFixed(2)}`);
    console.log("--------------------");

    continuar = Number(prompt("Deseja fazer outra simulação? 1 - Sim / 2 - Não"));
}