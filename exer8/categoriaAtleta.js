const idade = Number(prompt('Diga a sua idade: '))
const peso = Number(prompt('Diga o seu peso: '))
    if(idade <= 12){
        document.write(`INFANTIL`)
    } else if(idade >= 13 && idade <= 16 && peso <= 40){
        document.write(`JUVENIL LEVE`)
    } else if(idade >= 13 && idade <= 16 && peso > 40){
        document.write(`JUVENIL PESADO`)
    } else if(idade >= 17 && idade <= 24 && peso <= 45) {
        document.write(`SÊNIOR LEVE`)
    } else if(idade >= 17 && idade <= 24 && peso > 45 && peso <= 60){
        document.write(`SÊNIOR MÉDIO`)
    } else if(idade >= 17 && idade <= 24 && peso > 60){
        document.write(`SÊNIOR PESADO`)
    } else{
        document.write(`VETERANO`)
    }