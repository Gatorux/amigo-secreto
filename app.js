let amigos = [];

function agregarAmigo() {
    let persona = document.getElementById("amigo").value.trim();
    if (persona === "") {
        alert = "Ingrese un nombre válido por favor."
    } else {
        amigos.push(persona);
        document.getElementById("amigo").value = "";
        lista();
    }
}

function lista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaHTML.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos seleccionados.");
        return;
        } else {
            document.getElementById("listaAmigos").innerHTML = "";
            let amigoSecreto = Math.floor(Math.random()*(amigos.length-1));
            document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigos[amigoSecreto]}`;
        }
} 