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
// Acessa os elementos do HTML que vamos usar
const entradaDeTexto = document.querySelector("#entrada-de-texto");
const resultadoDiv = document.querySelector("#resultado-palavrachave");
const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

// Adiciona um "ouvinte" de clique ao botão para executar a função
botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
  // 1. Pega o texto da área de texto
  const textoOriginal = entradaDeTexto.value;

  // 2. Transforma o texto para minúsculas e remove pontuação
  const textoLimpo = textoOriginal.toLowerCase().replace(/[.,?!;]/g, '');

  // 3. Divide o texto em um array de palavras e filtra palavras vazias
  const palavras = textoLimpo.split(/\s+/).filter(palavra => palavra.length > 0);

  // 4. Cria um objeto para contar a frequência de cada palavra
  const contadorDePalavras = {};
  palavras.forEach(palavra => {
    if (contadorDePalavras[palavra]) {
      contadorDePalavras[palavra]++;
    } else {
      contadorDePalavras[palavra] = 1;
    }
  });

  // 5. Converte o objeto em um array de arrays e ordena por frequência
  const palavrasOrdenadas = Object.entries(contadorDePalavras);
  palavrasOrdenadas.sort((a, b) => b[1] - a[1]);

  // 6. Limpa o conteúdo anterior e cria a lista de resultados
  resultadoDiv.innerHTML = '';
  
  const lista = document.createElement('ul');
  palavrasOrdenadas.forEach(([palavra, contagem]) => {
    const item = document.createElement('li');
    item.textContent = `${palavra}: ${contagem}`;
    lista.appendChild(item);
  });

  // 7. Adiciona a lista de resultados na página
  resultadoDiv.appendChild(lista);
}
const palavras = texto.split(" ");
campoResultado.textContent = palavras.join(", ");
// Remove a parte de separar por espaço e junta com vírgula, e adiciona a lógica de contagem
const palavras = texto.toLowerCase().split(/\s+/);

// Objeto para contar as palavras
const contadorDePalavras = {};
palavras.forEach(palavra => {
  if (palavra) {
    if (contadorDePalavras[palavra]) {
      contadorDePalavras[palavra]++;
    } else {
      contadorDePalavras[palavra] = 1;
    }
  }
});

// Transforma o objeto em um array e ordena
const palavrasOrdenadas = Object.entries(contadorDePalavras);
palavrasOrdenadas.sort((a, b) => b[1] - a[1]);

// Exibe o resultado de uma forma mais visual
campoResultado.innerHTML = ""; // Limpa o conteúdo anterior
const lista = document.createElement("ul");
palavrasOrdenadas.forEach(([palavra, contagem]) => {
  const item = document.createElement("li");
  item.textContent = `${palavra}: ${contagem}`;
  lista.appendChild(item);
});
campoResultado.appendChild(lista);
// Acessa os elementos do HTML que vamos usar
const botaoMostraPalavras = document.querySelector("#botao-palavrachave");
const entradaDeTexto = document.querySelector("#entrada-de-texto");
const campoResultado = document.querySelector("#resultado-palavrachave");

// Adiciona um "ouvinte" de clique ao botão para executar a função
botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

// ---

function mostraPalavrasChave() {
  // 1. Pega o texto da área de texto
  const textoOriginal = entradaDeTexto.value;

  // 2. Processa o texto usando a função com regex
  const palavras = processaTexto(textoOriginal);

  // 3. Cria um objeto para contar a frequência de cada palavra
  const contadorDePalavras = {};
  palavras.forEach(palavra => {
    // Garante que a palavra não é vazia e tem mais de 1 caractere
    if (palavra.length > 1) { 
      if (contadorDePalavras[palavra]) {
        contadorDePalavras[palavra]++;
      } else {
        contadorDePalavras[palavra] = 1;
      }
    }
  });

  // 4. Converte o objeto em um array de arrays e ordena por frequência
  const palavrasOrdenadas = Object.entries(contadorDePalavras);
  palavrasOrdenadas.sort((a, b) => b[1] - a[1]);

  // 5. Exibe o resultado de uma forma mais visual
  campoResultado.innerHTML = ''; // Limpa o conteúdo anterior
  
  const lista = document.createElement('ul');
  palavrasOrdenadas.forEach(([palavra, contagem]) => {
    const item = document.createElement('li');
    item.textContent = `${palavra}: ${contagem}`;
    lista.appendChild(item);
  });

  // 6. Adiciona a lista de resultados na página
  campoResultado.appendChild(lista);
}

