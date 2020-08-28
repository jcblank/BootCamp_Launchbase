/* OPERADORE DE COMPARAÇÃO
  
    >       MARIOR
    <       MENOR
    >=      MAIOR IGUAL A
    <=      MENOR IGUAL A
    ==      IGUAL A
    ===     IGUAL E DO MESMO TIPO
    !=      DIFERENTE DE 
    !==     DIFERENTE,INCLUSIVE DO TIPO

=======================================*/

// console.log ( 5 > 4 ) //true 
// console.log ( 5 < 4 ) //false
// coneol.log  ( 4 === '4') //false
// console.log ( 6 >= 5 ) //true
// console.log (10 <= 10) //true
// console.log (20 == 15) //false
// console.log (50 != 10) //true
// console.log (11 !== 'carlos') //true



const idade = 17

if (idade > 18) {
    console.log(`Você pode entrar pois é maior de 18!`)
} else {
    console.log(`Você é de menor, espere até ter mais de 18!`)
}

if (idade == 17) {
    console.log(`Você está quase lá, volte quando tiver 18!`)
}