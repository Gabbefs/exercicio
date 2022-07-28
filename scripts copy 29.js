// Date
const data1 = new Date(); // se não coloca nada dentro ele passa a data do dia extraida do ip
const data2 = new Date('March 06 2019 09:30');
const data3 = new Date(2019, 02, 06, 09, 30);

data3.get //pega varias informações do objeto
date3.setFullYear(2030); // muda o numero do ano
date2.toDateString() // tranforma data em string
date2.toISOString() // modifica a forma como passa a data ( ano - mes- dia)