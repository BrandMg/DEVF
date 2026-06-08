import React, { useState, useEffect, useMemo, useRef } from "react";
import Planeta from "./Planeta";
import "./App.css";

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En orbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  // Estados de la bitacora
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [planetaSeleccionado, setPlanetaSeleccionado] = useState(null);
  const [indiceEditar, setIndiceEditar] = useState(null);

  const inputImagenRef = useRef(null);

  // Cargar datos del localStorage
  useEffect(() => {
    const datosGuardados =
      JSON.parse(localStorage.getItem("bitacoraPlanetas")) || [];

    setPlanetasVisitados(datosGuardados);
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem(
      "bitacoraPlanetas",
      JSON.stringify(planetasVisitados)
    );
  }, [planetasVisitados]);

  // Montaje y desmontaje del panel
  useEffect(() => {
    console.log("El panel de control esta listo");

    const intervalo = setInterval(() => {
      setCombustible((prev) => (prev > 0 ? prev - 1 : 0));
      setDistancia((prev) => prev + 10);
    }, 1000);

    return () => {
      clearInterval(intervalo);
      console.log("El panel de control se ha apagado.");
    };
  }, []);

  // Actualizacion del combustible
  useEffect(() => {
    console.log("Combustible actualizado");
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado actual: ${estadoNave}`;
  }, [estadoNave]);

  // Simular aterrizaje
  const aterrizar = () => {
    const nombrePlaneta = `Planeta-${planetasVisitados.length + 1}`;

    setEstadoNave("Aterrizando");

    const nuevoPlaneta = {
      nombre: nombrePlaneta,
      descripcion: "Planeta descubierto durante la misión.",
      imagen: null,
    };

    setPlanetasVisitados((prev) => [...prev, nuevoPlaneta]);
  };

  // Guardar planeta
  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoPlaneta = {
      nombre,
      descripcion,
      imagen: imagen ? URL.createObjectURL(imagen) : null,
    };

    if (indiceEditar !== null) {
      const copia = [...planetasVisitados];
      copia[indiceEditar] = nuevoPlaneta;
      setPlanetasVisitados(copia);
      setIndiceEditar(null);
    } else {
      setPlanetasVisitados([...planetasVisitados, nuevoPlaneta]);
    }

    limpiarFormulario();
  };

  const limpiarFormulario = () => {
    setNombre("");
    setDescripcion("");
    setImagen(null);

    if (inputImagenRef.current) {
      inputImagenRef.current.value = "";
    }
  };

  const eliminarPlaneta = (index) => {
    const copia = [...planetasVisitados];
    copia.splice(index, 1);

    setPlanetasVisitados(copia);

    if (planetaSeleccionado === index) {
      setPlanetaSeleccionado(null);
    }
  };

  const editarPlaneta = (index) => {
    const planeta = planetasVisitados[index];

    setNombre(planeta.nombre);
    setDescripcion(planeta.descripcion);
    setIndiceEditar(index);
  };

  return (
    <div className="contenedor">

      <h1>Explorador Espacial</h1>

      <div className="panel">
        <h2>Panel de Control</h2>

        <p>Distancia: {distancia} km</p>
        <p>Combustible: {combustible}%</p>
        <p>{mensajeEstado}</p>

        <button onClick={aterrizar}>
          Aterrizar
        </button>
      </div>

      <hr />

      <h2>Bitacora de Exploracion</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del planeta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <textarea
          placeholder="Descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />

        <input
          type="file"
          ref={inputImagenRef}
          onChange={(e) => setImagen(e.target.files[0])}
        />

        <button type="submit">
          {indiceEditar !== null ? "Actualizar" : "Guardar"}
        </button>
      </form>

      <h2>Planetas Registrados</h2>

      {planetasVisitados.map((planeta, index) => (
        <div key={index} className="card">

          <Planeta nombre={planeta.nombre} />

          <button onClick={() => setPlanetaSeleccionado(index)}>
            Ver detalles
          </button>

          <button onClick={() => editarPlaneta(index)}>
            Editar
          </button>

          <button onClick={() => eliminarPlaneta(index)}>
            Eliminar
          </button>
        </div>
      ))}

      {planetaSeleccionado !== null && (
        <div className="detalle">
          <h3>
            {planetasVisitados[planetaSeleccionado].nombre}
          </h3>

          <p>
            {planetasVisitados[planetaSeleccionado].descripcion}
          </p>

          {planetasVisitados[planetaSeleccionado].imagen && (
            <img
              src={
                planetasVisitados[planetaSeleccionado].imagen
              }
              alt={
                planetasVisitados[planetaSeleccionado].nombre
              }
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;