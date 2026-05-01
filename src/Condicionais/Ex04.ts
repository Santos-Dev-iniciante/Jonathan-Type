// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let numero1 :number = Number(prompt("Informe o primeiro número! "))
let numero2 :number = Number(prompt("Informe o segundo número! "))

if(num1 == num2){
    alert("Números iguais!")
}
else if(num1 > num2){
    alert("O primeiro é maior")
}else{
    alert("O segundo é maior!")
}