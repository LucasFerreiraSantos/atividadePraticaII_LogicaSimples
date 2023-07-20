let num1 = Number(prompt('Digite o primeiro número: '))
let num2 = Number(prompt('Digite o segundo número: '))
let operacao = prompt('Digite a operação: \n1. Adição\n2.Subtração\n3.Multiplicação\n4.Divisão')
    switch(+operacao){
        case 1:
            document.write(num1 + num2)
            break
        case 2:
            document.write(num1 - num2)
            break
        case 3:
            document.write(num1 * num2)
            break
        case 4:
            document.write(num1 / num2)
            break
        default:
            document.write('Você digitou uma opção errada!')
    }