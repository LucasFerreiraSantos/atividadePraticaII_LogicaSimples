const altura = parseFloat(prompt('Digite a sua altura: '))
const peso = parseFloat(prompt('Digite o seu peso: '))
const imc = peso / altura * altura
    if(imc < 18.5){
        document.write(`<p>Você está abaixo da faixa de peso ideal.</p>`)
    } else if(imc > 24.99){
        document.write(`<p>Você está acima da faixa de peso ideal.</p>`)
    }else{
        document.write(`<p>Você está dentro da faixa
        de peso ideal.</p>`)
    }