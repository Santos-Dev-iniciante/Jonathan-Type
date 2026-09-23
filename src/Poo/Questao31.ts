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
            console.log("Erro: a nota deve estar entre 0 e 10.");
        }
    }

    abstract descricaoCategoria(): string;
}

class ProjetoVerde extends Projeto {
    descricaoCategoria(): string {
        return "Projeto Verde - Plantio urbano";
    }
}

class ProjetoCultural extends Projeto {
    descricaoCategoria(): string {
        return "Projeto Cultural - Conscientização";
    }
}

let projetos: Projeto[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let titulo: string = String(prompt("Digite o título do projeto:"));
    let coordenador: string = String(prompt("Digite o coordenador:"));
    let nota: number = Number(prompt("Digite a nota do projeto:"));
    
    while (nota < 0 || nota > 10 || isNaN(nota)) {
        nota = Number(prompt("Nota inválida! Digite uma nota entre 0 e 10:"));
    }

    let tipo: number = Number(prompt("Digite 1 para Projeto Verde ou 2 para Projeto Cultural:"));

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

console.log("=== MÉDIA DOS PROJETOS ===");
console.log("Média: " + media.toFixed(2));

console.log("=== PROJETOS ACIMA DA MÉDIA ===");

for (let projeto of projetos) {
    if (projeto.getNota() > media) {
        console.log("Título: " + projeto.getTitulo());
        console.log("Coordenador: " + projeto.getCoordenador());
        console.log("Nota: " + projeto.getNota());
        console.log("Categoria: " + projeto.descricaoCategoria());
        console.log("----------------------");
    }
}