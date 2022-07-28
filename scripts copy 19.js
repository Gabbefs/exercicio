//Criar função somar que retorna a
// soma de todos os múltiplos de 3 e 5

// multiplos de 3 e 5 a o  resto da divisão entre esses dois numeros tem que ser 0

let limite = 10;
let somaMultiplos = somar(limite);
console.log (somaMultiplos);

function somar(limite) {

    let soma = 0;

    for (i = 0; i <= limite; i++ ) {
        if ( i % 3 == 0 || i % 5 == 0) {
            soma = soma + i;
            
        }
    } 
    return 'A soma dos múltiplos é: ' +  soma;

};
