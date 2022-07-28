//String
// métodos de string
// tipo primitivo

const mensagem = ' minha primeira mensagem ';

//tipo objeto

const outraMensagem = new String('Bom dia');


outraMensagem.lenght // mostra o tamanho da string
outraMensagem[2] // mostra a letra que esta dentro do indice
mensagem.includes('primeira') // me da um true ou false se essa palava contem na mensagem
mensagem.startsWith('minha') // me da um true ou false se começa com essa palavra
mensagem.endsWith('dd')// me da um true ou false se a mensagem termina com essa palavra
mensagem.indexOf('primeira')// me da o indice de onde começa a palavra primeira
mensagem.replace('minha', 'sua') // troca a primeira palavra para a segunda na mensagem
mensagem.trim()// retira os espaços excedentes
mensagem.split('')// quebra a mensagem a cada espaço

