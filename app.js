let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
    } else if (amigos.includes(nombre)) {
        alert('Ese nombre ya está en la lista.');
    } else {
        amigos.push(nombre);
        actualizarLista();
        limpiarCaja();
    }
}

function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Debe haber al menos un participante.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSecreto}</strong></li>`;
}

