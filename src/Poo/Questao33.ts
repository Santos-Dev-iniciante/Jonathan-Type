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

    public getAutor(): string {
        return this.autor;
    }

    abstract registrarAtraso(diasDeAtraso: number): number | string;
}

class LivroFisico extends Obra {
    registrarAtraso(diasDeAtraso: number): number {
        return diasDeAtraso * 2.50;
    }
}

class ArtigoDigital extends Obra {
    registrarAtraso(diasDeAtraso: number): string {
        return "Advertência virtual registrada para o usuário.";
    }
}

let obras: Obra[] = [];
let atrasos: number[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let titulo: string = String(prompt("Digite o título da obra:"));
    let autor: string = String(prompt("Digite o autor:"));
    let tipo: number = Number(prompt("Digite 1 para Livro Físico ou 2 para Artigo Digital:"));
    let dias: number = Number(prompt("Digite os dias de atraso:"));

    if (tipo == 1) {
        obras.push(new LivroFisico(titulo, autor));
    } else if (tipo == 2) {
        obras.push(new ArtigoDigital(titulo, autor));
    }

    atrasos.push(dias);

    continuar = Number(prompt("Deseja cadastrar outra devolução? 1-Sim / 2-Não"));
}

let totalMultas: number = 0;

console.log("=== RELATÓRIO DE DEVOLUÇÕES ===");

for (let i: number = 0; i < obras.length; i++) {
    let resultado: number | string = obras[i].registrarAtraso(atrasos[i]);

    console.log("Título: " + obras[i].getTitulo());
    console.log("Autor: " + obras[i].getAutor());

    if (typeof resultado == "number") {
        console.log("Multa: R$ " + resultado.toFixed(2));
        totalMultas += resultado;
    } else {
        console.log(resultado);
    }

    console.log("----------------------");
}

console.log("Total de multas a recolher: R$ " + totalMultas.toFixed(2));