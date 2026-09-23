abstract class Equipamento {
    private tombamento: number;
    private descricao: string;

    constructor(tombamento: number, descricao: string) {
        this.tombamento = tombamento;
        this.descricao = descricao;
    }

    public getTombamento(): number {
        return this.tombamento;
    }

    public setTombamento(tombamento: number): void {
        this.tombamento = tombamento;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    abstract autoInspecao(): void;
}

class Computador extends Equipamento {
    private memoriaRAM: number;

    constructor(tombamento: number, descricao: string, memoriaRAM: number) {
        super(tombamento, descricao);
        this.memoriaRAM = memoriaRAM;
    }

    public getMemoriaRAM(): number {
        return this.memoriaRAM;
    }

    public setMemoriaRAM(memoriaRAM: number): void {
        this.memoriaRAM = memoriaRAM;
    }

    autoInspecao(): void {
        console.log("=== FICHA TÉCNICA ===");
        console.log("Tipo: Computador");
        console.log("Tombamento: " + this.getTombamento());
        console.log("Descrição: " + this.getDescricao());
        console.log("Memória RAM: " + this.getMemoriaRAM() + " GB");
    }
}

class Roteador extends Equipamento {
    private portas: number;

    constructor(tombamento: number, descricao: string, portas: number) {
        super(tombamento, descricao);
        this.portas = portas;
    }

    public getPortas(): number {
        return this.portas;
    }

    public setPortas(portas: number): void {
        this.portas = portas;
    }

    autoInspecao(): void {
        console.log("=== FICHA TÉCNICA ===");
        console.log("Tipo: Roteador");
        console.log("Tombamento: " + this.getTombamento());
        console.log("Descrição: " + this.getDescricao());
        console.log("Portas disponíveis: " + this.getPortas());
    }
}

let equipamentos: Equipamento[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let tipo: number = Number(prompt("Digite 1 para Computador ou 2 para Roteador:"));

    while (tipo != 1 && tipo != 2) {
        tipo = Number(prompt("Tipo inválido! Digite 1 para Computador ou 2 para Roteador:"));
    }

    let tombamento: number = Number(prompt("Digite o número de tombamento:"));

    while (tombamento <= 0 || isNaN(tombamento)) {
        tombamento = Number(prompt("Tombamento inválido! Digite novamente:"));
    }

    let descricao: string = String(prompt("Digite a descrição:"));

    while (descricao == "" || descricao == "null") {
        descricao = String(prompt("Descrição inválida! Digite novamente:"));
    }

    if (tipo == 1) {
        let memoriaRAM: number = Number(prompt("Digite a quantidade de RAM em GB:"));

        while (memoriaRAM <= 0 || isNaN(memoriaRAM)) {
            memoriaRAM = Number(prompt("RAM inválida! Digite novamente:"));
        }

        equipamentos.push(
            new Computador(tombamento, descricao, memoriaRAM)
        );
    } else {
        let portas: number = Number(prompt("Digite a quantidade de portas:"));

        while (portas <= 0 || isNaN(portas)) {
            portas = Number(prompt("Quantidade de portas inválida! Digite novamente:"));
        }

        equipamentos.push(
            new Roteador(tombamento, descricao, portas)
        );
    }

    continuar = Number(prompt("Deseja cadastrar outro equipamento? 1-Sim / 2-Não"));
}

console.log("=== INVENTÁRIO DO LABORATÓRIO ===");

for (let equipamento of equipamentos) {
    equipamento.autoInspecao();
    console.log("----------------------");
}