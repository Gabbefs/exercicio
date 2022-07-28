//operadores aritiméticos(matemáticos)
// operadores de atribuição
// operadores de comparação
//operadores lógicos
//operadores Bitwise

//operador ternário

//tem um cliente, se tiver mais que 100 premium, caso contrario tipo omum
let pontos = 100;
let tipo = pontos > 100? 'premium ' : 'comum'; // escreve o que acontece na primeira opção e o que acontece na segunda
console.log(tipo);


//Operadores lógicos

// AND (&&), Or (||) , nOT(!)
// AND = retorna true se os dois operandos forem true

console.log(true && true);
console.log(false && true);

//let maiorDeIdade = true;
//let possuiCarteiraDeTrabalho = true;
//let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);


//OR = retorna true se pelo menos um dos operandos forem true

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('pode aplicar: ', podeAplicar);

//NOT = 
let candidatoRecusado = !podeAplicar;

console.log('Candidato recusado: ' , candidatoRecusado);