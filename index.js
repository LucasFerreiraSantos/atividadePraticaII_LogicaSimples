// Exercício I
let tempCelsius = 26
let tempFahrenheit
tempFahrenheit = tempCelsius * 1.8 + 32
document.write(`<p>A temperatura Celsius é de ${tempCelsius}, sua conversão para Fahrenheit é ${tempFahrenheit.toFixed(2)}.</p>`)

// Exercício IV
const valorCarro = 56000
const taxaDistribuicao = (28 / 100) * valorCarro
const taxaImpostos = (45 / 100) * valorCarro
document.write(`<p>A taxa de distribuição é de R$${taxaDistribuicao.toFixed(2)}. A taxa de impostos é de R$${taxaImpostos.toFixed(2)} e o valor de fábrica do veículo é de R$${valorCarro - taxaDistribuicao - taxaImpostos}</p>`)