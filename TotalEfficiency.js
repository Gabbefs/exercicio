// Cada time tem 2 candidatos

// n candidatos e cada candidato tem uma habilidade definida por skill

// Precisa ser formados n/2 times

// Os times formados tem que ter o mesmo nível de habilidade

// A eficiência do time é o produto das duas skills


// Objetivo: Encontre a soma total das eficiências de todos os times que podem ser formados. Se não houver uma
//           forma de organizar os times satisfazendo os critérios acima retorne -1.


function getTotalEfficiency(n, skill) {
    let listaDePares = [];
    let listaDeHabilidade = [];
    let listEfficiency = [];
    let totalEfficiency = 0;

    skill = skill.sort();

    if (n % 2 == 0 && 1 < n <= 100000) {
        for (let i = 0; i < n / 2; i++) {
            listaDePares.push([skill[0], skill[skill.length - 1]]);
            skill.shift();
            skill.pop();
        }

        listaDePares.forEach(element => {
            listaDeHabilidade.push(element[0] + element[1]);
        });

        //console.log(listaDeHabilidade);
        if (listaDeHabilidade.every(element => {
                if (element == listaDeHabilidade[0])
                    return true;
            })) {
            listaDePares.forEach(element => {
                listEfficiency.push(element[0] * element[1]);
            })

            listEfficiency.forEach(element => {
                totalEfficiency = totalEfficiency + element;
            })

            console.log(totalEfficiency);
        } else {
            console.log('Não foi possível balancear os times');
        }
    } else {
        console.log('Não foi possível balancear os times');
    }
}





listaDePares = [
    [1, 5],
    [2, 4],
    [3.3]
]

listaDeHabilidade = [6, 6, 6]

n = 4


skill = [1, 2, 3, 2] => [1, 3], [2, 2]
skill = [5, 4, 2, 1] => [5, 1], [4, 2]