// ---

function processaTexto(texto) {
  // Transforma o texto para minúsculas
  const textoLimpo = texto.toLowerCase();

  // Divide o texto em um array de palavras, removendo pontuação e espaços
  // A regex /\P{L}+/u lida com acentos e caracteres de diferentes idiomas
  let palavras = textoLimpo.split(/\P{L}+/u);

  // Filtra o array para remover palavras vazias
  return palavras.filter(Boolean);
}
// Acessa os elementos do HTML que vamos usar
const botaoMostraPalavras = document.querySelector("#botao-palavrachave");
const entradaDeTexto = document.querySelector("#entrada-de-texto");
const campoResultado = document.querySelector("#resultado-palavrachave");

// Adiciona um "ouvinte" de clique ao botão para executar a função
botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

// ---

function mostraPalavrasChave() {
  // Pega o texto da área de texto
  const textoOriginal = entradaDeTexto.value;

  // Processa o texto para obter um objeto com a frequência das palavras
  const contadorDePalavras = processaTexto(textoOriginal);

  // Converte o objeto em um array de arrays e ordena por frequência
  const palavrasOrdenadas = Object.entries(contadorDePalavras);
  palavrasOrdenadas.sort((a, b) => b[1] - a[1]);

  // Exibe o resultado de forma visual na página
  exibirResultados(palavrasOrdenadas);
}

// ---

function processaTexto(texto) {
  // Transforma o texto para minúsculas
  const textoLimpo = texto.toLowerCase();
  
  // Divide o texto em um array de palavras, removendo pontuação e espaços
  const palavras = textoLimpo.split(/\P{L}+/u).filter(Boolean);

  // Cria um objeto para contar a frequência de cada palavra
  const contadorDePalavras = {};
  palavras.forEach(palavra => {
    // Garante que a palavra não é vazia e tem mais de 1 caractere
    if (palavra.length > 1) {
      // Se a palavra já existe no objeto, incrementa a contagem
      if (contadorDePalavras[palavra]) {
        contadorDePalavras[palavra]++;
      } else {
        // Se a palavra não existe, a cria com contagem 1
        contadorDePalavras[palavra] = 1;
      }
    }
  });

  return contadorDePalavras;
}

// ---

function exibirResultados(palavras) {
  // Limpa o conteúdo anterior da área de resultados
  campoResultado.innerHTML = '';
  
  const lista = document.createElement('ul');
  palavras.forEach(([palavra, contagem]) => {
    const item = document.createElement('li');
    item.textContent = `${palavra}: ${contagem}`;
    lista.appendChild(item);
  });

  // Adiciona a lista de resultados na página
  campoResultado.appendChild(lista);
}
// Acessa os elementos do HTML que vamos usar
const botaoMostraPalavras = document.querySelector("#botao-palavrachave");
const entradaDeTexto = document.querySelector("#entrada-de-texto");
const campoResultado = document.querySelector("#resultado-palavrachave");

// Adiciona um "ouvinte" de clique ao botão para executar a função
botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

// ---

function mostraPalavrasChave() {
  // Pega o texto da área de texto
  const textoOriginal = entradaDeTexto.value;

  // Processa o texto para obter um objeto com a frequência das palavras
  const contadorDePalavras = contaFrequencias(textoOriginal);

  // Ordena as palavras e limita o resultado para as 10 mais frequentes
  const palavrasOrdenadas = Object.entries(contadorDePalavras)
    .sort((a, b) => b[1] - a[1]) // Ordena do maior para o menor
    .slice(0, 10); // Limita o resultado para as 10 primeiras

  // Exibe o resultado de forma visual na página
  exibirResultados(palavrasOrdenadas);
}

// ---

