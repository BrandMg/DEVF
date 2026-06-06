import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');

  // Calcula el tiempo total solo cuando cambian las tareas
  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]);

  // Actualiza el título de la página cuando cambia el total
  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [calcularTiempoTotal]);

  // Agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };

      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Contador de Tareas</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
          style={{ marginRight: '10px', padding: '5px' }}
        />

        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración en minutos"
          style={{ marginRight: '10px', padding: '5px' }}
        />

        <button onClick={agregarTarea}>
          Agregar tarea
        </button>
      </div>

      <h2>Tareas</h2>

      {tareas.length === 0 ? (
        <p>No hay tareas registradas.</p>
      ) : (
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>
              {tarea.nombre}: {tarea.duracion} minutos
            </li>
          ))}
        </ul>
      )}

      <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}

export default App;