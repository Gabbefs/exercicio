//PAR ou Impar
// Receber uma quantidade de valores para avaliar
//função exibe se cada balor é par ou impar


exibirTipo(10)
function exibirTipo(numero) {

    for (let i=0; i <= numero; i ++) {
        if (i % 2 === 0) {
            console.log(i , 'PAR');

        } else {
            console.log(i , 'IMPAR');
        }

    }
};

    