function contaFrequencias(texto) {
  // Transforma o texto para minúsculas e divide em palavras
  const palavras = texto.toLowerCase().split(/\P{L}+/u).filter(Boolean);

  // Cria um objeto para contar a frequência de cada palavra
  const frequencias = {};
  palavras.forEach(palavra => {
    // Garante que a palavra não é vazia e tem mais de 1 caractere
    if (palavra.length > 1) {
      if (frequencias[palavra]) {
        frequencias[palavra]++;
      } else {
        frequencias[palavra] = 1;
      }
    }
  });

  return frequencias;
}

// ---

function exibirResultados(palavras) {
  // Limpa o conteúdo anterior da área de resultados
  campoResultado.innerHTML = '';
  
  const lista = document.createElement('ul');
  palavras.forEach(([palavra, contagem]) => {
    const item = document.createElement('li');
    item.textContent = `${palavra}: ${contagem}`;
    lista.appendChild(item);
  });

  // Adiciona a lista de resultados na página
  campoResultado.appendChild(lista);
}
// Acessa os elementos do HTML que vamos usar
const botaoMostraPalavras = document.querySelector("#botao-palavrachave");
const entradaDeTexto = document.querySelector("#entrada-de-texto");
const campoResultado = document.querySelector("#resultado-palavrachave");

// Adiciona um "ouvinte" de clique ao botão para executar a função
botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

// ---

function mostraPalavrasChave() {
  // Pega o texto da área de texto
  const textoOriginal = entradaDeTexto.value;

  // Processa o texto para obter um objeto com a frequência das palavras
  const contadorDePalavras = contaFrequencias(textoOriginal);

  // Ordena as palavras e limita o resultado para as 10 mais frequentes
  const palavrasOrdenadas = Object.entries(contadorDePalavras)
    .sort((a, b) => b[1] - a[1]) // Ordena do maior para o menor
    .slice(0, 10); // Limita o resultado para as 10 primeiras

  // Exibe o resultado de forma visual na página
  exibirResultados(palavrasOrdenadas);
}

// ---

function contaFrequencias(texto) {
  // Padroniza para minúsculas e divide em palavras, removendo pontuação
  const palavras = texto.toLowerCase().split(/\P{L}+/u).filter(Boolean);

  // Filtra as palavras irrelevantes antes de começar a contagem
  const palavrasFiltradas = tiraPalavrasRuins(palavras);

  // Cria um objeto para contar a frequência de cada palavra
  const frequencias = {};
  palavrasFiltradas.forEach(palavra => {
    // Incrementa a contagem se a palavra já existe, senão a cria com contagem 1
    if (frequencias[palavra]) {
      frequencias[palavra]++;
    } else {
      frequencias[palavra] = 1;
    }
  });

  return frequencias;
}

// ---

function tiraPalavrasRuins(palavras) {
  // Lista de palavras a serem ignoradas
  const PALAVRAS_RUINS = new Set(["para", "uma", "nós", "que", "de", "e", "os"]);

  // Filtra o array, mantendo apenas as palavras que não estão na lista de ruins
  // e que possuem mais de 2 letras
  return palavras.filter(palavra => !PALAVRAS_RUINS.has(palavra) && palavra.length > 2);
}

// ---

function exibirResultados(palavras) {
  // Limpa o conteúdo anterior da área de resultados
  campoResultado.innerHTML = '';
  
  const lista = document.createElement('ul');
  palavras.forEach(([palavra, contagem]) => {
    const item = document.createElement('li');
    item.textContent = `${palavra}: ${contagem}`;
    lista.appendChild(item);
  });

  // Adiciona a lista de resultados na página
  campoResultado.appendChild(lista);
}
import { PALAVRAS_RUINS } from "./palavrasRuins.js";

// Acessa os elementos do HTML que vamos usar
const botaoMostraPalavras = document.querySelector("#botao-palavrachave");
const entradaDeTexto = document.querySelector("#entrada-de-texto");
const campoResultado = document.querySelector("#resultado-palavrachave");

// Adiciona um "ouvinte" de clique ao botão para executar a função
botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

// ---

