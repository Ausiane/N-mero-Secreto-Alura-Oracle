// **Linha 1**
// Exibe uma mensagem de boas-vindas ao jogo.
alert('Boas vindas ao jogo do número secreto');

// **Linha 2**
// Gera um número aleatório entre 1 e 10 e armazena o valor em uma variável.
let numeroSecreto = parseInt(Math.random() * 10 + 1);

// **Linha 3**
// Imprime o número secreto no console para fins de depuração.
console.log(numeroSecreto);

// **Linhas 4 e 5**
// Declara duas variáveis para armazenar o chute do usuário e o número de tentativas.
let chute;
let tentativas = 1;

// **Linha 6**
// Inicia um loop `while` que continua enquanto o chute do usuário não for igual ao número secreto.
while (chute != numeroSecreto) {

    // **Linha 7**
    // Solicita ao usuário que digite um número entre 1 e 10.
    chute = prompt('Escolha um número entre 1 e 10');

    // **Linha 8**
    // Se o chute do usuário for igual ao número secreto, o loop termina.
    if (chute == numeroSecreto) {
        break;
    }

    // **Linhas 9 a 12**
    // Se o chute do usuário for menor ou maior que o número secreto, o código exibe uma mensagem de feedback.
    // Também é incrementado o número de tentativas.
    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

// **Linha 13**
// Define uma variável para armazenar a palavra "tentativa" ou "tentativas" dependendo do número de tentativas.
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// **Linha 14**
// Exibe uma mensagem de vitória, incluindo o número secreto e o número de tentativas.
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);