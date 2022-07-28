// Introdução a Arrays
// ADD NOVOS ELEMENTOS
//ENCONTRAR ELEMNETOS
// remover elementos
//Dividir arrays
//combinar arrays

// Encontrar elemento ( tipo referencia)

const marcas = [
    {id: 1, nome:'a'},
    {id: 1, nome:'b'},
];

marcas.find(function(marca){ // me dá a primeira ocorrência do elemento que corresponde a condição abaixo
return marca.nome === 'a';
});
console.log(marca);

//ARROW FUNCTIONS
// é a mesma coisa do de cima, retorna a ocorrência que for igual a condição

console.log (marcas.find(marca => marca.nome === 'a'));
