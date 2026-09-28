class Atleta {
    private nome: string;
    private idade: number;
    private tempoMinutos: number;

    constructor(nome: string, idade: number, tempoMinutos: number) {
        this.nome = nome;
        this.idade = idade;
        this.tempoMinutos = tempoMinutos;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public getTempoMinutos(): number {
        return this.tempoMinutos;
    }

    public setTempoMinutos(tempoMinutos: number): void {
        this.tempoMinutos = tempoMinutos;
    }
}

let atletas: Atleta[] = [];
let nome: string = "";

while (nome.toUpperCase() != "SAIR") {
    nome = String(prompt("Nome do atleta ou SAIR para encerrar: "));

    if (nome.toUpperCase() == "SAIR") {
        break;
    }

    let idade: number = Number(prompt("Idade: "));
    let tempoMinutos: number = Number(prompt("Tempo em minutos: "));

    atletas.push(new Atleta(nome, idade, tempoMinutos));
}

if (atletas.length > 0) {
    let campeao: Atleta = atletas[0];

    for (let atleta of atletas) {
        if (atleta.getTempoMinutos() < campeao.getTempoMinutos()) {
            campeao = atleta;
        }
    }

    console.log("CAMPEÃO DA PROVA");
    console.log(`Nome: ${campeao.getNome()}`);
    console.log(`Idade: ${campeao.getIdade()}`);
    console.log(`Tempo: ${campeao.getTempoMinutos()} minutos`);
}