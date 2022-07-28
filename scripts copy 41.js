// Introdução a Arrays
//Operador SPREAD

const priemiro = [1,2,3];
const segundo = [4,5,6];

const combinado = priemiro.concat(segundo);
console.log(combinado);


// utilizando spread

const combinado = [...priemiro,...segundo];
console.log(combinado);
const cortado = combinado.slice();

// clonando array com spread

const clonado = [...combinado];
console.log(clonado);