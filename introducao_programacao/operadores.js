/*=======================================

    OPERADORES DE COMPARAÇÃO
  
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

/* =============================================

OPERADPRES LÓGICOS

    && As duas condições devem ser verdadeiras para que a condição final
    seja verdadeira.
    || "OU" Uma das condições deve ser verdadeira para que a condição final
    seja verdadeira.
    ! "NÃO" nega uma condição.

================================================*/

console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) //false

console.log(5 == 4 || 6 == 6 ) //true
console.log(6 == 3 || 5 == 7)  //false

/* =============================================
    OPERADORES ARITMÉTICOS

    * Multiplicação
    / Divisão
    % Resto da divisão
    + Adição
    - Subtração

===============================================*/

console.log( 2 * 2 )   // 4
console.log( 2 / 2 )   // 1
console.log( 2 % 1.5 ) // 0.5
console.log( 10 + 15 ) // 25
console.log( 5 - 8 )   // -3