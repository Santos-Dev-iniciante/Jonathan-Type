abstract class Projeto {
    private titulo: string;
    private coordenador: string;
    private nota: number;

    constructor(titulo: string, coordenador: string, nota: number) {
        this.titulo = titulo;
        this.coordenador = coordenador;
        this.nota = 0;
        this.setNota(nota);
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getCoordenador(): string {
        return this.coordenador;
    }

    public setCoordenador(coordenador: string): void {
        this.coordenador = coordenador;
    }

    public getNota(): number {
        return this.nota;
    }

    public setNota(nota: number): void {
        if (nota >= 0 && nota <= 10) {
            this.nota = nota;
        } else {
            console.log("Nota inválida! Digite uma nota entre 0 e 10.");
        }
    }

    abstract exibirTipo(): void;
}

class ProjetoVerde extends Projeto {
    exibirTipo(): void {
        console.log("Tipo: Projeto Verde");
    }
}

class ProjetoCultural extends Projeto {
    exibirTipo(): void {
        console.log("Tipo: Projeto Cultural");
    }
}

let projetos: Projeto[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let titulo: string = String(prompt("Digite o título do projeto:"));
    let coordenador: string = String(prompt("Digite o coordenador:"));
    let tipo: number = Number(prompt("Digite 1 para Projeto Verde ou 2 para Projeto Cultural:"));
    let nota: number = Number(prompt("Digite a nota do projeto:"));

    if (tipo == 1) {
        projetos.push(new ProjetoVerde(titulo, coordenador, nota));
    } else if (tipo == 2) {
        projetos.push(new ProjetoCultural(titulo, coordenador, nota));
    }

    continuar = Number(prompt("Deseja cadastrar outro projeto? 1-Sim / 2-Não"));
}

let soma: number = 0;

for (let projeto of projetos) {
    soma += projeto.getNota();
}

let media: number = soma / projetos.length;

console.log("=== MÉDIA DA COMPETIÇÃO ===");
console.log("Média: " + media.toFixed(2));

console.log("=== PROJETOS ACIMA DA MÉDIA ===");

for (let i: number = projetos.length - 1; i >= 0; i--) {
    if (projetos[i].getNota() > media) {
        projetos[i].exibirTipo();
        console.log("Título: " + projetos[i].getTitulo());
        console.log("Coordenador: " + projetos[i].getCoordenador());
        console.log("Nota: " + projetos[i].getNota());
        console.log("----------------------");
    }
}