//Para nunca mais esquecer
//int: Variável número do tipo inteiro, positivo ou negativo.
//float: Variável numérica do tipo decimal.
//double: Variável numérica do tipo decimal de precisão dupla.
//char: Variável que representa um caractere do tipo texto.
//string: Variável que representa um conjunto de caracteres do tipo texto.
//boolean: Variável booleana, ou seja, que pode representar somente dois valores, verdadeiro ou falso.
//Constantes
//Ao contrário das variáveis, que podemos alterar o valor conforme a necessidade do algoritmo a ser desenvolvido, as constantes precisam ser inicializadas e não podem ter o seu valor alterado.

//Por exemplo, caso seja necessário calcular a área de uma circunferência, podemos adotar o seguinte algoritmo:
//! representa dois valores iguais realmente. Ex.: dois numeros, duas strings
// || "ou"
function comparadorNumero(num1, num2) {
    if (!num1 || !num2) return 'Insira dois números!'
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);
    //Lembrar de colocar a crase nesse comando
    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if (num1 !== num2) {
        saoIguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

function criaSegundaFrase(num1, num2) {

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const soma = num1 + num2;
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior'
    }

    if (compara20) {
        resultado20 = 'maior';
    }
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}
console.log(comparadorNumero(20, 20));