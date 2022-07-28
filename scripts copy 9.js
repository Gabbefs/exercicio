//operadores aritiméticos(matemáticos)
// operadores de atribuição
// operadores de comparação
//operadores lógicos
//operadores Bitwise

//operador de comparação não boleanos

// Falsy
// valores undefined
//null
// 0
// false
// ''
// NaN (not a number)

//Truthy
// nenhum acima

false || 'RAFAEL' // VAI ME RETORNAR "RAFAEL"

let corPersonalizada = 'vermelho';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);
// vai me retornar vermelho pois foi a primeira condição que deu true

let corPersonalizada = '';
// ele vai me devolver Azul, pois o vazio é falsy