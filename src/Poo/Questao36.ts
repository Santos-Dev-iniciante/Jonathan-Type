class Curso {
    private titulo: string;
    private cargaHoraria: number;

    constructor(titulo: string, cargaHoraria: number) {
        this.titulo = titulo;
        this.cargaHoraria = cargaHoraria;
    }

    public emitirCertificado(): void {
        console.log(`Certificado do curso ${this.titulo} liberado.`);
    }
}

class CursoLivre extends Curso {
    constructor(titulo: string, cargaHoraria: number) {
        super(titulo, cargaHoraria);
    }

    public emitirCertificado(): void {
        console.log("Certificado liberado automaticamente.");
    }
}

class CursoTecnico extends Curso {
    private notaProjeto: number;

    constructor(titulo: string, cargaHoraria: number, notaProjeto: number) {
        super(titulo, cargaHoraria);
        this.notaProjeto = notaProjeto;
    }

    public emitirCertificado(): void {
        if (this.notaProjeto >= 7) {
            console.log("Certificado liberado.");
        } else {
            console.log("Certificado pendente.");
        }
    }
}

let cursos: Curso[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let titulo: string = String(prompt("Título do curso: "));
    let cargaHoraria: number = Number(prompt("Carga horária: "));
    let tipo: number = Number(prompt("1 - Curso Livre\n2 - Curso Técnico"));

    if (tipo == 1) {
        cursos.push(new CursoLivre(titulo, cargaHoraria));
    } else {
        let notaProjeto: number = Number(prompt("Nota do projeto final: "));
        cursos.push(new CursoTecnico(titulo, cargaHoraria, notaProjeto));
    }

    continuar = Number(prompt("Deseja cadastrar outro curso? 1 - Sim / 2 - Não"));
}

for (let curso of cursos) {
    curso.emitirCertificado();
}