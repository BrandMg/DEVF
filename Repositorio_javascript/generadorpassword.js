function generarpassword(){

    const longitud = document.getElementById("largo").value;
    const op_mayuscula = document.getElementById("mayusculas").checked;
    const op_minuscula = document.getElementById("minusculas").checked;
    const op_numero = document.getElementById("numeros").checked;
    const op_simbolo = document.getElementById("simbolos").checked;

    let caracteres = "";
    let password = "";

    if(op_mayuscula) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(op_minuscula) caracteres += "abcdefghijklmnopqrstuvwxyz";
    if(op_numero) caracteres += "0123456789";
    if(op_simbolo) caracteres += "!@#$%^&*()_+";

    if(caracteres === ""){
        alert("Selecciona al menos una opción");
        return;
    }

    if(longitud < 4 || longitud > 20){
        alert("La longitud debe estar entre 4 y 20");
        return;
    }

    for(let i = 0; i < longitud; i++){
        const Indicerandom = Math.floor(Math.random() * caracteres.length);
        password += caracteres[Indicerandom];
    }

    document.getElementById("password").value = password;
}
