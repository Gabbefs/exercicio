// Introdução a Arrays
// ADD NOVOS ELEMENTOS
//ENCONTRAR ELEMNETOS
// remover elementos
//Dividir arrays
//combinar arrays

// ADD NOVOS ELEMENTOS

const numeros = [1, 2, 3]

// inserir no inicio

numeros.unshift(0);
console.log(numeros);

// inserir no meio

numeros.splice(1,0,'a'); // primeiro coloca o indice que começa a alteração, depois qual vc quer retirar, e depois qual vc quer adicionar.
console.log(numeros);

//inserir no final

numeros.push(5);
console.log(numeros);