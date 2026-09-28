class Paciente {
    private nome: string;
    private cartaoSUS: string;

    constructor(nome: string, cartaoSUS: string) {
        this.nome = nome;
        this.cartaoSUS = cartaoSUS;
    }

    public exibirFicha(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Cartão SUS: ${this.cartaoSUS}`);
    }
}

class PacienteComum extends Paciente {
    constructor(nome: string, cartaoSUS: string) {
        super(nome, cartaoSUS);
    }
}

class PacientePrioritario extends Paciente {
    private prioridade: string;

    constructor(nome: string, cartaoSUS: string, prioridade: string) {
        super(nome, cartaoSUS);
        this.prioridade = prioridade;
    }

    public exibirFicha(): void {
        super.exibirFicha();
        console.log(`*** PRIORIDADE: ${this.prioridade} ***`);
    }
}

let pacientes: Paciente[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let nome: string = String(prompt("Nome do paciente: "));
    let cartaoSUS: string = String(prompt("Cartão SUS: "));
    let tipo: number = Number(prompt("1 - Comum\n2 - Prioritário"));

    if (tipo == 1) {
        pacientes.push(new PacienteComum(nome, cartaoSUS));
    } else {
        let prioridade: string = String(prompt("Tipo de prioridade (Idoso/Gestante): "));
        pacientes.push(new PacientePrioritario(nome, cartaoSUS, prioridade));
    }

    continuar = Number(prompt("Deseja cadastrar outro? 1 - Sim / 2 - Não"));
}

let totalPrioritarios: number = 0;

for (let paciente of pacientes) {
    paciente.exibirFicha();
    console.log("--------------------");

    if (paciente instanceof PacientePrioritario) {
        totalPrioritarios++;
    }
}

console.log(`Total de pacientes prioritários: ${totalPrioritarios}`);