let = listaAmigos = []
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
    if (nome === "") {
        alert ('Por favor, insira um nome.');
        return;
    }
    if (listaAmigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }
    listaAmigos.push(nome);
    atualizarLista();
    document.getElementById("amigo").value = ""
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