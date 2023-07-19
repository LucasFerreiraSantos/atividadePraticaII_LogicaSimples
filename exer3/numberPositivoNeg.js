// Exercício III
const inNumber = prompt('Digite um número positivo ou negativo: ')
    if(+inNumber < 0){
        document.write(`${inNumber} é um número NEGATIVO!`)
    } else {
        document.write(`${inNumber} é um número POSITIVO!`)
    }