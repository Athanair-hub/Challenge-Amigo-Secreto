// Variáveis para armazenar os nomes dos amigos e os resultados do sorteio
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const entradaAmigo = document.getElementById('amigo');
    const nomeAmigo = entradaAmigo.value.trim();

    if (nomeAmigo !== '') {
        if (!amigos.includes(nomeAmigo)) {
            amigos.push(nomeAmigo);
            atualizarListaAmigos();
            entradaAmigo.value = '';
        } else {
            alert('Este nome já foi adicionado à lista de amigos.');
        }
    } else {
        alert('Por favor, digite um nome de amigo válido.');
    }
}

// Função para atualizar a lista de amigos no HTML
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Você precisa adicionar pelo menos dois amigos para realizar o sorteio.');
        return;
    }

    // Clona o array de amigos para evitar alterações na lista original
    const listaSorteio = amigos.slice();
    embaralhar(listaSorteio);

    // Sorteia um amigo secreto aleatório
    const indiceAleatorio = Math.floor(Math.random() * listaSorteio.length);
    const amigoAleatorio = listaSorteio[indiceAleatorio];
    const proximoAmigo = indiceAleatorio === listaSorteio.length - 1 ? listaSorteio[0] : listaSorteio[indiceAleatorio + 1];

    // Exibe o resultado do sorteio
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';
    const item = document.createElement('li');
    item.textContent = `${amigoAleatorio} --> ${proximoAmigo}`;
    listaResultado.appendChild(item);
}

// Função para embaralhar o array de amigos
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
