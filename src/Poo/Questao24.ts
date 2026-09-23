abstract class Tarefa {
    private descricao: string;
    private concluida: boolean;

    constructor(descricao: string) {
        this.descricao = descricao;
        this.concluida = false;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getConcluida(): boolean {
        return this.concluida;
    }

    public setConcluida(concluida: boolean): void {
        this.concluida = concluida;
    }

    abstract exibirTarefa(): void;
}

class TarefaAcademica extends Tarefa {
    private disciplina: string;

    constructor(descricao: string, disciplina: string) {
        super(descricao);
        this.disciplina = disciplina;
    }

    public getDisciplina(): string {
        return this.disciplina;
    }

    public setDisciplina(disciplina: string): void {
        this.disciplina = disciplina;
    }

    exibirTarefa(): void {
        console.log("Tarefa: " + this.getDescricao());
        console.log("Disciplina: " + this.getDisciplina());
        console.log("Concluída: " + this.getConcluida());
    }
}

class TarefaPessoal extends Tarefa {
    private prioridade: number;

    constructor(descricao: string, prioridade: number) {
        super(descricao);
        this.prioridade = prioridade;
    }

    public getPrioridade(): number {
        return this.prioridade;
    }

    public setPrioridade(prioridade: number): void {
        this.prioridade = prioridade;
    }

    exibirTarefa(): void {
        console.log("Tarefa: " + this.getDescricao());
        console.log("Prioridade: " + this.getPrioridade());
        console.log("Concluída: " + this.getConcluida());
    }
}

let tarefas: Tarefa[] = [];
let opcao: number = 0;

while (opcao != 4) {
    console.log("=== MENU ===");
    console.log("1 - Adicionar tarefa");
    console.log("2 - Marcar tarefa como concluída");
    console.log("3 - Listar tarefas acadêmicas pendentes");
    console.log("4 - Sair");

    opcao = Number(prompt("Digite uma opção:"));

    if (opcao == 1) {
        let tipo: number = Number(prompt("Digite 1 para Acadêmica ou 2 para Pessoal:"));
        let descricao: string = String(prompt("Digite a descrição da tarefa:"));

        if (tipo == 1) {
            let disciplina: string = String(prompt("Digite a disciplina:"));

            tarefas.push(
                new TarefaAcademica(descricao, disciplina)
            );
        } else if (tipo == 2) {
            let prioridade: number = Number(prompt("Digite a prioridade:"));

            tarefas.push(
                new TarefaPessoal(descricao, prioridade)
            );
        }
    }

    if (opcao == 2) {
        let numero: number = Number(prompt("Digite o número da tarefa:"));

        if (numero >= 1 && numero <= tarefas.length) {
            tarefas[numero - 1].setConcluida(true);
            console.log("Tarefa marcada como concluída!");
        }
    }

    if (opcao == 3) {
        console.log("=== TAREFAS ACADÊMICAS PENDENTES ===");

        for (let tarefa of tarefas) {
            if (tarefa instanceof TarefaAcademica && !tarefa.getConcluida()) {
                tarefa.exibirTarefa();
                console.log("----------------------");
            }
        }
    }
}