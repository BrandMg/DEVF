import './style.css';

const numeroSecreto = Math.floor(Math.random() * 50) + 1;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');

let intentos = 0;
const maxIntentos = 5;

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 50) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 50.';
        return;
    }

    intentos++;

    if (numeroJugador === numeroSecreto) {
        mensaje.textContent = `¡Felicidades! ¡Adivinaste el número en ${intentos} intento(s)!`;
        botonAdivinar.disabled = true;
    } 
 
    else if (intentos < maxIntentos) {

        if (numeroJugador < numeroSecreto) {
            mensaje.textContent = `El número es más alto. Intento ${intentos} de ${maxIntentos}.`;
        } else {
            mensaje.textContent = `El número es más bajo. Intento ${intentos} de ${maxIntentos}.`;
        }

    } 
    else {
        mensaje.textContent = `Perdiste. El número correcto era ${numeroSecreto}.`;
        botonAdivinar.disabled = true;
    }

    inputNumero.value = '';
});