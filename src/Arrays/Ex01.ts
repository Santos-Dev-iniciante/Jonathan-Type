// 1. Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa

let lista = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let par = lista.filter(num => num % 2 == 0)
let impar = lista.filter(num => num % 2 == 1)
let multiplos = lista.filter(num => num % 2 == 0 || num % 3 == 0 || num % 4 == 0)
let reversa = lista.reverse()
let resulta = `Números pares: ${par.join(", ")}<br>
Números ímpares: ${impar.join(", ")}<br>
Múltiplos de 2, 3 e 4: ${multiplos.join(", ")}<br>
Lista reversa: ${reversa.join(", ")}<br>`