class Corrente {
    numConta: number
    nomeConrrentista: string
    saldo: number

    constructor(conta: number, conrrentista: string, saldo: number) {
        this.numConta = conta
        this.nomeConrrentista = conrrentista
        this.saldo = saldo
    }

    alterarNome(novoNome: string): void {
        this.nomeConrrentista = novoNome
    }

    deposito(deposito: number): void {
        this.saldo += deposito
    }

    saque(saque: number): number {
        this.saldo -= saque
        return this.saldo
    }
}

let conta: number = Number(prompt("Qual o número da sua conta: "))
let nome: string = String(prompt("Qual o seu nome? "))
let saldo: number = Number(prompt("Qual o seu saldo? "))

let corrente = new Corrente(conta, nome, saldo)

console.log("=== DADOS INICIAIS ===")
console.log("Número da conta:", corrente.numConta)
console.log("Nome do correntista:", corrente.nomeConrrentista)
console.log("Saldo inicial:", corrente.saldo)

let novoNome: string = String(prompt("Qual o novo nome? "))

corrente.alterarNome(novoNome)

console.log("=== ALTERAÇÃO DE NOME ===")
console.log("Novo nome:", corrente.nomeConrrentista)

let deposito: number = Number(prompt("Qual o valor do depósito? "))

corrente.deposito(deposito)

console.log("=== DEPÓSITO ===")
console.log("Valor depositado:", deposito)
console.log("Saldo após depósito:", corrente.saldo)

let saque: number = Number(prompt("Qual o valor do saque? "))

let saldoFinal = corrente.saque(saque)

console.log("=== SAQUE ===")
console.log("Valor sacado:", saque)
console.log("Saldo após saque:", saldoFinal)

console.log("=== DADOS FINAIS ===")
console.log("Número da conta:", corrente.numConta)
console.log("Nome do correntista:", corrente.nomeConrrentista)
console.log("Saldo final:", corrente.saldo)
