// Obtém o formulário e a área de resultados
const form = document.getElementById('pesquisaForm');
const resultadosDiv = document.getElementById('resultados');

// Adiciona um "ouvinte de evento" para o envio do formulário
form.addEventListener('submit', function(event) {
    // Evita o comportamento padrão do formulário de recarregar a página
    event.preventDefault();

    // Obtém o texto do feedback
    const feedbackText = document.getElementById('feedback').value;

    // Limpa o texto: converte para minúsculas e remove pontuação
    const palavras = feedbackText
        .toLowerCase()
        .replace(/[.,?!]/g, '')
        .split(/\s+/); // Divide o texto em um array de palavras

    // Cria um objeto para contar as palavras
    const contadorDePalavras = {};

    // Itera sobre o array de palavras para contar a frequência
    palavras.forEach(palavra => {
        if (palavra) { // Garante que a palavra não está vazia
            if (contadorDePalavras[palavra]) {
                contadorDePalavras[palavra]++;
            } else {
                contadorDePalavras[palavra] = 1;
            }
        }
    });

    // Chama a função para exibir os resultados
    exibirResultados(contadorDePalavras);
});

// Função para exibir o resultado na tela
function exibirResultados(contador) {
    // Limpa o conteúdo anterior
    resultadosDiv.innerHTML = '<h2>Principais palavras</h2>';

    // Converte o objeto em um array de pares [palavra, contagem]
    const palavrasOrdenadas = Object.entries(contador);

    // Ordena o array pela contagem, do maior para o menor
    palavrasOrdenadas.sort((a, b) => b[1] - a[1]);

    // Cria uma lista e adiciona cada palavra e sua contagem
    const lista = document.createElement('ul');
    palavrasOrdenadas.forEach(([palavra, contagem]) => {
        const item = document.createElement('li');
        item.textContent = `${palavra}: ${contagem}`;
        lista.appendChild(item);
    });

    resultadosDiv.appendChild(lista);
}