class Retangulo {
    base: number
    altura: number 

    constructor(base: number, altura: number){
        this.base = base
        this.altura = altura
    }

    mudarValor(novaAltura: number, novaBase: number){
        this.altura = novaAltura
        this.base = novaBase
    }

    novosvalores(): void{
        console.log(`Lado A: ${this.base}`)
        console.log(`Lado B: ${this.altura}`)
    }

    calcularArea(): number{
        return this.base * this.altura
    }

    calcularPerimetro(): number {
        return 2 * (this.base + this.altura)
    }
}

let retangulo = new Retangulo(10, 14)

retangulo.novosvalores()

console.log("ÁREA: ",retangulo.calcularArea())
console.log("Perímetro", retangulo.calcularPerimetro())

retangulo.mudarValor(14, 10)

retangulo.novosvalores()

console.log("ÁREA: ",retangulo.calcularArea())
console.log("Perímetro", retangulo.calcularPerimetro())