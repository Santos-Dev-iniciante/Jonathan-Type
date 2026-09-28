class Despesa {
    private descricao: string;
    private categoria: string;
    private valor: number;

    constructor(descricao: string, categoria: string, valor: number) {
        this.descricao = descricao;
        this.categoria = categoria;
        this.valor = 0;
        this.setValor(valor);
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getCategoria(): string {
        return this.categoria;
    }

    public setCategoria(categoria: string): void {
        this.categoria = categoria;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        if (valor > 0) {
            this.valor = valor;
        } else {
            console.log("O valor deve ser maior que zero.");
        }
    }
}

let totalDespesas: number = 0;
let continuar: number = 1;

while (continuar == 1) {
    let descricao: string = String(prompt("Descrição da despesa: "));
    let categoria: string = String(prompt("Categoria: "));
    let valor: number = Number(prompt("Valor: "));

    let despesa = new Despesa(descricao, categoria, valor);

    if (despesa.getValor() > 0) {
        totalDespesas += despesa.getValor();
        console.log(`Total de despesas: R$ ${totalDespesas.toFixed(2)}`);
    }

    continuar = Number(prompt("Deseja cadastrar outra despesa? 1 - Sim / 2 - Não"));
}

console.log(`Total final de despesas: R$ ${totalDespesas.toFixed(2)}`);