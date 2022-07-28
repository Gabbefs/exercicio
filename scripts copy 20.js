// Exercício Nota Escolar
// Obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

//Somar as notas
//para obter a média precisa pegar a soma das notas e dividir pela quantidade de notas
// apos obter a média preciso verificar em qual intervalo ela se encaixa e qual a nota que ela corresponde

const notas =[70,70,80,85,65,49];

calculaNota(notas);

function calculaNota(listaDeNotas) {

    let somaElementos = 0;
    let mediaNotas = 0;

    for (let i = 0; i < listaDeNotas.length; i++) {
        somaElementos = somaElementos + listaDeNotas[i];
        
    }

    mediaNotas = somaElementos / listaDeNotas.length;

    if(0 <= mediaNotas && mediaNotas < 60) {
        console.log('F');

    } else if( 60 <= mediaNotas && mediaNotas < 70) {
        console.log('D');

    } else if( 70 <= mediaNotas && mediaNotas < 80) {
        console.log('C');

    } else if( 80 <= mediaNotas && mediaNotas < 90) {
        console.log('B');

    } else if( 90 <= mediaNotas && mediaNotas <= 100) {
        console.log('A');

    } else { 
        console.log('Valor inválido');
    }
};

const array = [70,70,80];
console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma/(array.length);
};