function mostraPalavrasChave() {
  // Pega o texto da área de texto
  const textoOriginal = entradaDeTexto.value;

  // Processa o texto para obter um objeto com a frequência das palavras
  const contadorDePalavras = contaFrequencias(textoOriginal);

  // Ordena as palavras e limita o resultado para as 10 mais frequentes
  const palavrasOrdenadas = Object.entries(contadorDePalavras)
    .sort((a, b) => b[1] - a[1]) // Ordena do maior para o menor
    .slice(0, 10); // Limita o resultado para as 10 primeiras

  // Exibe o resultado de forma visual na página
  exibirResultados(palavrasOrdenadas);
}

// ---

function contaFrequencias(texto) {
  // Padroniza para minúsculas e divide em palavras, removendo pontuação
  const palavras = texto.toLowerCase().split(/\P{L}+/u).filter(Boolean);

  // Filtra as palavras irrelevantes usando a lista importada
  const palavrasFiltradas = tiraPalavrasRuins(palavras);

  // Cria um objeto para contar a frequência de cada palavra
  const frequencias = {};
  palavrasFiltradas.forEach(palavra => {
    // Incrementa a contagem se a palavra já existe, senão a cria com contagem 1
    if (frequencias[palavra]) {
      frequencias[palavra]++;
    } else {
      frequencias[palavra] = 1;
    }
  });

  return frequencias;
}

// ---

function tiraPalavrasRuins(palavras) {
  // Retorna um novo array filtrado
  return palavras.filter(palavra => !PALAVRAS_RUINS.has(palavra) && palavra.length > 2);
}

// ---

function exibirResultados(palavras) {
  // Limpa o conteúdo anterior da área de resultados
  campoResultado.innerHTML = '';
  
  const lista = document.createElement('ul');
  palavras.forEach(([palavra, contagem]) => {
    const item = document.createElement('li');
    item.textContent = `${palavra}: ${contagem}`;
    lista.appendChild(item);
  });

  // Adiciona a lista de resultados na página
  campoResultado.appendChild(lista);
}
import { PALAVRAS_RUINS } from "./palavrasRuins.js";

// Acessa os elementos do HTML que vamos usar
const botaoMostraPalavras = document.querySelector("#botao-palavrachave");
const entradaDeTexto = document.querySelector("#entrada-de-texto");
const campoResultado = document.querySelector("#resultado-palavrachave");

// Adiciona um "ouvinte" de clique ao botão para executar a função
botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

// ---

function mostraPalavrasChave() {
  // Pega o texto da área de texto
  const textoOriginal = entradaDeTexto.value;

  // Processa o texto para obter um objeto com a frequência das palavras
  const contadorDePalavras = contaFrequencias(textoOriginal);

  // Ordena as palavras e limita o resultado para as 10 mais frequentes
  const palavrasOrdenadas = Object.entries(contadorDePalavras)
    .sort((a, b) => b[1] - a[1]) // Ordena do maior para o menor
    .slice(0, 10); // Limita o resultado para as 10 primeiras

  // Exibe o resultado de forma visual na página
  exibirResultados(palavrasOrdenadas);
}

// ---

function contaFrequencias(texto) {
  // Padroniza para minúsculas e divide em palavras, removendo pontuação
  const palavras = texto.toLowerCase().split(/\P{L}+/u).filter(Boolean);

  // Filtra as palavras irrelevantes usando a lista importada
  const palavrasFiltradas = tiraPalavrasRuins(palavras);

  // Cria um objeto para contar a frequência de cada palavra
  const frequencias = {};
  palavrasFiltradas.forEach(palavra => {
    // Incrementa a contagem se a palavra já existe, senão a cria com contagem 1
    if (frequencias[palavra]) {
      frequencias[palavra]++;
    } else {
      frequencias[palavra] = 1;
    }
  });

  return frequencias;
}

// ---

function tiraPalavrasRuins(palavras) {
  // Retorna um novo array filtrado
  return palavras.filter(palavra => !PALAVRAS_RUINS.has(palavra) && palavra.length > 2);
}

// ---

function exibirResultados(palavras) {
  // Limpa o conteúdo anterior da área de resultados
  campoResultado.innerHTML = '';
  
  const lista = document.createElement('ul');
  palavras.forEach(([palavra, contagem]) => {
    const item = document.createElement('li');
    item.textContent = `${palavra}: ${contagem}`;
    lista.appendChild(item);
  });

  // Adiciona a lista de resultados na página
  campoResultado.appendChild(lista);
}