// Funcoes fabrica encapsula o codigo em um metodos que cria um objeto
// como construir um objeto 

const celular = {
    marcaCelular:'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75,
    },
    capacidadeBateria: 5000,
    ligar: function() {
        console.log('Fazendo ligação...')
    }
};

// EX

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular, // quando a chave e o valor tem o mesmo nome, não precisa escrever duas vezez ' marcaCelular : marcaCelular.
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('Fazendo ligação...')
        }
    }
}

// CRIAR O OBJETO FAZ:

const celular1 = criarCelular('Zenfone',5.5, 5000);
console.log(celular1);

//Constructor function

//Pascal Case -UmDoisTresQuatro (começa com a letra maiuscula)

function CriarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log('Fazendo ligação ...');
    }

}

const celular2 = new CriarCelular ('ASUS', 5.5, 5000);
console.log(celular);