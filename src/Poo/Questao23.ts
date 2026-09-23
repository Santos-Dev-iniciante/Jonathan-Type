abstract class Produto {
    private codigo: number;
    private nome: string;
    private precoCusto: number;

    constructor(codigo: number, nome: string, precoCusto: number) {
        this.codigo = codigo;
        this.nome = nome;
        this.precoCusto = precoCusto;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getPrecoCusto(): number {
        return this.precoCusto;
    }

    public setPrecoCusto(precoCusto: number): void {
        this.precoCusto = precoCusto;
    }

    abstract calcularPreco(): number;
}

class ProdutoPerecivel extends Produto {
    private dataValidade: string;

    constructor(codigo: number, nome: string, precoCusto: number, dataValidade: string) {
        super(codigo, nome, precoCusto);
        this.dataValidade = dataValidade;
    }

    public getDataValidade(): string {
        return this.dataValidade;
    }

    public setDataValidade(dataValidade: string): void {
        this.dataValidade = dataValidade;
    }

    calcularPreco(): number {
        let hoje: string = "23/09/2026";

        if (this.getDataValidade() == hoje) {
            return this.getPrecoCusto() * 0.70;
        }

        return this.getPrecoCusto();
    }
}

class ProdutoNaoPerecivel extends Produto {
    calcularPreco(): number {
        return this.getPrecoCusto();
    }
}

let estoque: Produto[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let codigo: number = Number(prompt("Digite o código do produto:"));
    let nome: string = String(prompt("Digite o nome do produto:"));
    let preco: number = Number(prompt("Digite o preço de custo:"));
    let tipo: number = Number(prompt("Digite 1 para Perecível ou 2 para Não Perecível:"));

    if (tipo == 1) {
        let validade: string = String(prompt("Digite a data de validade (dd/mm/aaaa):"));

        estoque.push(
            new ProdutoPerecivel(codigo, nome, preco, validade)
        );
    } else if (tipo == 2) {
        estoque.push(
            new ProdutoNaoPerecivel(codigo, nome, preco)
        );
    }

    continuar = Number(prompt("Deseja cadastrar outro produto? 1-Sim / 2-Não"));
}

console.log("=== PASSAGEM PELO CAIXA ===");

for (let produto of estoque) {
    console.log("Código: " + produto.getCodigo());
    console.log("Produto: " + produto.getNome());
    console.log("Valor final: R$ " + produto.calcularPreco().toFixed(2));
    console.log("----------------------");
}