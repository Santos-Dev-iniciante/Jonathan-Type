abstract class Animal {
    private _nome: string;
    private _especie: string;
    private _idade: number;
    private _sexo: string;

    constructor(nome: string, especie: string, idade: number, sexo: string) {
        this._nome = nome;
        this._especie = especie;
        this._idade = idade;
        this._sexo = sexo;
    }

    public get sexo(): string {
        return this._sexo;
    }

    public set sexo(value: string) {
        this._sexo = value;
    }

    public get idade(): number {
        return this._idade;
    }

    public set idade(value: number) {
        this._idade = value;
    }

    public get especie(): string {
        return this._especie;
    }

    public set especie(value: string) {
        this._especie = value;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    abstract emitirSom(): void;
    abstract mover(): void;
}

class Mamifero extends Animal {
    private _tipoAlimentacao: string;

    constructor(nome: string, especie: string, idade: number, sexo: string, tipoAlimentacao: string) {
        super(nome, especie, idade, sexo);
        this._tipoAlimentacao = tipoAlimentacao;
    }

    public get tipoAlimentacao(): string {
        return this._tipoAlimentacao;
    }

    public set tipoAlimentacao(value: string) {
        this._tipoAlimentacao = value;
    }

    public emitirSom(): void {
        console.log("O mamífero " + this.nome + " está emitindo som.");
    }

    public mover(): void {
        console.log("O mamífero " + this.nome + " está se movendo.");
    }
}

class Ave extends Animal {
    private _migratoria: boolean;

    constructor(nome: string, especie: string, idade: number, sexo: string, migratoria: boolean) {
        super(nome, especie, idade, sexo);
        this._migratoria = migratoria;
    }

    public get migratoria(): boolean {
        return this._migratoria;
    }

    public set migratoria(value: boolean) {
        this._migratoria = value;
    }

    public emitirSom(): void {
        console.log("A ave " + this.nome + " está emitindo som.");
    }

    public mover(): void {
        console.log("A ave " + this.nome + " está voando.");
    }
}

let zoologia: Animal[] = [];
let continuar: number = 1;

while (continuar == 1 && zoologia.length < 15) {

    let nome: string = String(prompt("Digite o nome do animal:"));
    let especie: string = String(prompt("Digite a espécie do animal:"));
    let idade: number = Number(prompt("Digite a idade do animal:"));
    let sexo: string = String(prompt("Digite o sexo do animal:"));

    let tipo: number = Number(prompt("Digite o tipo: 1 - Mamífero / 2 - Ave"));

    let animal: Animal;

    if (tipo == 1) {

        let tipoAlimentacao: string = String(prompt("Digite o tipo de alimentação:"));

        animal = new Mamifero(nome, especie, idade, sexo, tipoAlimentacao);

    } else {

        let migratoria: number = Number(prompt("É migratória? 1 - Sim / 2 - Não"));

        let ehMigratoria: boolean;

        if (migratoria == 1) {
            ehMigratoria = true;
        } else {
            ehMigratoria = false;
        }

        animal = new Ave(nome, especie, idade, sexo, ehMigratoria);
    }

    zoologia.push(animal);

    if (zoologia.length < 15) {
        continuar = Number(prompt("Deseja cadastrar outro animal? 1 - Sim / 2 - Não"));
    } else {
        console.log("Limite de 15 animais atingido.");
    }
}

console.log("=== MAMÍFEROS ===");

for (let i = 0; i < zoologia.length; i++) {
    if (zoologia[i] instanceof Mamifero) {
        zoologia[i].mover();
    }
}

console.log("=== AVES ===");

for (let i = 0; i < zoologia.length; i++) {
    if (zoologia[i] instanceof Ave) {
        zoologia[i].mover();
    }
}

console.log("=== HORA DA ALIMENTAÇÃO ===");

for (let i = 0; i < zoologia.length; i++) {
    zoologia[i].emitirSom();
}