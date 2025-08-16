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
    document.getElementById("amigo").value = ""
}