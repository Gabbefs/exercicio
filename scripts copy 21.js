// contador de asteríscos
//Criar uma função que exibe a quantidade de * que a linha possui

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    // let padrão = '';
    // for( let linha = 1; linha <= linhas; linha++) {
    //     padrao += '*';
    //     console.log(padrão);
    // }

    for(let linha = 1; linha <= linhas; linha ++) {
        let padrao = '';
        for (let i = 0; i < linha; i++) {
            padrao += '*';
        }
    }
};

