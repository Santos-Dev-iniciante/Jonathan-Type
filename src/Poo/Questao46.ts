class Imovel {
    private codigo: number;
    private valorAluguel: number;
    private diasAtraso: number;

    constructor(codigo: number, valorAluguel: number, diasAtraso: number) {
        this.codigo = codigo;
        this.valorAluguel = valorAluguel;
        this.diasAtraso = diasAtraso;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public getValorAluguel(): number {
        return this.valorAluguel;
    }

    public getDiasAtraso(): number {
        return this.diasAtraso;
    }

    public calcularValorComMulta(): number {
        if (this.diasAtraso > 0) {
            return this.valorAluguel + (this.valorAluguel * 0.02) + (this.diasAtraso * 5);
        }

        return this.valorAluguel;
    }
}

let codigo: number = 1;

while (codigo != 0) {
    codigo = Number(prompt("Digite o código do imóvel (0 para sair): "));

    if (codigo == 0) {
        break;
    }

    let valorAluguel: number = Number(prompt("Digite o valor do aluguel: "));
    let diasAtraso: number = Number(prompt("Digite os dias de atraso: "));

    let imovel = new Imovel(codigo, valorAluguel, diasAtraso);

    console.log(`Código: ${imovel.getCodigo()}`);
    console.log(`Valor atualizado: R$ ${imovel.calcularValorComMulta().toFixed(2)}`);
    console.log("--------------------");
}