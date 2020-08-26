.
// Criar programa para calcular a média
// das duas turmas e verificar qual é a maior

const turmaA = [
    {
        nome: "João",
        nota: 10
    },
    {
        nome: "Maria",
        nota: 9.8
    },
    {
        nome: "Antonio",
        nota: 8.6
    },
    {
        nome: "Antônio",
        nota: 9.4
    }
]

const turmaB = [
    {
        nome: "Antônio",
        nota: 4.6
    },
    {
        nome: "Tião",
        nota: 5.7
    },
    {
        nome: "Joaquina",
        nota: 3.7
    }
]

// Função para efetuar o cálculo da média
// das notas
function calculaMedia (alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

// Resultado das médias
const media1 = calculaMedia(turmaA)
const media2 = calculaMedia(turmaB)

// Função para efetuar o teste da média e
//  retornar a mensagem.
function mensagem(media, turma) {
    if (media >= 5 ) {
        console.log (`A Turma ${turma} está de parabéns pois teve uma média de ${media.toFixed(2)}, ficando acima do esperado!`)
    } else {
        console.log (`A Turma ${turma} precisa estudar mais pois sua média foi somente de ${media.toFixed(2)}`)
    }

}
// Chamando a função e passando a mensagem.
mensagem(media1, 'TurmaA')
mensagem(media2, 'TurmaB')
