
// Criar programa para calcular a média
// das notas dos alunos
const alunos = [
    {
        nome: "João",
        nota: 9.2
    },
    {
        nome: "Maria",
        nota: 5.8
    },
    {
        nome: "Antonio",
        nota: 5.6
    }
]


const media = (alunos[0].nota, alunos[1].nota, alunos[2].nota) / 3


if (media >=5) {
    console.log(`A média geral da turma ${media} está boa!`)
} else {
    console.log (`A turma precisa estudar mais, pois a média ${media} está baixa.`)
}