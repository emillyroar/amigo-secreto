// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const nomeAmigo = document.getElementById('amigo').value.trim();

    // Valida se o campo não está vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return; // Não faz nada se o campo estiver vazio
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    document.getElementById('amigo').value = '';

    // Atualiza a lista de amigos na página
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos exibida na página
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista atual

    // Cria uma nova lista de amigos
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Você precisa de pelo menos 2 amigos para sortear.");
        return;
    }

    let amigosSorteados = [...amigos];
    let resultado = [];

    // Realiza o sorteio, garantindo que ninguém tire a si mesmo
    amigos.forEach(amigo => {
        let indiceAleatorio;
        do {
            indiceAleatorio = Math.floor(Math.random() * amigosSorteados.length);
        } while (amigosSorteados[indiceAleatorio] === amigo); // Evita tirar a si mesmo

        const sorteado = amigosSorteados.splice(indiceAleatorio, 1)[0];
        resultado.push(`${amigo} sorteou ${sorteado}`);
    });

    // Exibe os resultados
    exibirResultado(resultado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(resultado) {
    const resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = ''; // Limpa resultados anteriores

    resultado.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        resultadoList.appendChild(li);
    });
}
// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    // Obter o elemento da lista
    const lista = document.getElementById('listaAmigos');
    
    // Limpar a lista existente
    lista.innerHTML = "";

    // Percorrer o array 'amigos' e adicionar um <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        // Criar um novo elemento <li>
        const li = document.createElement('li');
        
        // Definir o texto do <li> como o nome do amigo
        li.textContent = amigos[i];
        
        // Adicionar o novo <li> à lista
        lista.appendChild(li);
    }
}
// Função para sortear um amigo aleatório
function sortearAmigo() {
    // Verificar se o array 'amigos' não está vazio
    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
        return; // Se não houver amigos, não faz o sorteio
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado usando o índice aleatório
    const amigoSorteado = amigos[indiceAleatorio];

    // Atualizar o conteúdo do elemento de resultado para exibir o amigo sorteado
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}
