let saldo = 5000
let saque = Number(prompt('Qual o valor que você deseja sacar? '))
const TAXA = 4.50
    if(saque % 5 === 0 && saque < saldo - TAXA) {
        let saqueTaxa = saque + TAXA
        let saldoRestante = saldo - saqueTaxa
        document.write(`Saque autorizado de R$${saque.toFixed(2)}, com a TAXA seu saque foi de R$${saqueTaxa.toFixed(2)} e o saldo restante é de R$${saldoRestante.toFixed(2)}.`)
        saldo = saldoRestante
    } else if (saque % 5 != 0 || saque >= saldo) {
        document.write(`Você só pode fazer saques de múltiplos de R$5,00. Ou até o limite de seu saldo, que é de R$${saldo.toFixed(2)}.`)
    }