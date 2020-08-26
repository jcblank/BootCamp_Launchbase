//Crie um programa para calcular a aposentadoria de uma pessoa.
//Obs.: Esse cálculo é fictício, dentro da aposentadoria existem 
//muitos outros fatores para serem levados em conta :)

//Variáveis
const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const nome2 = "José";
const sexo2 = "M";
const idade2 = 65;
const contribuicao2 = 36;

//Cálculo aposentadoria
const calcAposentadoria = idade + contribuicao;
const calcAposentadoria2 = idade2 + contribuicao2;

//Caso não tenha o tempo suficiente para se aposentar,
//Diminui o resultado do cálculo com o tempo base.
//Mulher(idade+contribuição > 85 anos)
//Homem(idade+contribuição > 95 anos)
const apoF = 85 - calcAposentadoria;
const apoM = 95 - calcAposentadoria;

//Testa o sexo da pessoa e se a pessoa tem o tempo mínimo para se aposentar.
//Caso contrário retorna o tempo necessário para se aposentar.
if (sexo == 'F' && calcAposentadoria > 85 && contribuicao > 30 ) {
    console.log(`${nome}, você pode se aposentar`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar! Com base no cálculo de idade + tempo de contribuição faltam ${apoF} 
    anos para se aposentar`)
} if (sexo2 == 'M' && calcAposentadoria2 > 95 && contribuicao2 > 35) {
    console.log(`${nome2}, você pode se aposentar!`)
} else {
    console.log(`${nome2}, você ainda não pode se aposentar! Com base no cálculo de idade + tempo de contribuição faltam ${apoM} 
    anos para se aposentar`)
}