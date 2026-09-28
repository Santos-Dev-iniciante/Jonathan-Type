class Encomenda {
    private peso: number;
    private cidadeDestino: string;

    constructor(peso: number, cidadeDestino: string) {
        this.peso = peso;
        this.cidadeDestino = cidadeDestino;
    }

    public calcularFrete(): number {
        return 0;
    }

    public getPeso(): number {
        return this.peso;
    }

    public getCidadeDestino(): string {
        return this.cidadeDestino;
    }
}

class EncomendaPadrao extends Encomenda {
    public calcularFrete(): number {
        return this.getPeso() * 10;
    }
}

class EncomendaExpressa extends Encomenda {
    public calcularFrete(): number {
        return this.getPeso() * 20;
    }
}

let encomendas: Encomenda[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let peso: number = Number(prompt("Peso da encomenda em kg: "));
    let cidade: string = String(prompt("Cidade de destino: "));
    let tipo: number = Number(prompt("1 - Encomenda Padrão\n2 - Encomenda Expressa"));

    if (tipo == 1) {
        encomendas.push(new EncomendaPadrao(peso, cidade));
    } else {
        encomendas.push(new EncomendaExpressa(peso, cidade));
    }

    continuar = Number(prompt("Deseja cadastrar outra encomenda? 1 - Sim / 2 - Não"));
}

let totalFreteExpresso: number = 0;

for (let encomenda of encomendas) {
    let frete: number = encomenda.calcularFrete();

    console.log(`Destino: ${encomenda.getCidadeDestino()}`);
    console.log(`Frete: R$ ${frete.toFixed(2)}`);

    if (encomenda instanceof EncomendaExpressa) {
        totalFreteExpresso += frete;
        console.log("Entrega garantida em até 24 horas.");
    }

    console.log("--------------------");
}

console.log(`Total cobrado em fretes expressos: R$ ${totalFreteExpresso.toFixed(2)}`);