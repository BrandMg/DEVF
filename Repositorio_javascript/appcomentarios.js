function agregarcomentario(){

    const input = document.getElementById("input_comentario");
    const texto_comentario = input.value;

    if(texto_comentario === ""){
        alert("Escribe un comentario");
        return;
    }

    const seccion_comentarios = document.getElementById("seccion_comentarios");

    const Divcomentario = document.createElement("div");
    Divcomentario.classList.add("comentario");

    const date = new Date();
    const dateTime = date.toLocaleString();

    Divcomentario.innerHTML = `
        <small>${dateTime}</small>
        <p>${texto_comentario}</p>
        <button class="boton_borrar" onclick="eliminarcomentario(this)">Eliminar</button>
    `;

    seccion_comentarios.appendChild(Divcomentario);

    input.value = "";
}

function eliminarcomentario(button){
    button.parentElement.remove();
}