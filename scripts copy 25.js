//Clonando Objetos 

const celular = {
    marcaCelular:'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75,
    },
    ligar: function() {
        console.log('Fazendo ligação...')
    }
}

const novoObjeto = Object.assign({ //pega primeiro parametro alvo, e onde copia 
    bateria: 5000 // posso definir um atributo novo para este objeto, alem dos outros que vao ser clonados
}, celular); 
console.log(novoObjeto);

const novoObjeto2 = {...celular}; // Spread
console.log(novoObjeto2);
