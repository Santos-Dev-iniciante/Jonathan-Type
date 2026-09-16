class Livro {
    private titulo: string;
    private autor: string;
    private anoPublicacao: number;
    private disponibilidade: boolean;

    constructor(titulo: string, autor: string, anoPublicacao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponibilidade = true;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getDisponibilidade(): boolean {
        return this.disponibilidade;
    }

    public emprestar(): void {
        this.disponibilidade = false;
    }

    public mostrarLivro(): void {
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Ano: " + this.anoPublicacao);
        console.log("Disponível: " + this.disponibilidade);
        console.log("-------------------------");
    }
}

let livros: Livro[] = [];
let continuar: number = 1;

while (continuar == 1 && livros.length < 15) {

    let titulo: string = String(prompt("Digite o título do livro:"));
    let autor: string = String(prompt("Digite o autor do livro:"));
    let ano: number = Number(prompt("Digite o ano de publicação:"));

    let livro: Livro = new Livro(titulo, autor, ano);

    livros.push(livro);

    if (livros.length < 15) {
        continuar = Number(prompt("Deseja cadastrar outro livro? 1 - Sim / 2 - Não"));
    } else {
        console.log("Limite de 15 livros atingido.");
    }
}

console.log("=== LIVROS DISPONÍVEIS ===");

for (let i = 0; i < livros.length; i++) {
    if (livros[i].getDisponibilidade()) {
        livros[i].mostrarLivro();
    }
}

let tituloPesquisa: string = String(prompt("Digite o título do livro que deseja emprestar:"));

let encontrado: boolean = false;

for (let i = 0; i < livros.length; i++) {

    if (livros[i].getTitulo().toLowerCase() == tituloPesquisa.toLowerCase()) {

        encontrado = true;

        if (livros[i].getDisponibilidade()) {
            livros[i].emprestar();
            console.log("Livro emprestado com sucesso!");
        } else {
            console.log("Esse livro já está emprestado.");
        }
    }
}

if (encontrado == false) {
    console.log("Livro não encontrado.");
}