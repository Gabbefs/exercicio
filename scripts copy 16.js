// medidor de velocidade

//velocidade máxima de até 70
// a cada 5km acima do limite voce ganha 1 pto
// Math.floor()
// caso pontos maior que 12 -> "Carteira Suspensa"



let velocidade = 180
const pontosCarteira = Math.floor ((velocidade - 70) / 5);

let resultado = verificarVelocidade(velocidade);
console.log (resultado);


function verificarVelocidade (velocidade) {
    if (velocidade > 70) {

        if (pontosCarteira >= 12 ) {
            return 'Carteira Suspensa';

        } else {
            return pontosCarteira;
        };
    }
    else { 
        return 'velocidade permitida';
    }
};
    
