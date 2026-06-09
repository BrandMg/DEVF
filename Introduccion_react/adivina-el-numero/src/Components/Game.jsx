import { useState } from "react";
import InputNumber from "./InputNumber";
import Message from "./Message";
import RestartButton from "./RestartButton";

function Game() {

  const generarNumero = () =>
    Math.floor(Math.random() * 100) + 1;

  const [numeroSecreto, setNumeroSecreto] =
    useState(generarNumero());

  const [numeroIngresado, setNumeroIngresado] =
    useState("");

  const [mensaje, setMensaje] =
    useState("Adivina un numero entre 1 y 100");

  const [intentos, setIntentos] =
    useState(0);

  const verificarNumero = () => {

    const numero = Number(numeroIngresado);

    if (!numero) {
      setMensaje("Ingresa un numero valido");
      return;
    }

    setIntentos(intentos + 1);

    if (numero === numeroSecreto) {
      setMensaje("Correcto");
    } else if (numero < numeroSecreto) {
      setMensaje("El numero es mayor");
    } else {
      setMensaje("El numero es menor");
    }

    setNumeroIngresado("");
  };

  const reiniciarJuego = () => {
    setNumeroSecreto(generarNumero());
    setNumeroIngresado("");
    setMensaje("Adivina un numero entre 1 y 100");
    setIntentos(0);
  };

  return (
    <div className="game">

      <h1>Adivina el Nmero</h1>

      <p>Intentos: {intentos}</p>

      <InputNumber
        value={numeroIngresado}
        onChange={setNumeroIngresado}
      />

      <button onClick={verificarNumero}>
        Verificar
      </button>

      <Message mensaje={mensaje} />

      <RestartButton
        onRestart={reiniciarJuego}
      />

    </div>
  );
}

export default Game;