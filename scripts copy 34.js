// Faixa de preço

//crie um array de objetos de faixa de preço para que ela possa ser usado em um site igual ao mercado livre

//faixas, tooltip, minimo, maximo

// Priemira opção

let faixas = [
    {tooltip:'até R$700', minimo: 0, maximo: 700 },
    {tooltip:'até R$700 a R$1000', minimo: 700, maximo: 1000 },
    {tooltip:'até R$1000 au mais', minimo: 1000, maximo: 9999999 },
];

// segunda opção (factory function)
function criaFaixaPreco(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a', 1, 100),
    criaFaixaPreco('b', 100, 1000),
    criaFaixaPreco('c', 1000, 10000),
]

console.log(faixas);
console.log(faixas2);

//Terceira opção (constructo function)
function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco ('d', 10, 20),
    new FaixaPreco ('e', 20, 30),
    new FaixaPreco ('f', 30, 40)
];

console.log(faixas3);
