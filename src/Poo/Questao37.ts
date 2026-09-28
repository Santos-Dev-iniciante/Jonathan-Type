class Consumidor {
    private numeroConta: number;
    private consumo: number;

    constructor(numeroConta: number, consumo: number) {
        this.numeroConta = numeroConta;
        this.consumo = consumo;
    }

    public calcularValor(): number {
        return 0;
    }

    public exibirFatura(): void {
        console.log(`Conta: ${this.numeroConta}`);
        console.log(`Consumo: ${this.consumo} kWh`);
        console.log(`Valor: R$ ${this.calcularValor().toFixed(2)}`);
    }

    public getConsumo(): number {
        return this.consumo;
    }
}

class ConsumidorResidencial extends Consumidor {
    public calcularValor(): number {
        return this.getConsumo() * 0.75;
    }
}

class ConsumidorComercial extends Consumidor {
    public calcularValor(): number {
        if (this.getConsumo() <= 1000) {
            return this.getConsumo() * 0.60;
        } else {
            return (1000 * 0.60) + ((this.getConsumo() - 1000) * 0.50);
        }
    }
}

let consumidores: Consumidor[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let numeroConta: number = Number(prompt("Número da conta: "));
    let consumo: number = Number(prompt("Consumo em kWh: "));
    let tipo: number = Number(prompt("1 - Residencial\n2 - Comercial"));

    if (tipo == 1) {
        consumidores.push(new ConsumidorResidencial(numeroConta, consumo));
    } else {
        consumidores.push(new ConsumidorComercial(numeroConta, consumo));
    }

    continuar = Number(prompt("Deseja cadastrar outro consumidor? 1 - Sim / 2 - Não"));
}

let totalConsumo: number = 0;

for (let consumidor of consumidores) {
    consumidor.exibirFatura();
    console.log("--------------------");
    totalConsumo += consumidor.getConsumo();
}

let media: number = totalConsumo / consumidores.length;

console.log(`Média de consumo: ${media.toFixed(2)} kWh`);