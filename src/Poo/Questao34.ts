abstract class Veiculo {
    private placa: string;
    private horaEntrada: string;

    constructor(placa: string, horaEntrada: string) {
        this.placa = placa;
        this.horaEntrada = horaEntrada;
    }

    public getPlaca(): string {
        return this.placa;
    }

    public getHoraEntrada(): string {
        return this.horaEntrada;
    }

    abstract calcularValor(horasPermanencia: number): number;
}

class Carro extends Veiculo {
    calcularValor(horasPermanencia: number): number {
        return horasPermanencia * 5;
    }
}

class Moto extends Veiculo {
    calcularValor(horasPermanencia: number): number {
        return horasPermanencia * 3;
    }
}

let veiculos: Veiculo[] = [];
let horas: number[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let placa: string = String(prompt("Digite a placa do veículo:"));
    let horaEntrada: string = String(prompt("Digite a hora de entrada:"));
    let tipo: number = Number(prompt("Digite 1 para Carro ou 2 para Moto:"));
    let horasPermanencia: number = Number(prompt("Digite quantas horas o veículo permaneceu:"));

    if (tipo == 1) {
        veiculos.push(new Carro(placa, horaEntrada));
    } else if (tipo == 2) {
        veiculos.push(new Moto(placa, horaEntrada));
    }

    horas.push(horasPermanencia);

    continuar = Number(prompt("Deseja cadastrar outro veículo? 1-Sim / 2-Não"));
}

let faturamento: number = 0;

console.log("=== RELATÓRIO DO ESTACIONAMENTO ===");

for (let i: number = 0; i < veiculos.length; i++) {
    let valor: number = veiculos[i].calcularValor(horas[i]);

    console.log("Placa: " + veiculos[i].getPlaca());
    console.log("Hora de entrada: " + veiculos[i].getHoraEntrada());
    console.log("Valor: R$ " + valor.toFixed(2));
    console.log("----------------------");

    faturamento += valor;
}

console.log("Faturamento total: R$ " + faturamento.toFixed(2));