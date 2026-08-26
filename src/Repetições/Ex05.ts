// 5. Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
//  Função classificarVenda(valor):
// o Se valor &lt; 1000: Retorna &quot;Bronze&quot;
// o Se valor entre 1000 e 5000: Retorna &quot;Prata&quot;
// o Se valor &gt; 5000: Retorna &quot;Ouro&quot;
//  O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria &quot;Ouro&quot;.


let Mvendas = 0, ouro = 0, Tvendas = 0, Maiorvendedor= 0
function classificarVenda(valor: number):string {
    if(valor < 1000){
        return "Bronze"
    }
    else if(valor >= 1000 && valor <= 5000){
        return "Prata!"
    }
    else{
        return "Ouro!"
         
    }
}
    for(let i=1; i <=5; i++){
        let venda:number = Number(prompt("Informe o valor de vendas: "))
        let categoria = classificarVenda(venda)
        alert(`Vendedor: ${i}\n Categoria: ${categoria}`)

        Tvendas += venda

        if(venda > Mvendas){
            Mvendas = venda
            Maiorvendedor = i
        }

        if(categoria === "Ouro!"){
            ouro++
        }
    }
document.writeln(`Total de vendas: ${Tvendas} <br>`);
document.writeln(`Maior venda: ${Mvendas} (Vendedor ${Maiorvendedor}) <br>`);
document.writeln(`Quantidade de Ouro: ${ouro} <br>`);