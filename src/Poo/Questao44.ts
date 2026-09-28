class Chamado {
    private id: number;
    private descricaoEquipamento: string;
    private laboratorio: string;
    private concluido: boolean;

    constructor(id: number, descricaoEquipamento: string, laboratorio: string) {
        this.id = id;
        this.descricaoEquipamento = descricaoEquipamento;
        this.laboratorio = laboratorio;
        this.concluido = false;
    }

    public getId(): number {
        return this.id;
    }

    public getDescricaoEquipamento(): string {
        return this.descricaoEquipamento;
    }

    public getLaboratorio(): string {
        return this.laboratorio;
    }

    public getConcluido(): boolean {
        return this.concluido;
    }

    public finalizarChamado(): void {
        this.concluido = true;
    }
}

let chamados: Chamado[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let id: number = Number(prompt("ID do chamado: "));
    let descricao: string = String(prompt("Descrição do equipamento: "));
    let laboratorio: string = String(prompt("Laboratório: "));

    chamados.push(new Chamado(id, descricao, laboratorio));

    continuar = Number(prompt("Deseja cadastrar outro chamado? 1 - Sim / 2 - Não"));
}

continuar = 1;

while (continuar == 1) {
    let idResolvido: number = Number(prompt("Digite o ID do chamado resolvido: "));
    let encontrado: boolean = false;

    for (let chamado of chamados) {
        if (chamado.getId() == idResolvido) {
            chamado.finalizarChamado();
            encontrado = true;
            console.log("Chamado finalizado.");
        }
    }

    if (!encontrado) {
        console.log("Chamado não encontrado.");
    }

    continuar = Number(prompt("Deseja finalizar outro chamado? 1 - Sim / 2 - Não"));
}

let atendidos: number = 0;
let pendentes: number = 0;

for (let chamado of chamados) {
    if (chamado.getConcluido()) {
        atendidos++;
    } else {
        pendentes++;
    }
}

console.log("RELATÓRIO FINAL");
console.log(`Chamados atendidos: ${atendidos}`);
console.log(`Chamados pendentes: ${pendentes}`);