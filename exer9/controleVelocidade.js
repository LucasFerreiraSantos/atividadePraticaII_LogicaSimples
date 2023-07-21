const velocidade = Number(prompt('Qual a velocidade? '))
const velocidadeMáxima = 80
const TAXA = 5
    if(velocidade > velocidadeMáxima) {
        let limiteUltrapassado = velocidade - velocidadeMáxima
        document.write(`Sua velocidade foi de ${velocidade}Km/h e o limite é de ${velocidadeMáxima}Km/h. Você foi MULTADO!!!\n
        Porque, ultrapassou o limite em ${limiteUltrapassado}Km/h. Por isso, sua multa é de R$${limiteUltrapassado * TAXA}.`)
    }