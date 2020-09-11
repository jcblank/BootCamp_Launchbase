// Programa para marcar aluno como
// reprovado caso a nota seja menor que 5
// enviar uma mensagem caso estej reprovado.

const turmaA = [
    {
        nome: "João",
        nota: 10
    },
    {
        nome: "Maria",
        nota: 4
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

// Função para marcar o aluno como reprovado
// caso a média dele seja menor que 5.
function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if(aluno.nota < 5) {
        aluno.reprovado = true;
    }
}

// Função para enviar mensagem caso o 
// aluno esteja reprovado
function enviarMensagemReprovado(aluno) {
    if(aluno.reprovado) {
        console.log(`O aluno ${aluno.nome}, da turma está reprovado!`)
    }
}

// For passando por todos os alunos e 
// depois chama as funções marcarComoReprovado
// e enviarMensagemReprovado.
function alunoReprovado(alunos) {
    for(let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno);
    }
}

// Executar a função alunoReprovado.
alunoReprovado(turmaA);
alunoReprovado(turmaB);