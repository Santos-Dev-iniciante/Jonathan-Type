class Livro {
    private titulo: string
    private autor: string
    private ano: number
    private disponivel: boolean

    constructor(titulo: string, autor: string, ano: number) {
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.disponivel = true
    }

    mostrar(): void {
        console.log(`Título: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`Disponível: ${this.disponivel}`)
    }

    emprestar(): void {
        this.disponivel = false
    }

    getTitulo(): string {
        return this.titulo
    }

    getDisponivel(): boolean {
        return this.disponivel
    }
}

let livros: Livro[] = []

for (let i = 0; i < 15; i++) {

    let titulo = String(prompt("Título: "))
    let autor = String(prompt("Autor: "))
    let ano = Number(prompt("Ano de publicação: "))

    let livro = new Livro(titulo, autor, ano)

    livros.push(livro)
}

console.log("=== LIVROS DISPONÍVEIS ===")

for (let livro of livros) {
    if (livro.getDisponivel()) {
        livro.mostrar()
    }
}

let pesquisa = String(prompt("Digite o título do livro que deseja emprestar: "))

for (let livro of livros) {
    if (livro.getTitulo() == pesquisa) {
        livro.emprestar()
        console.log("Livro emprestado com sucesso!")
    }
}