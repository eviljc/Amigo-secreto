// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];  


function agregarAmigo() {
    let nombreInput = document.getElementById("amigo").value;  

    if (nombreInput.trim() === "") {  
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreInput);  
        document.getElementById("amigo").value = "";  
        actualizarListaDeAmigos();  
    }
}


function actualizarListaDeAmigos() {
    let lista = document.getElementById("listaAmigos");  
    lista.innerHTML = "";  

    amigos.forEach((amigo) => {
        let li = document.createElement("li");  
        li.textContent = amigo;  
        lista.appendChild(li);  
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {  
        alert("No hay amigos disponibles para sortear.");
        return;  
    }

    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    
    let amigoSorteado = amigos[indiceAleatorio];

    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}


window.onload = function() {
    actualizarListaDeAmigos(); 
};
