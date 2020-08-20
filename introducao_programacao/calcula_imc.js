// Crie um programa para calcular o 
//IMC e nível de obesidade de uma pessoa.

// Variáveis
const nome = "Carlos";
const peso = 84;
const altura = 1.88;

//Cálculo do IMC peso x altura ao quadrado
const calcImc = peso / (altura * 2);

//Se IMC for >= 30 então a pessoa está acima do peso,
//caso contrário está abaixo.
if ( calcImc >= 30 ) {
    console.log(`${nome} você está acima do peso!`)
} else if (calcImc < 29.9) {
    console.log(`${nome}, você não está acima do peso!`)
}