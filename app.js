// Variável para armazenar o número secreto gerado aleatoriamente
let numeroSecreto = gerarNumeroAleatorio();

// Variável para contar o número de tentativas
let tentativas = 1;

// Função para exibir texto na tela
function exibirTextoNaTela(tag, texto) {
    // Obtém o elemento da DOM com a tag especificada
    let campo = document.querySelector(tag);

    // Define o conteúdo textual do elemento
    campo.innerHTML = texto;
}

// Função para exibir a mensagem inicial do jogo
function exibirMensagemInicial() {
    // Exibe o título do jogo
    exibirTextoNaTela('h1', 'Jogo do número secreto');

    // Exibe a instrução para o jogador
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

// Função para verificar o chute do jogador
function verificarChute() {
    // Obtém o valor do chute do jogador
    let chute = document.querySelector('input').value;

    // Verifica se o chute é igual ao número secreto
    if (chute == numeroSecreto) {
        // Exibe mensagem de acerto
        exibirTextoNaTela('h1', 'Acertou!');

        // Define a palavra "tentativa" no singular ou plural
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        // Cria a mensagem com o número de tentativas
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;

        // Exibe a mensagem com o número de tentativas
        exibirTextoNaTela('p', mensagemTentativas);

        // Habilita o botão de reiniciar o jogo
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // Verifica se o chute é maior ou menor que o número secreto
        if (chute > numeroSecreto) {
            // Exibe mensagem que o número secreto é menor
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            // Exibe mensagem que o número secreto é maior
            exibirTextoNaTela('p', 'O número secreto é maior');
        }

        // Incrementa o número de tentativas
        tentativas++;

        // Limpa o campo de chute
        limparCampo();
    }
}

// Função para gerar um número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
    // Retorna um número inteiro aleatório entre 1 e 10
    return parseInt(Math.random() * 10 + 1);
}

// Função para limpar o campo de chute
function limparCampo() {
    // Obtém o elemento do campo de chute
    chute = document.querySelector('input');

    // Apaga o valor do campo
    chute.value = '';
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    // Gera um novo número secreto
    numeroSecreto = gerarNumeroAleatorio();

    // Limpa o campo de chute
    limparCampo();

    // Reseta o número de tentativas
    tentativas = 1;

    // Exibe a mensagem inicial
    exibirMensagemInicial();

    // Desabilita o botão de reiniciar o jogo
    document.getElementById('reiniciar').setAttribute('disabled', true);
}