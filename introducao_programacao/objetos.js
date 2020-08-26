
// Criar programa para calcular a média
// das notas dos alunos
const aluno01 = {
    nome: "Joao",
    nota: 10
}

const aluno02 = {
    nome: "Maria",
    nota: 5.8
}

const aluno03 = {
    nome: "Antonio",
    nota: 5.6
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3


if (media >=5) {
    console.log(`A média geral da turma ${media} está boa!`)
} else {
    console.log (`A turma precisa estudar mais, pois a média ${media} está baixa.`)
}