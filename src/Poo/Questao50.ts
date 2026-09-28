class RegistroPonto {
    private matricula: number;
    private nomeServidor: string;
    private horaEntrada: number;
    private horaSaida: number;

    constructor(matricula: number, nomeServidor: string, horaEntrada: number, horaSaida: number) {
        this.matricula = matricula;
        this.nomeServidor = nomeServidor;
        this.horaEntrada = 0;
        this.horaSaida = 0;

        this.setHoraEntrada(horaEntrada);
        this.setHoraSaida(horaSaida);
    }

    public getMatricula(): number {
        return this.matricula;
    }

    public setMatricula(matricula: number): void {
        this.matricula = matricula;
    }

    public getNomeServidor(): string {
        return this.nomeServidor;
    }

    public setNomeServidor(nomeServidor: string): void {
        this.nomeServidor = nomeServidor;
    }

    public getHoraEntrada(): number {
        return this.horaEntrada;
    }

    public setHoraEntrada(hora: number): void {
        if (hora >= 0 && hora <= 23) {
            this.horaEntrada = hora;
        } else {
            console.log("Hora de entrada inválida.");
        }
    }

    public getHoraSaida(): number {
        return this.horaSaida;
    }

    public setHoraSaida(hora: number): void {
        if (hora >= 0 && hora <= 23 && hora > this.horaEntrada) {
            this.horaSaida = hora;
        } else {
            console.log("Hora de saída inválida.");
        }
    }

    public calcularHorasTrabalhadas(): number {
        return this.horaSaida - this.horaEntrada;
    }
}

let registros: RegistroPonto[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let matricula: number = Number(prompt("Matrícula: "));
    let nome: string = String(prompt("Nome do servidor: "));
    let entrada: number = Number(prompt("Hora de entrada: "));
    let saida: number = Number(prompt("Hora de saída: "));

    registros.push(new RegistroPonto(matricula, nome, entrada, saida));

    continuar = Number(prompt("Deseja cadastrar outro servidor? 1 - Sim / 2 - Não"));
}

let totalHoras: number = 0;

console.log("RELATÓRIO FINAL");

for (let registro of registros) {
    let horas: number = registro.calcularHorasTrabalhadas();

    console.log(`Servidor: ${registro.getNomeServidor()}`);
    console.log(`Horas trabalhadas: ${horas}`);
    console.log("--------------------");

    totalHoras += horas;
}

console.log(`Total de horas trabalhadas pela equipe: ${totalHoras}`);