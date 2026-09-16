class Funcionario {
    private nome: string;
    private matricula: number;
    private salarioBase: number;

    constructor(nome: string, matricula: number, salarioBase: number) {
        this.nome = nome;
        this.matricula = matricula;
        this.salarioBase = salarioBase;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getMatricula(): number {
        return this.matricula;
    }

    public setMatricula(matricula: number): void {
        this.matricula = matricula;
    }

    public getSalarioBase(): number {
        return this.salarioBase;
    }

    public setSalarioBase(salarioBase: number): void {
        this.salarioBase = salarioBase;
    }

    public calcularSalario(): number {
        return this.salarioBase;
    }
}


class Professor extends Funcionario {
    private regime: string;

    constructor(nome: string, matricula: number, salarioBase: number, regime: string) {
        super(nome, matricula, salarioBase);
        this.regime = regime;
    }

    public getRegime(): string {
        return this.regime;
    }

    public setRegime(regime: string): void {
        this.regime = regime;
    }

    public calcularSalario(): number {
        if (this.regime.toUpperCase() == "DE") {
            return this.getSalarioBase() * 1.20;
        }

        return this.getSalarioBase();
    }
}


class TecnicoAdministrativo extends Funcionario {
    private auxilioAlimentacao: number = 1000;

    public calcularSalario(): number {
        return this.getSalarioBase() + this.auxilioAlimentacao;
    }
}


class Diretor extends Funcionario {
    private departamento: string;
    private gratificacao: number;

    constructor(nome: string, matricula: number, salarioBase: number, departamento: string, gratificacao: number) {
        super(nome, matricula, salarioBase);
        this.departamento = departamento;
        this.gratificacao = gratificacao;
    }

    public getDepartamento(): string {
        return this.departamento;
    }

    public setDepartamento(departamento: string): void {
        this.departamento = departamento;
    }

    public getGratificacao(): number {
        return this.gratificacao;
    }

    public setGratificacao(gratificacao: number): void {
        this.gratificacao = gratificacao;
    }

    public calcularSalario(): number {
        return this.getSalarioBase() + this.gratificacao;
    }
}


let totalProfessores: number = 0;
let totalTecnicos: number = 0;
let totalDiretores: number = 0;

let continuar: number = 0;

while (continuar != 4) {

    continuar = Number(prompt(
        "FOLHA DE PAGAMENTO IFS\n\n" +
        "1 - Professor\n" +
        "2 - Técnico Administrativo\n" +
        "3 - Diretor\n" +
        "4 - Encerrar\n\n" +
        "Escolha uma opção:"
    ));

    if (continuar == 1) {

        let nome: string = String(prompt("Nome:"));
        let matricula: number = Number(prompt("Matrícula:"));
        let salarioBase: number = Number(prompt("Salário base:"));
        let regime: string = String(prompt("Regime de trabalho:"));

        let professor = new Professor(nome, matricula, salarioBase, regime);

        let salario: number = professor.calcularSalario();

        totalProfessores = totalProfessores + salario;

        alert("Salário do professor: R$ " + salario.toFixed(2));

    } else if (continuar == 2) {

        let nome: string = String(prompt("Nome:"));
        let matricula: number = Number(prompt("Matrícula:"));
        let salarioBase: number = Number(prompt("Salário base:"));

        let tecnico = new TecnicoAdministrativo(nome, matricula, salarioBase);

        let salario: number = tecnico.calcularSalario();

        totalTecnicos = totalTecnicos + salario;

        alert("Salário do técnico: R$ " + salario.toFixed(2));

    } else if (continuar == 3) {

        let nome: string = String(prompt("Nome:"));
        let matricula: number = Number(prompt("Matrícula:"));
        let salarioBase: number = Number(prompt("Salário base:"));
        let departamento: string = String(prompt("Departamento:"));
        let gratificacao: number = Number(prompt("Gratificação de função:"));

        let diretor = new Diretor(
            nome,
            matricula,
            salarioBase,
            departamento,
            gratificacao
        );

        let salario: number = diretor.calcularSalario();

        totalDiretores = totalDiretores + salario;

        alert("Salário do diretor: R$ " + salario.toFixed(2));

    } else if (continuar != 4) {

        alert("Opção inválida!");
    }
}


let totalGeral: number = totalProfessores + totalTecnicos + totalDiretores;

alert(
    "RELATÓRIO FINAL\n\n" +
    "Custo com Professores: R$ " + totalProfessores.toFixed(2) + "\n" +
    "Custo com Técnicos Administrativos: R$ " + totalTecnicos.toFixed(2) + "\n" +
    "Custo com Diretores: R$ " + totalDiretores.toFixed(2) + "\n\n" +
    "CUSTO TOTAL GERAL: R$ " + totalGeral.toFixed(2)
);