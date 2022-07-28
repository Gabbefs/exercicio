//operadores aritiméticos(matemáticos)
// operadores de atribuição
// operadores de comparação
//operadores lógicos
//operadores Bitwise

//Laço loop 
//For, While, do ... While, For .. In, For.. of, For Each

//For

for (let i =0; i <5; i++) { // i é abreviação index, vai atribuir 0 , de´pois a condção para o loop ficar rodando, e o que vai acontecer para o loop se finalizar
    if (i % 2 !== 0){
        console.log(i);
    }
}

for (let i =5; i >= 1; i--) { // i é abreviação index, vai atribuir 0 , de´pois a condção para o loop ficar rodando, e o que vai acontecer para o loop se finalizar
    if (i % 2 !== 0){
        console.log(i);
    }  
}

//While Loop ( verifica primeiro depois executa )

let  i = 5 

while (i >= 1){
    if (i % 2 !== 0){
        console.log(i);
    }
}

//Do.. While (executauma vez pra depois verificar)

let i= 0;

do {
    console.log('digitando');
    i++;
} while (i <10);

//For.. In ( mostra os valores dentro de uma chave específica )

const pessoa = {
    nome: 'Gabriela'; // nome é uma chave e gabriela é um valor
    idade: 25
};

//key-value
for (let chave in pessoa) {
    console.log(chave, pessoa.nome); // Para acessar a propriedade dot notation, ou por colchetes pessoa['nome']
};

const cores = ['vermelho', 'azul', 'verde'];
for (let indice in cores){
    console.log(indice, cores[indice])
};

// For.. of ( me mostra os itens dentro da lista)

for (let cor of cores){
    console.log(cor);
};