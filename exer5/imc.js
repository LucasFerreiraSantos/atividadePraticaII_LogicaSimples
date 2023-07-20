// Exercício V
const altura = prompt('Digite a sua altura: ')
const peso = prompt('Digite o seu peso: ')
const imc = peso / (altura * altura)
    if(imc < 18.5){
        document.write(`<p>Seu IMC é de ${imc.toFixed(2)}. Você está abaixo da faixa de peso ideal.</p>`)
    } else if(imc > 24.99){
        document.write(`<p>Seu IMC é de ${imc.toFixed(2)}. Você está acima da faixa de peso ideal.</p>`)
    }else{
        document.write(`<p>Seu IMC é de ${imc.toFixed(2)}. Você está dentro da faixa
        de peso ideal.</p>`)
    }