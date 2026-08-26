class Quadrado {
    tamanho: number

        constructor( tamanho: number){
            this.tamanho = tamanho
    
        }

        trocaValor(novoValor: number): void{
            this.tamanho = novoValor
        }

        mostrarLado(): number{
            return this.tamanho * this.tamanho
        }
}

let quadrado = new Quadrado(10)

alert(`Tamanho inicial: ${quadrado.mostrarLado()}`)

quadrado.trocaValor(12)

alert(`Novo tamanho: ${quadrado.mostrarLado()}`)