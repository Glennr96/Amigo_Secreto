let = listaAmigos = []; // cria a lista
// função para adiocionar o nome digitado pelo usuário à lista de amigos.

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
    if (nome === "") {
        alert ('Por favor, insira um nome.');
        return;
    }
    // Formatar: primeira letra maiúscula + resto minúsculo
    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

    // verifica se o nome é repetido
    if (listaAmigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }
    listaAmigos.push(nome); // adiciona o nome na lista
    atualizarLista();
    document.getElementById("amigo").value = "";
}

function atualizarLista() {
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = ""; // Limpa a lista antes de atualizar

            // Criar um <li> para cada amigo
            listaAmigos.forEach(function(amigo) {
                let item = document.createElement("li");
                item.textContent = amigo;
                lista.appendChild(item);
            });
        }

        function sortearAmigo() {
            // Validar se há nomes na lista
            if (listaAmigos.length === 0) {
                alert("Nenhum amigo adicionado ainda.");
                return;
            }

            // Gerar índice aleatório
            let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

            // Obter o nome sorteado
            let amigoSorteado = listaAmigos[indiceAleatorio];

            // Mostrar resultado na tela
            document.getElementById("resultado").innerHTML = "🎉 O amigo sorteado foi: <b>" + amigoSorteado + "</b>";
        }