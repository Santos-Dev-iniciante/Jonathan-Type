class Pet {
    private nome: string;
    private especie: string;
    private peso: number;
    private vacinado: boolean;

    constructor(nome: string, especie: string, peso: number) {
        this.nome = nome;
        this.especie = especie;
        this.peso = peso;
        this.vacinado = false;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getEspecie(): string {
        return this.especie;
    }

    public setEspecie(especie: string): void {
        this.especie = especie;
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPeso(peso: number): void {
        this.peso = peso;
    }

    public getVacinado(): boolean {
        return this.vacinado;
    }

    public setVacinado(vacinado: boolean): void {
        this.vacinado = vacinado;
    }

    public aplicarVacina(): void {
        this.vacinado = true;
        console.log(`${this.nome} foi vacinado com sucesso!`);
    }
}

let pets: Pet[] = [];

for (let i = 0; i < 10; i++) {
    let nome: string = String(prompt("Nome do pet: "));
    let especie: string = String(prompt("Espécie: "));
    let peso: number = Number(prompt("Peso: "));

    pets.push(new Pet(nome, especie, peso));

    let continuar: number = Number(prompt("Deseja cadastrar outro pet? 1 - Sim / 2 - Não"));

    if (continuar == 2) {
        break;
    }
}

let totalImunizados: number = 0;

for (let pet of pets) {
    if (pet.getVacinado() == false) {
        pet.aplicarVacina();
        totalImunizados++;
    }
}

console.log(`Total de pets imunizados: ${totalImunizados}`);