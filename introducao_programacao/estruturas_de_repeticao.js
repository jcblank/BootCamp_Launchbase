// Calcular médias de alunos
// utilizando for
const turmaA = [
    {
        nome: "João",
        nota: 10
    },
    {
        nome: "Carlos",
        nota: 4.5
    },
    {
        nome: "Maria",
        nota: 7
    },
    {
        nome: "Antônia",
        nota: 8.9
    }
]

const turmaB = [
    {
        nome: "Carlos",
        nota: 5.8
    },
    {
        nome: "Carla",
        nota: 5.5
    },
    {
        nome: "Joshua",
        nota: 3.5
    },
    {
        nome: "Marla",
        nota: 4.0
    }
]

// Função para verificar a quantidade de alunos
// e efetuar a soma/média das notas.
function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    
    media = soma / alunos.length

    return media
}

// Variáveis para armazenar o cálculo da média
const media1 = calculaMedia(turmaA);
const media2 = calculaMedia(turmaB);

// Função para efetuar o retorno da mensagem
// caso seja maior que a média 5
function enviaMensagem (media, turma) {
    if (media > 5 ) {
        console.log(`A Turma ${turma}, teve a média acima ${media}.`)
    } else {
        console.log(`A Turma ${turma}, teve uma média baixa ${media}.`)
    }
}

// Chamar a função "enviaMensagem"
// para ambas as turmas.
enviaMensagem(media1, 'Turma A')
enviaMensagem(media2, 'Turma B')