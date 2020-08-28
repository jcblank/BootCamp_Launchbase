const programador = {
    nome: "Elliot",
    idade: 28,
    tecnologias: [ 
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O programdor ${programador.nome}, tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} em ${programador.tecnologias[0].especialidade}.`)