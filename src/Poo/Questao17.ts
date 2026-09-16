abstract class Usuario {
    private _id: number;
    private _nome: string;

    constructor(id: number, nome: string) {
        this._id = id;
        this._nome = nome;
    }

    public get id(): number {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    abstract identificar(): void;
}

class Aluno extends Usuario {
    private _curso: string;

    constructor(id: number, nome: string, curso: string) {
        super(id, nome);
        this._curso = curso;
    }

    public get curso(): string {
        return this._curso;
    }

    public identificar(): void {
        console.log("Aluno: " + this.nome + " - Curso: " + this._curso);
    }
}

class Servidor extends Usuario {
    private _departamento: string;

    constructor(id: number, nome: string, departamento: string) {
        super(id, nome);
        this._departamento = departamento;
    }

    public get departamento(): string {
        return this._departamento;
    }

    public identificar(): void {
        console.log("Servidor: " + this.nome + " - Departamento: " + this._departamento);
    }
}

let historico: Usuario[] = [];
let continuar: number = 1;

while (continuar == 1) {

    let tipo: number = Number(prompt("Digite o tipo: 1 - Aluno / 2 - Servidor"));

    let id: number = Number(prompt("Digite o ID:"));
    let nome: string = String(prompt("Digite o nome completo:"));

    let usuario: Usuario;

    if (tipo == 1) {

        let curso: string = String(prompt("Digite o curso:"));

        usuario = new Aluno(id, nome, curso);

    } else {

        let departamento: string = String(prompt("Digite o departamento:"));

        usuario = new Servidor(id, nome, departamento);
    }

    historico.push(usuario);

    console.log("Acesso registrado!");

    continuar = Number(prompt("Deseja cadastrar outro usuário? 1 - Sim / 2 - Encerrar"));
}

console.log("=== USUÁRIOS QUE ALMOÇARAM ===");

let totalAlunos: number = 0;
let totalServidores: number = 0;

for (let i = 0; i < historico.length; i++) {

    historico[i].identificar();

    if (historico[i] instanceof Aluno) {
        totalAlunos++;
    } else {
        totalServidores++;
    }
}

console.log("Total de acessos de alunos: " + totalAlunos);
console.log("Total de acessos de servidores: " + totalServidores);