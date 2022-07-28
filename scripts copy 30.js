// Montador de endereço
// criar um objeto endereço
// que contem a informação
// rua
//cidade
// cep
//exibirEndereço(endereço)

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c',

};

function exibirEndereço(endereco){
    for( let chave in endereco)
        console.log(chave, endereco[chave]);

}

exibirEndereço(endereco);
