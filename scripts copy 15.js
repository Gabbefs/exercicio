// fizzBuzz
// compara alguns valores e ter um tipo de retorno baseado no tipo de entraada

// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// nÃO DIVISÍVEL POR 3 OU 5 => entrada
// não é um número => 'não é um número'

const resultado = fizzBuzz(16);
    console.log(resultado);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number'){
        return 'Não é um número';
    }

    else if (entrada % 3 === 0 && entrada % 5 === 0){
        return 'FizzBuzz';
    }
    else if (entrada % 5 === 0){
        return 'Buzz';
    }

    else if (entrada % 3 === 0) {
        return 'Fizz';
    }

    return entrada;
};
