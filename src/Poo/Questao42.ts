class Medicamento {
    private nome: string;
    private lote: string;
    private preco: number;
    private quantidadeEstoque: number;

    constructor(nome: string, lote: string, preco: number, quantidadeEstoque: number) {
        this.nome = nome;
        this.lote = lote;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getLote(): string {
        return this.lote;
    }

    public setLote(lote: string): void {
        this.lote = lote;
    }

    public getPreco(): number {
        return this.preco;
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }

    public getQuantidadeEstoque(): number {
        return this.quantidadeEstoque;
    }

    public setQuantidadeEstoque(quantidade: number): void {
        if (quantidade >= 0) {
            this.quantidadeEstoque = quantidade;
        } else {
            console.log("A quantidade não pode ser negativa.");
        }
    }
}

let medicamentos: Medicamento[] = [];

for (let i = 0; i < 10; i++) {
    let nome: string = String(prompt("Nome do medicamento: "));
    let lote: string = String(prompt("Lote: "));
    let preco: number = Number(prompt("Preço: "));
    let quantidade: number = Number(prompt("Quantidade em estoque: "));

    let medicamento = new Medicamento(nome, lote, preco, quantidade);
    medicamentos.push(medicamento);

    let continuar: number = Number(prompt("Deseja cadastrar outro? 1 - Sim / 2 - Não"));

    if (continuar == 2) {
        break;
    }
}

console.log("MEDICAMENTOS COM ESTOQUE CRÍTICO");

for (let medicamento of medicamentos) {
    if (medicamento.getQuantidadeEstoque() < 5) {
        console.log(`Nome: ${medicamento.getNome()}`);
        console.log(`Quantidade restante: ${medicamento.getQuantidadeEstoque()}`);
        console.log("--------------------");
    }
}