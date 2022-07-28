//Template literal

const mensagem = 'oi, essa é a minha \n priemria mensagem'; //sequencia de escape (\n) divide minha mensagem em duas linhas ( quebra de linha)
const mensagem = 'oi, essa é a minha \n '\'priemria\' mensagem'; 
//Object{}
// Boolean true, false
//string '', ""
//template `` (permite eu escrever a minha mensagem  do jeito que eu quiser com aspas dentro sem quebrar)

const mensagem = `oi, essa é a minha \n 'priemria' mensagem`; 

const nome = 'rafael';
const mensagem1 = 'Olá' + nome + '\n'
const email = 
`Olá ${nome} ${2+2} 

Obrigado por se inscrever no canal

Para acompanhar os vídeos não esqueça de ativar o sino.

Obrigado,

Gabriela.`; // pode colocar metodo e funções dentro