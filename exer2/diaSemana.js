// Exercício II
let inUser = prompt('Digite um número de 1 a 7: ')
    switch (inUser) {
        case '1':
            document.write(`Número digitado foi ${inUser} que corresponde ao DOMINGO!`)
            break
        case '2':
            document.write(`Número digitado foi ${inUser} que corresponde a SEGUNDA-FEIRA!`)
            break
        case '3':
            document.write(`Número digitado foi ${inUser} que corresponde a TERÇA-FEIRA!`)
            break
        case '4':
            document.write(`Número digitado foi ${inUser} que corresponde a QUARTA-FEIRA!`)
            break
        case '5':
            document.write(`Número digitado foi ${inUser} que corresponde a QUINTA-FEIRA!`)
            break
        case '6':
            document.write(`Número digitado foi ${inUser} que corresponde a SEXTA-FEIRA!`)
            break
        case '7':
            document.write(`Número digitado foi ${inUser} que corresponde a SÁBADO!`)
            break
        default:
            document.write(`${inUser} não é uma entrada válida!`)
    }