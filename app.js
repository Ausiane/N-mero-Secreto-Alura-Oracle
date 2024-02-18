// Variáveis
let listaDeNumerosSorteados = []; // Array para armazenar números já sorteados (não utilizado nesta versão)
let numeroLimite = 10; // Define o limite superior para o número secreto (10 neste caso)
let numeroSecreto = gerarNumeroAleatorio(); // Armazena o número secreto gerado aleatoriamente
let tentativas = 1; // Contador que registra o número de tentativas feitas pelo jogador

// Funções
function exibirTextoNaTela(tag, texto) {
    // Exibe texto na tela e fala em português usando a biblioteca responsiveVoice
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exibirMensagemInicial() {
    // Exibe o título do jogo e a instrução para o jogador escolher um número
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    // Lê o chute do jogador, verifica se ele acertou o número secreto e fornece feedback
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        // Jogador acertou!
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // Jogador errou!
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++; // Incrementa o contador de tentativas
        limparCampo(); // Limpa o campo de chute
    }
}
// Função para gerar um número aleatório entre 1 e o limite especificado
function gerarNumeroAleatorio() {

    // Variável para armazenar o número aleatório gerado
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    // Quantidade de elementos na lista de números sorteados
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    // Se a lista estiver cheia, esvazia-a
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    // Se o número já estiver na lista, gera outro
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        // Adiciona o número à lista
        listaDeNumerosSorteados.push(numeroEscolhido);

        // Exibe a lista de números sorteados no console
        console.log(listaDeNumerosSorteados);

        // Retorna o número escolhido
        return numeroEscolhido;
    }
}

// Função para limpar o campo de chute
function limparCampo() {
    // Obtém o elemento de input do chute
    let chute = document.querySelector('input');

    // Limpa o valor do campo
    chute.value = '';
}

// Função para reiniciar o jogo
function reiniciarJogo() {

    // Gera um novo número secreto
    numeroSecreto = gerarNumeroAleatorio();

    // Limpa o campo de chute
    limparCampo();

    // Reseta a contagem de tentativas
    tentativas = 1;

    // Exibe a mensagem inicial
    exibirMensagemInicial();

    // Desabilita o botão de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', true);
}