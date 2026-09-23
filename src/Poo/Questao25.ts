abstract class Assinatura {
    private email: string;
    private valorMensal: number;

    constructor(email: string, valorMensal: number) {
        this.email = email;
        this.valorMensal = valorMensal;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getValorMensal(): number {
        return this.valorMensal;
    }

    public setValorMensal(valorMensal: number): void {
        this.valorMensal = valorMensal;
    }

    abstract exibirContrato(): void;
}

class AssinaturaPadrao extends Assinatura {
    constructor(email: string) {
        super(email, 29.90);
    }

    exibirContrato(): void {
        console.log("=== ASSINATURA PADRÃO ===");
        console.log("E-mail: " + this.getEmail());
        console.log("Telas simultâneas: 2");
        console.log("Resolução: Full HD");
        console.log("Valor mensal: R$ " + this.getValorMensal().toFixed(2));
    }
}

class AssinaturaPremium extends Assinatura {
    constructor(email: string) {
        super(email, 49.90);
    }

    exibirContrato(): void {
        console.log("=== ASSINATURA PREMIUM ===");
        console.log("E-mail: " + this.getEmail());
        console.log("Telas simultâneas: 4");
        console.log("Resolução: 4K");
        console.log("Valor mensal: R$ " + this.getValorMensal().toFixed(2));
    }
}

let contratos: Assinatura[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let email: string = String(prompt("Digite o e-mail do cliente:"));
    let tipo: number = Number(prompt("Digite 1 para Padrão ou 2 para Premium:"));

    if (tipo == 1) {
        contratos.push(new AssinaturaPadrao(email));
    } else if (tipo == 2) {
        contratos.push(new AssinaturaPremium(email));
    }

    continuar = Number(prompt("Deseja cadastrar outro cliente? 1-Sim / 2-Não"));
}

let emailBusca: string = String(prompt("Digite o e-mail para buscar:"));
let encontrado: boolean = false;

for (let contrato of contratos) {
    if (contrato.getEmail() == emailBusca) {
        contrato.exibirContrato();
        encontrado = true;
    }
}

if (!encontrado) {
    console.log("Contrato não encontrado.");
}