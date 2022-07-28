// Igualdade de Objetos

function endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this. cep = cep
}

const endereco1 = new endereco('a', 'b', 'c');
const endereco2 = new endereco('a', 'b', 'c');
const endereco3 = endereco1

function saoIguais(endereco1, endereco2) {
    // comparar as propriedades sao iguais
    return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep == endereco2.cep
}

function temEndercoMemoriaIguais(endereco1, endereco2) {
    // comparando se a referencia do objeto aponta para o mesmo local na memoria
    return endereco1 === endereco3
}