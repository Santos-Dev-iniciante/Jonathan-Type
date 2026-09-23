abstract class Sensor {
    private codigo: number;
    private leitura: number;

    constructor(codigo: number, leitura: number) {
        this.codigo = codigo;
        this.leitura = leitura;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    public getLeitura(): number {
        return this.leitura;
    }

    public setLeitura(leitura: number): void {
        this.leitura = leitura;
    }

    abstract exibirLeitura(): void;
    abstract alerta(): boolean;
}

class SensorTemperatura extends Sensor {
    exibirLeitura(): void {
        console.log("Sensor " + this.getCodigo() + ": " + this.getLeitura() + "°C");
    }

    alerta(): boolean {
        return this.getLeitura() > 40;
    }
}

class SensorPressao extends Sensor {
    exibirLeitura(): void {
        console.log("Sensor " + this.getCodigo() + ": " + this.getLeitura() + " atm");
    }

    alerta(): boolean {
        return this.getLeitura() > 5;
    }
}

let sensores: Sensor[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let codigo: number = Number(prompt("Digite o código do sensor:"));
    let tipo: number = Number(prompt("Digite 1 para Temperatura ou 2 para Pressão:"));
    let leitura: number = Number(prompt("Digite a leitura do sensor:"));

    if (tipo == 1) {
        sensores.push(new SensorTemperatura(codigo, leitura));
    } else if (tipo == 2) {
        sensores.push(new SensorPressao(codigo, leitura));
    }

    continuar = Number(prompt("Deseja cadastrar outro sensor? 1-Sim / 2-Não"));
}

console.log("=== RELATÓRIO DE ALERTAS ===");

for (let sensor of sensores) {
    if (sensor.alerta()) {
        sensor.exibirLeitura();
        console.log("ALERTA: PERIGO!");
    }
}