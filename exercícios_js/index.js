
//Calcula média de alunos

const aluno1 = 'Carlos'
const notaAluno1 = 5.8

const aluno2 = 'Marcos'
const notaAluno2 = 4.0

const aluno3 = 'Ciclano'
const notaAluno3 = 9.5

//Cálculo da média dos alunos da turma
const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3

/*Condicional para verificar se a média 
da turma foi maior que 5*/

if (media >= 5) {
    console.log (`Parabéns a turna! Média da turma = ${media}`)
} else {
    console.log (`Média da turma foi bastante ruim! Nota = ${media}`)
}