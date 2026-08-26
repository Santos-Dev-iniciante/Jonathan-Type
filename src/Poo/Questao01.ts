class Bola {
    cor: string
    circuferencia: number
    material: string

        constructor(cor: string, circuferencia: number, material: string){
            this.cor = cor
            this.circuferencia = circuferencia
            this.material = material
    
        }

        trocaCor(novaCor: string): void{
            this.cor = novaCor
        }

        mostrarCor(): string{
            return this.cor
        }
}

let bola = new Bola("Vermelho", 80, "Couro")

alert(`Cor inicial: ${bola.mostrarCor()}`)

bola.trocaCor("Rosa")

alert(`Nova cor: ${bola.mostrarCor()}`)