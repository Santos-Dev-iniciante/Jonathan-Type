// 2. Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
// variável mês, um número entre 1 e 12, correspondendo a um dos meses do ano. No final,
// você deve imprimir uma mensagem conforme o exemplo: &quot;A estação do ano correspondente
// ao mês 3 é Verão&quot; Considere a estação prevalente para cada mês:
// a) Janeiro (1): Verão
// b) Fevereiro (2): Verão
// c) Março (3): Verão
// d) Abril (4): Outono
// e) Maio (5): Outono
// f) Junho (6): Outono
// g) Julho (7): Inverno
// h) Agosto (8): Inverno
// i) Setembro (9): Inverno
// j) Outubro (10): Primavera
// k) Novembro (11): Primavera
// // l) Dezembro (12): Primavera


let estacao:number = Number(prompt("Digite um número equivalente a um mês no calendario!"))

    if(estacao == 1 || estacao == 2 || estacao == 3){
        alert("É verão!!!")
    }
    else if(estacao == 4 || estacao == 5 || estacao == 6){
        alert("É outono!!!")
    }
    else if(estacao == 7 || estacao == 8 || estacao == 9){
        alert("É iverno!!!")
    }
    else if(estacao == 10 || estacao == 11 || estacao == 12){
        alert("É primavera!!!")
    }
    