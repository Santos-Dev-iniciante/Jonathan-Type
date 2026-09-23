abstract class Acomodacao {
    private numeroQuarto: number;
    private precoDiaria: number;
    private dias: number;

    constructor(numeroQuarto: number, precoDiaria: number, dias: number) {
        this.numeroQuarto = numeroQuarto;
        this.precoDiaria = precoDiaria;
        this.dias = dias;
    }

    public getNumeroQuarto(): number {
        return this.numeroQuarto;
    }

    public setNumeroQuarto(numeroQuarto: number): void {
        this.numeroQuarto = numeroQuarto;
    }

    public getPrecoDiaria(): number {
        return this.precoDiaria;
    }

    public setPrecoDiaria(precoDiaria: number): void {
        this.precoDiaria = precoDiaria;
    }

    public getDias(): number {
        return this.dias;
    }

    public setDias(dias: number): void {
        this.dias = dias;
    }

    abstract calcularTotal(): number;
}

class AcomodacaoBasica extends Acomodacao {
    calcularTotal(): number {
        return this.getPrecoDiaria() * this.getDias();
    }
}

class SuiteMaster extends Acomodacao {
    private adicionalHidro: number;

    constructor(numeroQuarto: number, precoDiaria: number, dias: number, adicionalHidro: number) {
        super(numeroQuarto, precoDiaria, dias);
        this.adicionalHidro = adicionalHidro;
    }

    public getAdicionalHidro(): number {
        return this.adicionalHidro;
    }

    public setAdicionalHidro(adicionalHidro: number): void {
        this.adicionalHidro = adicionalHidro;
    }

    calcularTotal(): number {
        return (this.getPrecoDiaria() + this.getAdicionalHidro()) * this.getDias();
    }
}

let checkouts: Acomodacao[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let tipo: number = Number(prompt("Digite 1 para Acomodação Básica ou 2 para Suíte Master:"));
    let quarto: number = Number(prompt("Digite o número do quarto:"));
    let diaria: number = Number(prompt("Digite o preço da diária:"));
    let dias: number = Number(prompt("Digite quantos dias o hóspede ficou:"));

    if (tipo == 1) {
        checkouts.push(
            new AcomodacaoBasica(quarto, diaria, dias)
        );
    } else if (tipo == 2) {
        let adicional: number = Number(prompt("Digite o valor adicional da hidromassagem:"));

        checkouts.push(
            new SuiteMaster(quarto, diaria, dias, adicional)
        );
    }

    continuar = Number(prompt("Deseja cadastrar outro quarto? 1-Sim / 2-Não"));
}

console.log("=== QUARTOS COM FATURAMENTO ACIMA DE R$ 1.000,00 ===");

for (let acomodacao of checkouts) {
    if (acomodacao.calcularTotal() > 1000) {
        console.log("Quarto: " + acomodacao.getNumeroQuarto());
        console.log("Valor total: R$ " + acomodacao.calcularTotal().toFixed(2));
        console.log("----------------------");
    }
}