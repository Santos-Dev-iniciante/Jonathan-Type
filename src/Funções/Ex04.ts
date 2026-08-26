// Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
// de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while
// para ir subtraindo do valor total.

function saque(valor: number): void {
    let notas50: number = 0
    let notas20: number = 0
    let notas10: number = 0

    while (valor >= 50) {
        valor -= 50
        notas50++
    }
    while (valor >= 20) {
        valor -= 20
        notas20++
    }
    while (valor >= 10) {
        valor -= 10
        notas10++
    }
    document.writeln(`Notas de 50: ${notas50}`)
    document.writeln(`Notas de 20: ${notas20}`)
    document.writeln(`Notas de 10: ${notas10}`)
}