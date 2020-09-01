// Crie um programa que calcula a soma 
// de receitas e despesas de usuários e 
// no fim retorna o saldo (receitas - despesas).

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];


  // função para efetuar o cálculo das
  // receitas - as despesas
  function calculaSaldo (receitas, despesas) {
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    return somaReceitas - somaDespesas
  }

// Função para efetuar a soma dos 
// números.
function somaNumeros(numeros) {
    let soma = 0

    for (let numero of numeros) {
        soma = soma + numero
    }
    return soma
}

// For que percorre a lista de usuários
// testa se ele possui saldo > que zero
// imprime se é positivo ou negativo e seu saldo.
for (let usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if(saldo > 0) {
        console.log(`${usuario.nome}, está com saldo positivo de ${saldo.toFixed(2)}!`)
    }else {
        console.log(`${usuario.nome}, está com saldo negativo de ${saldo.toFixed(2)}!`)
    }
}