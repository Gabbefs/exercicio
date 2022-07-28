// Arrays
// conjuntos de dados que pode ser acessado por um indice (posição)

let familia = [true,45,'gabriela',17];

console.log(familia[2]);

console.log (familia.length);

let nomeDoColega = ['Nilo', 34, 'cantor', true]
console.log(nomeDoColega[3]);

//FUNCTIONS

// como nomear uma função: verbo+sustantivo

let corSite = 'AZUL';
function resetaCor(cor, tonalidade){
    corSite = cor + tonalidade
};

console.log(corSite);
resetaCor("vermelho", ' claro');
console.log(corSite);

//Parâmetros passa o valor da cor no caso 'vermelho'.

let sistema = 'Android';
function alteraSistema(tipo, versão){
    sistema = tipo + ' '+ versão
};

console.log(sistema);
alteraSistema('IOS', 6.1);
console.log(sistema);