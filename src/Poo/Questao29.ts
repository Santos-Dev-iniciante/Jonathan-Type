abstract class Obra {
    private titulo: string;
    private autor: string;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    abstract calcularPenalidade(diasAtraso: number): number;
}

class LivroFisico extends Obra {
    calcularPenalidade(diasAtraso: number): number {
        return diasAtraso * 2.50;
    }
}

class ArtigoDigital extends Obra {
    calcularPenalidade(diasAtraso: number): number {
        console.log("Advertência virtual registrada para o artigo: " + this.getTitulo());
        return 0;
    }
}

let obras: Obra[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let titulo: string = String(prompt("Digite o título da obra:"));
    let autor: string = String(prompt("Digite o autor:"));
    let tipo: number = Number(prompt("Digite 1 para Livro Físico ou 2 para Artigo Digital:"));
    let diasAtraso: number = Number(prompt("Digite a quantidade de dias de atraso:"));

    if (tipo == 1) {
        obras.push(
            new LivroFisico(titulo, autor)
        );
    } else if (tipo == 2) {
        obras.push(
            new ArtigoDigital(titulo, autor)
        );
    }

    continuar = Number(prompt("Deseja cadastrar outra obra? 1-Sim / 2-Não"));
}

let totalMultas: number = 0;

console.log("=== RELATÓRIO DE MULTAS ===");

for (let obra of obras) {
    let diasAtraso: number = Number(prompt("Digite os dias de atraso da obra " + obra.getTitulo() + ":"));
    let multa: number = obra.calcularPenalidade(diasAtraso);

    totalMultas += multa;

    if (multa > 0) {
        console.log("Obra: " + obra.getTitulo());
        console.log("Multa: R$ " + multa.toFixed(2));
    }
}

console.log("Total de multas a recolher: R$ " + totalMultas.toFixed(2));