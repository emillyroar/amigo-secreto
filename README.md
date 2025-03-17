# Amigo Secreto

Este projeto implementa uma versão simples de um sorteio de Amigo Secreto, onde o usuário pode adicionar amigos a uma lista e, em seguida, realizar o sorteio aleatório dos amigos. O sistema também exibe a lista de amigos e o resultado do sorteio na interface do usuário.

## Funcionalidades

- Adicionar nomes de amigos à lista.
- Exibir a lista de amigos.
- Sortear um amigo aleatoriamente.
- Validar entradas e garantir que o sorteio só ocorra se houver amigos cadastrados.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página web.
- **CSS**: Estilos básicos para a interface (opcional, você pode personalizar os estilos).
- **JavaScript**: Lógica para adicionar amigos, realizar o sorteio e atualizar a interface.

## Como Usar

### Pré-requisitos

Certifique-se de ter um navegador moderno (como Chrome, Firefox, Edge, etc.) para visualizar e interagir com o projeto.

### Instruções

1. **Clone o repositório**:
   Se você ainda não tem o projeto localmente, clone-o para sua máquina com o seguinte comando:

   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
   
Abra o projeto: Navegue até a pasta do projeto e abra o arquivo index.html no seu navegador.
cd amigo-secreto
open index.html # ou apenas abra no navegador de sua escolha

### Adicione amigos:
Digite o nome de um amigo no campo de texto e clique no botão Adicionar.
O nome será adicionado à lista abaixo do campo de entrada.

### Realize o sorteio:
Clique no botão Sortear amigo para sortear um amigo aleatoriamente da lista.
O resultado do sorteio será exibido logo abaixo da lista de amigos.

### Funções
Adicionar amigo: A função adicionarAmigo() captura o nome digitado, valida a entrada e adiciona ao array amigos.
Sortear amigo: A função sortearAmigo() sorteia aleatoriamente um amigo da lista de amigos e exibe o resultado.
Exibição da lista: A função atualizarListaAmigos() percorre o array amigos e exibe cada nome na lista de amigos.

## Estrutura do Projeto
A estrutura do projeto é a seguinte:
amigo-secreto/
├── index.html         # Página HTML principal
├── style.css          # Arquivo de estilos (opcional)
├── app.js             # Lógica do JavaScript
└── assets/            # Imagens e ícones do projeto
    ├── amigo-secreto.png
    └── play_circle_outline.png
    
Descrição dos Arquivos
index.html: Arquivo HTML que contém a estrutura básica da página, incluindo os campos de entrada e botões.
style.css: Arquivo CSS para estilização da página (opcional e personalizável).
app.js: Arquivo JavaScript que contém a lógica do projeto, incluindo a manipulação do DOM, validação e sorteio.
assets/: Pasta contendo imagens e ícones usados no projeto.

### Como Contribuir
Faça um fork deste repositório.
Crie uma branch para a sua feature (git checkout -b minha-nova-feature).
Realize as alterações e faça o commit (git commit -am 'Adiciona nova feature').
Envie para o repositório remoto (git push origin minha-nova-feature).
Abra um pull request para revisão.

### Problemas Comuns
O botão de sorteio não está funcionando: Verifique se a lista de amigos contém pelo menos dois nomes. O sorteio só é realizado quando existem amigos cadastrados.
O nome não está sendo adicionado à lista: Certifique-se de que o campo de texto não está vazio e que o botão de adicionar está chamando a função correta.
