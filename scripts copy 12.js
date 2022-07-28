//operadores aritiméticos(matemáticos)
// operadores de atribuição
// operadores de comparação
//operadores lógicos
//operadores Bitwise

//IF / Else
// Switch .. case

// Switch .. case

let  permissão ; // comum, gerente, diretor
permissão = 'gerente';

switch(permissão){
    case 'comum':
        console.log('usuário comum');
    break;

    case 'gerente':
        console.log('usuário gerente');
    break;

    case 'diretor':
        console.log('usuário diretor');
    break;

    default:
        console.log('Usuário não reconhecido!')
};