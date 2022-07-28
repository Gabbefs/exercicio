//Natureza dinâmica dos objetos

const mouse = {
    cor: 'red',
    marca: 'dazz'
}

mouse.velocidade = 5000;
mouse.trocarDPI = function () {
    console.log('Trocando DPI');
}
delete mouse.velocidade;
delete mouse.trocarDPI;

console.log (mouse);
