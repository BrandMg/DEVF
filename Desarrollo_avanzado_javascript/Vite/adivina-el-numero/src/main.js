import './style.css';

const numeroSecreto = Math.floor(Math.random() * 50) + 1;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 50) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 50.';
    } else if (numeroJugador === numeroSecreto) {
        mensaje.textContent = '¡Felicidades! ¡Adivinaste el número!';
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = 'El número es más alto.';
    } else {
        mensaje.textContent = 'El número es más bajo.';
    }
});