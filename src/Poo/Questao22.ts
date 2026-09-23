abstract class Veiculo {
    private placa: string;
    private quilometragem: number;

    constructor(placa: string, quilometragem: number) {
        this.placa = placa;
        this.quilometragem = quilometragem;
    }

    public getPlaca(): string {
        return this.placa;
    }

    public setPlaca(placa: string): void {
        this.placa = placa;
    }

    public getQuilometragem(): number {
        return this.quilometragem;
    }

    public setQuilometragem(quilometragem: number): void {
        this.quilometragem = quilometragem;
    }

    abstract precisaRevisao(): boolean;
}

class Onibus extends Veiculo {
    precisaRevisao(): boolean {
        return this.getQuilometragem() % 10000 == 0;
    }
}

class Ambulancia extends Veiculo {
    precisaRevisao(): boolean {
        return this.getQuilometragem() % 5000 == 0;
    }
}

let frota: Veiculo[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let placa: string = String(prompt("Digite a placa do veículo:"));
    let quilometragem: number = Number(prompt("Digite a quilometragem atual:"));
    let tipo: number = Number(prompt("Digite 1 para Ônibus ou 2 para Ambulância:"));

    if (tipo == 1) {
        frota.push(new Onibus(placa, quilometragem));
    } else if (tipo == 2) {
        frota.push(new Ambulancia(placa, quilometragem));
    }

    continuar = Number(prompt("Deseja cadastrar outro veículo? 1-Sim / 2-Não"));
}

let placaBusca: string = String(prompt("Digite a placa do veículo para verificar:"));
let quilometragemAtual: number = Number(prompt("Digite a quilometragem atual do veículo:"));

for (let veiculo of frota) {
    if (veiculo.getPlaca() == placaBusca) {
        veiculo.setQuilometragem(quilometragemAtual);

        if (veiculo.precisaRevisao()) {
            console.log("O veículo precisa ser retido para manutenção imediata.");
        } else {
            console.log("O veículo não precisa de manutenção imediata.");
        }
    }
}