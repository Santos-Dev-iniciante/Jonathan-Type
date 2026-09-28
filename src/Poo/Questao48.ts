class ArCondicionado {
    private sala: string;
    private potenciaBTUs: number;
    private temperaturaAtual: number;

    constructor(sala: string, potenciaBTUs: number, temperaturaAtual: number) {
        this.sala = sala;
        this.potenciaBTUs = potenciaBTUs;
        this.temperaturaAtual = 16;
        this.setTemperaturaAtual(temperaturaAtual);
    }

    public getSala(): string {
        return this.sala;
    }

    public setSala(sala: string): void {
        this.sala = sala;
    }

    public getPotenciaBTUs(): number {
        return this.potenciaBTUs;
    }

    public setPotenciaBTUs(potenciaBTUs: number): void {
        this.potenciaBTUs = potenciaBTUs;
    }

    public getTemperaturaAtual(): number {
        return this.temperaturaAtual;
    }

    public setTemperaturaAtual(temperatura: number): void {
        if (temperatura >= 16 && temperatura <= 30) {
            this.temperaturaAtual = temperatura;
        } else {
            console.log("Erro: a temperatura deve estar entre 16°C e 30°C.");
        }
    }

    public exibirStatus(): void {
        console.log(`Sala: ${this.sala}`);
        console.log(`Potência: ${this.potenciaBTUs} BTUs`);
        console.log(`Temperatura: ${this.temperaturaAtual}°C`);
    }
}

let aparelhos: ArCondicionado[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let sala: string = String(prompt("Sala: "));
    let potencia: number = Number(prompt("Potência em BTUs: "));
    let temperatura: number = Number(prompt("Temperatura atual: "));

    aparelhos.push(new ArCondicionado(sala, potencia, temperatura));

    continuar = Number(prompt("Deseja cadastrar outro aparelho? 1 - Sim / 2 - Não"));
}

continuar = 1;

while (continuar == 1) {
    let salaBusca: string = String(prompt("Digite a sala para ajustar a temperatura: "));
    let encontrado: boolean = false;

    for (let aparelho of aparelhos) {
        if (aparelho.getSala() == salaBusca) {
            let novaTemperatura: number = Number(prompt("Nova temperatura: "));
            aparelho.setTemperaturaAtual(novaTemperatura);
            encontrado = true;
        }
    }

    if (!encontrado) {
        console.log("Sala não encontrada.");
    }

    continuar = Number(prompt("Deseja ajustar outra sala? 1 - Sim / 2 - Não"));
}

console.log("RELATÓRIO FINAL");

for (let aparelho of aparelhos) {
    aparelho.exibirStatus();
    console.log("--------------------");
}