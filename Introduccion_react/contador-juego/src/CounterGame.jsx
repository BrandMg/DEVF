import {
  useReducer,
  useRef,
  useCallback,
  useEffect,
  useState,
} from "react";

// Recuperar datos guardados en localStorage
const savedData = JSON.parse(localStorage.getItem("counterGame"));

const initialState = savedData || {
  count: 0,
  history: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.payload,
        history: [
          ...state.history,
          `+${action.payload} (Nuevo valor: ${state.count + action.payload})`,
        ],
      };

    case "decrement":
      return {
        count: state.count - 1,
        history: [
          ...state.history,
          `-1 (Nuevo valor: ${state.count - 1})`,
        ],
      };

    case "undo":
      if (state.history.length === 0) return state;

      const lastEntry = state.history[state.history.length - 1];

      let newCount = state.count;

      if (lastEntry.startsWith("+")) {
        const value = parseInt(lastEntry.match(/\+(\d+)/)[1]);
        newCount = state.count - value;
      } else if (lastEntry.startsWith("-")) {
        newCount = state.count + 1;
      }

      return {
        count: newCount,
        history: state.history.slice(0, -1),
      };

    case "reset":
      return {
        count: 0,
        history: [],
      };

    default:
      return state;
  }
}

function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [incrementValue, setIncrementValue] = useState(1);

  const incrementBtnRef = useRef(null);

  // Enfocar boton al cargar
  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem(
      "counterGame",
      JSON.stringify(state)
    );
  }, [state]);

  const handleIncrement = useCallback(() => {
    dispatch({
      type: "increment",
      payload: Number(incrementValue) || 1,
    });
  }, [incrementValue]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const handleUndo = useCallback(() => {
    dispatch({ type: "undo" });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2>Contador: {state.count}</h2>

      <div>
        <input
          type="number"
          value={incrementValue}
          onChange={(e) =>
            setIncrementValue(e.target.value)
          }
          placeholder="Cantidad a sumar"
        />
      </div>

      <br />

      <button
        ref={incrementBtnRef}
        onClick={handleIncrement}
      >
        +
      </button>

      <button onClick={handleDecrement}>
        -
      </button>

      <button onClick={handleUndo}>
        Deshacer
      </button>

      <button onClick={handleReset}>
        Reset
      </button>

      <h3>Historial de cambios</h3>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        {state.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterGame;